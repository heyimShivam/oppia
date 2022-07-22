// Copyright 2019 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Component for showing and reviewing contributions.
 */

import cloneDeep from 'lodash/cloneDeep';
import { ActiveContributionDict, TranslationSuggestionReviewModalComponent } from '../modal-templates/translation-suggestion-review-modal.component';
import { AlertsService } from 'services/alerts.service';
import { AppConstants } from 'app.constants';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContextService } from 'services/context.service';
import { ContributionAndReviewService } from '../services/contribution-and-review.service';
import { ContributionOpportunitiesService } from '../services/contribution-opportunities.service';
import { ContributorDashboardConstants } from 'pages/contributor-dashboard-page/contributor-dashboard-page.constants';
import { downgradeComponent } from '@angular/upgrade/static';
import { FormatRtePreviewPipe } from 'filters/format-rte-preview.pipe';
import { MisconceptionSkillMap } from 'domain/skill/MisconceptionObjectFactory';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Question, QuestionBackendDict, QuestionObjectFactory } from 'domain/question/QuestionObjectFactory';
import { QuestionSuggestionReviewModalComponent } from '../modal-templates/question-suggestion-review-modal.component';
import { Rubric } from 'domain/skill/rubric.model';
import { SkillBackendApiService } from 'domain/skill/skill-backend-api.service';
import { Subscription } from 'rxjs';
import { TranslationTopicService } from 'pages/exploration-editor-page/translation-tab/services/translation-topic.service';
import { UserService } from 'services/user.service';

export interface Suggestion {
  change: {
    skill_id?: string;
    content_html: string;
    translation_html: string | string[];
    question_dict?: QuestionBackendDict;
    skill_difficulty?: string[];
  };
  status: string;
  suggestion_type: string;
  target_id: string;
  suggestion_id: string;
  author_name?: string;
}

export interface QuestionContributionsSummaryList {
  id: string;
  heading: string;
  subheading: string;
  labelText: string;
  labelColor: string;
  actionButtonTitle: string;
}

export interface TranslationContributionsSummaryList {
  id: string;
  heading: string;
  subheading: string;
  labelText: string;
  labelColor: string;
  actionButtonTitle: string;
}

export interface OpportunitiesDictsObject {
  opportunitiesDicts: unknown;
  more: unknown;
}

export interface ContributionDetails {
  skill_description: string;
  skill_rubrics: Rubric[];
  chapter_title: string;
  story_title: string;
  topic_name: string;
}

export interface ContributionTabs {
  suggestionType: string;
  text: string;
  enabled: boolean;
}

export interface SuggestionIdToSuggestions {
  [key: string]: {
    suggestion: Suggestion;
    details: {
      skill_description: string;
      topic_name: string;
      chapter_title: string;
      story_title: string;
    };
  };
}

export interface SUGGESTION_LABELS {
  [key: string]: {
    text: string;
    color: string;
  };
}

export interface SuggestionContributions {
  suggestion_type: string;
  suggestion_id: string;
  target_id: string;
  change: {
    content_html: string;
    translation_html: string;
  };
  status: string;
}

export interface Contributions {
  [key: string]: {
    details: ContributionDetails | string;
    suggestion: Suggestion;
  };
}

export interface ReviewTabs {
  suggestionType: string;
  text: string;
}

@Component({
  selector: 'oppia-contributions-and-review',
  templateUrl: './contributions-and-review.component.html'
})
export class ContributionsAndReview
  implements OnInit, OnDestroy {
  directiveSubscriptions = new Subscription();

  SUGGESTION_TYPE_QUESTION: string;
  SUGGESTION_TYPE_TRANSLATE: string;
  TAB_TYPE_CONTRIBUTIONS: string;
  TAB_TYPE_REVIEWS: string;
  activeExplorationId: string;
  SUGGESTION_LABELS: SUGGESTION_LABELS;
  contributions: Contributions;
  userDetailsLoading: boolean;
  userIsLoggedIn: boolean;
  activeTabType: string;
  activeSuggestionType: string;
  dropdownShown: boolean;
  activeDropdownTabChoice: string;
  reviewTabs: ReviewTabs[] = [];
  contributionTabs: ContributionTabs[];
  tabNameToOpportunityFetchFunction: unknown;

  constructor(
    private alertsService: AlertsService,
    private contextService: ContextService,
    private contributionAndReviewService: ContributionAndReviewService,
    private contributionOpportunitiesService: ContributionOpportunitiesService,
    private formatRtePreviewPipe: FormatRtePreviewPipe,
    private ngbModal: NgbModal,
    private questionObjectFactory: QuestionObjectFactory,
    private skillBackendApiService: SkillBackendApiService,
    private translationTopicService: TranslationTopicService,
    private userService: UserService,
  ) {}

  getQuestionContributionsSummary(
      suggestionIdToSuggestions: SuggestionIdToSuggestions):
      QuestionContributionsSummaryList[] {
    let questionContributionsSummaryList = [];
    Object.keys(suggestionIdToSuggestions).forEach((key) => {
      let suggestion = suggestionIdToSuggestions[key].suggestion;
      let details = suggestionIdToSuggestions[key].details;
      let subheading = '';
      if (details === null) {
        subheading = (
          ContributorDashboardConstants.CORRESPONDING_DELETED_OPPORTUNITY_TEXT);
      } else {
        subheading = details.skill_description;
      }

      let change = suggestion.change;
      let requiredData = {
        id: suggestion.suggestion_id,
        heading: this.formatRtePreviewPipe.transform(
          change.question_dict?.question_state_data.content.html),
        subheading: subheading,
        labelText: this.SUGGESTION_LABELS[suggestion.status].text,
        labelColor: this.SUGGESTION_LABELS[suggestion.status].color,
        actionButtonTitle: (
          this.activeTabType === this.TAB_TYPE_REVIEWS ? 'Review' : 'View')
      };
      questionContributionsSummaryList.push(requiredData);
    });
    return questionContributionsSummaryList;
  }

  getTranslationContributionsSummary(
      suggestionIdToSuggestions: SuggestionIdToSuggestions
  ): TranslationContributionsSummaryList[] {
    let translationContributionsSummaryList = [];

    Object.keys(suggestionIdToSuggestions).forEach((key) => {
      let suggestion = suggestionIdToSuggestions[key].suggestion;
      let details = suggestionIdToSuggestions[key].details;
      let subheading = '';
      if (details === null) {
        subheading = (
          ContributorDashboardConstants.CORRESPONDING_DELETED_OPPORTUNITY_TEXT);
      } else {
        subheading = (
          details.topic_name + ' / ' + details.story_title +
          ' / ' + details.chapter_title);
      }

      let requiredData = {
        id: suggestion.suggestion_id,
        heading: this.getTranslationSuggestionHeading(suggestion),
        subheading: subheading,
        labelText: this.SUGGESTION_LABELS[suggestion.status].text,
        labelColor: this.SUGGESTION_LABELS[suggestion.status].color,
        actionButtonTitle: (
          this.activeTabType === this.TAB_TYPE_REVIEWS ? 'Review' : 'View')
      };

      translationContributionsSummaryList.push(requiredData);
    });
    return translationContributionsSummaryList;
  }

  getTranslationSuggestionHeading(suggestion: Suggestion): string {
    const changeTranslation = suggestion.change.translation_html;

    if (Array.isArray(changeTranslation)) {
      return this.formatRtePreviewPipe.transform(', ');
    }
    return this.formatRtePreviewPipe.transform(changeTranslation);
  }

  resolveSuggestionSuccess(suggestionId: string): void {
    this.alertsService.addSuccessMessage('Submitted suggestion review.');
    this.contributionOpportunitiesService.removeOpportunitiesEventEmitter.emit(
      [suggestionId]);
  }

  _showQuestionSuggestionModal(
      suggestion: Suggestion,
      contributionDetails: ContributionDetails, reviewable: boolean,
      misconceptionsBySkill: MisconceptionSkillMap, question: Question): void {
    let targetId = suggestion.target_id;
    let suggestionId = suggestion.suggestion_id;
    let authorName = suggestion.author_name;
    let questionHeader = contributionDetails.skill_description;
    let updatedQuestion = (
      question || this.questionObjectFactory.createFromBackendDict(
        suggestion.change.question_dict));
    let contentHtml = updatedQuestion.getStateData().content.html;
    let skillRubrics = contributionDetails.skill_rubrics;
    let skillDifficulty = suggestion.change.skill_difficulty;

    const modalRef = this.ngbModal.open(
      QuestionSuggestionReviewModalComponent, {
        backdrop: 'static',
        size: 'lg',
      });

    modalRef.componentInstance.authorName = authorName;
    modalRef.componentInstance.contentHtml = contentHtml;
    modalRef.componentInstance.reviewable = reviewable;
    modalRef.componentInstance.question = updatedQuestion;
    modalRef.componentInstance.questionHeader = questionHeader;
    modalRef.componentInstance.suggestion = cloneDeep(suggestion);
    modalRef.componentInstance.skillRubrics = skillRubrics;
    modalRef.componentInstance.suggestionId = suggestionId;
    modalRef.componentInstance.skillDifficulty = skillDifficulty;
    modalRef.componentInstance.misconceptionsBySkill = (
      misconceptionsBySkill);

    modalRef.componentInstance.editSuggestionEmitter.subscribe((value) => {
      this.openQuestionSuggestionModal(
        value.suggestionId,
        value.suggestion,
        value.reviewable,
        value.question);
    });

    modalRef.result.then((result) => {
      this.contributionAndReviewService.reviewSkillSuggestion(
        targetId, suggestionId, result.action, result.reviewMessage,
        result.skillDifficulty, this.resolveSuggestionSuccess.bind(this),
        () => {
          this.alertsService.addInfoMessage('Failed to submit suggestion.');
        });
    }, () => {});
  }

  _showTranslationSuggestionModal(
      suggestionIdToContribution: Record<string, ActiveContributionDict>,
      initialSuggestionId: string, reviewable: boolean): void {
    let details = (
      this.contributions[initialSuggestionId].details as ContributionDetails);
    let subheading = (
      details.topic_name + ' / ' + details.story_title +
      ' / ' + details.chapter_title);

    const modalRef: NgbModalRef = this.ngbModal.open(
      TranslationSuggestionReviewModalComponent, {
        backdrop: 'static',
        windowClass: 'oppia-translation-suggestion-review-modal',
        size: 'lg',
      });

    modalRef.componentInstance.suggestionIdToContribution = (
      cloneDeep(suggestionIdToContribution));
    modalRef.componentInstance.initialSuggestionId = initialSuggestionId;
    modalRef.componentInstance.reviewable = reviewable;
    modalRef.componentInstance.subheading = subheading;

    modalRef.result.then((resolvedSuggestionIds) => {
      this.contributionOpportunitiesService.
        removeOpportunitiesEventEmitter.emit(
          resolvedSuggestionIds);
      resolvedSuggestionIds.forEach((suggestionId) => {
        delete this.contributions[suggestionId];
      });
    }, () => {
      // Note to developers:
      // This callback is triggered when the Cancel button is clicked.
      // No further action is needed.
    });
  }

  isActiveTab(tabType: string, suggestionType: string): boolean {
    return (
      this.activeTabType === tabType &&
      this.activeSuggestionType === suggestionType);
  }

  isReviewTranslationsTab(): boolean {
    return (
      this.activeTabType === this.TAB_TYPE_REVIEWS &&
      this.activeSuggestionType === this.SUGGESTION_TYPE_TRANSLATE);
  }

  openQuestionSuggestionModal(
      suggestionId: string,
      suggestion: Suggestion,
      reviewable: boolean,
      question = undefined): void {
    let contributionDetails = this.contributions[suggestionId].details;
    let skillId = suggestion.change.skill_id;

    this.contextService.setCustomEntityContext(
      AppConstants.IMAGE_CONTEXT.QUESTION_SUGGESTIONS, skillId);

    this.skillBackendApiService.fetchSkillAsync(skillId).then((skillDict) => {
      let misconceptionsBySkill = {};
      let skill = skillDict.skill;
      misconceptionsBySkill[skill.getId()] = skill.getMisconceptions();
      this._showQuestionSuggestionModal(
        suggestion, contributionDetails as ContributionDetails, reviewable,
        misconceptionsBySkill, question);
    });
  }

  onClickViewSuggestion(suggestionId: string): void {
    let suggestion = this.contributions[suggestionId].suggestion;
    let reviewable = this.activeTabType === this.TAB_TYPE_REVIEWS;
    if (suggestion.suggestion_type === this.SUGGESTION_TYPE_QUESTION) {
      this.openQuestionSuggestionModal(suggestionId, suggestion, reviewable);
    }
    if (suggestion.suggestion_type === this.SUGGESTION_TYPE_TRANSLATE) {
      const suggestionIdToContribution = {};
      for (let suggestionId in this.contributions) {
        let contribution = this.contributions[suggestionId];
        suggestionIdToContribution[suggestionId] = contribution;
      }
      this.contextService.setCustomEntityContext(
        AppConstants.IMAGE_CONTEXT.EXPLORATION_SUGGESTIONS,
        suggestion.target_id);
      this._showTranslationSuggestionModal(
        suggestionIdToContribution, suggestionId, reviewable);
    }
  }

  getContributionSummaries(
      suggestionIdToSuggestions: SuggestionIdToSuggestions
  ): TranslationContributionsSummaryList[] |
    QuestionContributionsSummaryList[] {
    if (this.activeSuggestionType === this.SUGGESTION_TYPE_TRANSLATE) {
      return this.getTranslationContributionsSummary(suggestionIdToSuggestions);
    } else if (this.activeSuggestionType === this.SUGGESTION_TYPE_QUESTION) {
      return this.getQuestionContributionsSummary(suggestionIdToSuggestions);
    }
  }

  getActiveDropdownTabChoice(): string {
    if (this.activeTabType === this.TAB_TYPE_REVIEWS) {
      if (this.activeSuggestionType === this.SUGGESTION_TYPE_QUESTION) {
        return 'Review Questions';
      }
      return 'Review Translations';
    }

    if (this.activeSuggestionType === this.SUGGESTION_TYPE_QUESTION) {
      return 'Questions';
    }

    return 'Translations';
  }

  switchToTab(tabType: string, suggestionType: string): void {
    this.activeSuggestionType = suggestionType;
    this.activeTabType = tabType;
    this.contributionAndReviewService.setActiveTabType(tabType);
    this.contributionAndReviewService.setActiveSuggestionType(suggestionType);
    this.activeDropdownTabChoice = this.getActiveDropdownTabChoice();
    this.dropdownShown = false;
    this.activeExplorationId = null;
    this.contributionOpportunitiesService
      .reloadOpportunitiesEventEmitter.emit();
  }

  toggleDropdown(): void {
    this.dropdownShown = !this.dropdownShown;
  }

  loadReviewableTranslationOpportunities(): Promise<OpportunitiesDictsObject> {
    return this.contributionOpportunitiesService
      .getReviewableTranslationOpportunitiesAsync(
        this.translationTopicService.getActiveTopicName())
      .then((response) => {
        const opportunitiesDicts = [];
        response.opportunities.forEach(opportunity => {
          const opportunityDict = {
            id: opportunity.getExplorationId(),
            heading: opportunity.getOpportunityHeading(),
            subheading: opportunity.getOpportunitySubheading(),
            actionButtonTitle: 'Translations'
          };
          opportunitiesDicts.push(opportunityDict);
        });

        return {
          opportunitiesDicts: opportunitiesDicts,
          more: response.more
        };
      });
  }

  onClickReviewableTranslations(explorationId: string): void {
    this.activeExplorationId = explorationId;
  }

  onClickBackToReviewableLessons(): void {
    this.activeExplorationId = null;
  }

  loadContributions(shouldResetOffset: boolean):
    Promise<OpportunitiesDictsObject> {
    if (!this.activeTabType || !this.activeSuggestionType) {
      return new Promise((resolve, reject) => {
        resolve({opportunitiesDicts: [], more: false});
      });
    }
    const fetchFunction = this.tabNameToOpportunityFetchFunction[
      this.activeSuggestionType][this.activeTabType];

    this.contributions = {};

    return fetchFunction(shouldResetOffset).then((response) => {
      Object.keys(response.suggestionIdToDetails).forEach(id => {
        this.contributions[id] = response.suggestionIdToDetails[id];
      });
      return {
        opportunitiesDicts: this.getContributionSummaries(
          response.suggestionIdToDetails),
        more: response.more
      };
    });
  }

  loadOpportunities(): Promise<OpportunitiesDictsObject> {
    return this.loadContributions(/* Param shouldResetOffset= */ true);
  }

  loadMoreOpportunities(): Promise<OpportunitiesDictsObject> {
    return this.loadContributions(/* Param shouldResetOffset= */ false);
  }

  closeDropdownWhenClickedOutside(clickEvent: {target: Node}): void {
    const dropdown = document
      .querySelector('.oppia-contributions-dropdown-container');
    if (!dropdown) {
      return;
    }

    const clickOccurredWithinDropdown =
      dropdown.contains(clickEvent.target);
    if (clickOccurredWithinDropdown) {
      return;
    }

    this.dropdownShown = false;
  }

  ngOnInit(): void {
    this.SUGGESTION_LABELS = {
      review: {
        text: 'Awaiting review',
        color: '#eeeeee'
      },
      accepted: {
        text: 'Accepted',
        color: '#8ed274'
      },
      rejected: {
        text: 'Revisions Requested',
        color: '#e76c8c'
      }
    };
    this.SUGGESTION_TYPE_QUESTION = 'add_question';
    this.SUGGESTION_TYPE_TRANSLATE = 'translate_content';
    this.TAB_TYPE_CONTRIBUTIONS = 'contributions';
    this.TAB_TYPE_REVIEWS = 'reviews';
    this.activeExplorationId = null;

    this.userDetailsLoading = true;
    this.userIsLoggedIn = false;
    this.activeTabType = '';
    this.activeSuggestionType = '';
    this.dropdownShown = false;
    this.activeDropdownTabChoice = '';
    this.reviewTabs = [];
    this.contributionTabs = [
      {
        suggestionType: this.SUGGESTION_TYPE_QUESTION,
        text: 'Questions',
        enabled: false
      },
      {
        suggestionType: this.SUGGESTION_TYPE_TRANSLATE,
        text: 'Translations',
        enabled: true
      }
    ];

    this.translationTopicService.setActiveTopicName(
      ContributorDashboardConstants.DEFAULT_OPPORTUNITY_TOPIC_NAME);

    // Reset active exploration when changing topics.
    this.directiveSubscriptions.add(
      this.translationTopicService.onActiveTopicChanged.subscribe(
        () => this.activeExplorationId = null));

    this.userService.getUserInfoAsync().then((userInfo) => {
      this.userIsLoggedIn = userInfo.isLoggedIn();
      this.userDetailsLoading = false;
      if (this.userIsLoggedIn) {
        this.userService.getUserContributionRightsDataAsync().then(
          (userContributionRights) => {
            let userCanReviewTranslationSuggestionsInLanguages = (
              userContributionRights
                .can_review_translation_for_language_codes);
            let userCanReviewQuestionSuggestions = (
              userContributionRights.can_review_questions);
            let userReviewableSuggestionTypes = [];
            let userCanSuggestQuestions = (
              userContributionRights.can_suggest_questions);
            for (let index in this.contributionTabs) {
              if (this.contributionTabs[index].suggestionType === (
                this.SUGGESTION_TYPE_QUESTION)) {
                this.contributionTabs[index].enabled = (
                  userCanSuggestQuestions);
              }
            }
            if (userCanReviewQuestionSuggestions) {
              this.reviewTabs.push({
                suggestionType: this.SUGGESTION_TYPE_QUESTION,
                text: 'Review Questions'
              });
              userReviewableSuggestionTypes.push(this.SUGGESTION_TYPE_QUESTION);
            }
            if (
              userCanReviewTranslationSuggestionsInLanguages
                .length > 0) {
              this.reviewTabs.push({
                suggestionType: this.SUGGESTION_TYPE_TRANSLATE,
                text: 'Review Translations'
              });
              userReviewableSuggestionTypes.push(
                this.SUGGESTION_TYPE_TRANSLATE);
            }
            if (userReviewableSuggestionTypes.length > 0) {
              this.switchToTab(
                this.TAB_TYPE_REVIEWS, userReviewableSuggestionTypes[0]);
            } else if (userCanSuggestQuestions) {
              this.switchToTab(
                this.TAB_TYPE_CONTRIBUTIONS, this.SUGGESTION_TYPE_QUESTION);
            } else {
              this.switchToTab(
                this.TAB_TYPE_CONTRIBUTIONS, this.SUGGESTION_TYPE_TRANSLATE);
            }
          });
      }
    });

    this.tabNameToOpportunityFetchFunction = {
      [this.SUGGESTION_TYPE_QUESTION]: {
        [this.TAB_TYPE_CONTRIBUTIONS]: shouldResetOffset => {
          return this.contributionAndReviewService
            .getUserCreatedQuestionSuggestionsAsync(
              shouldResetOffset);
        },
        [this.TAB_TYPE_REVIEWS]: shouldResetOffset => {
          return this.contributionAndReviewService
            .getReviewableQuestionSuggestionsAsync(
              shouldResetOffset);
        }
      },
      [this.SUGGESTION_TYPE_TRANSLATE]: {
        [this.TAB_TYPE_CONTRIBUTIONS]: shouldResetOffset => {
          return this.contributionAndReviewService
            .getUserCreatedTranslationSuggestionsAsync(
              shouldResetOffset);
        },
        [this.TAB_TYPE_REVIEWS]: shouldResetOffset => {
          return this.contributionAndReviewService
            .getReviewableTranslationSuggestionsAsync(
              shouldResetOffset,
              this.activeExplorationId);
        }
      }
    };

    $(document).on('click', this.closeDropdownWhenClickedOutside);
  }

  ngOnDestroy(): void {
    this.directiveSubscriptions.unsubscribe();
    $(document).off('click', this.closeDropdownWhenClickedOutside);
  }
}

angular.module('oppia').directive('oppiaContributionsAndReview',
  downgradeComponent({
    component: ContributionsAndReview
  }) as angular.IDirectiveFactory);
