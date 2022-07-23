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
 * @fileoverview Module for the contributor dashboard page.
 */

import { NgModule } from '@angular/core';
import { SharedComponentsModule } from 'components/shared-component.module';


import { CkEditorCopyToolbarComponent } from 'components/ck-editor-helpers/ck-editor-copy-toolbar/ck-editor-copy-toolbar.component';
import { InteractionExtensionsModule } from 'interactions/interactions.module';
import { TranslationLanguageSelectorComponent } from
  './translation-language-selector/translation-language-selector.component';
import { TranslationTopicSelectorComponent } from
  './translation-topic-selector/translation-topic-selector.component';
import { LoginRequiredMessageComponent } from './login-required-message/login-required-message.component';
import { LoginRequiredModalContent } from './modal-templates/login-required-modal.component';

import { OpportunitiesListItemComponent } from './opportunities-list-item/opportunities-list-item.component';
import { OpportunitiesListComponent } from './opportunities-list/opportunities-list.component';
import { TranslationSuggestionReviewModalComponent } from './modal-templates/translation-suggestion-review-modal.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslationModalComponent } from './modal-templates/translation-modal.component';
import { TranslationOpportunitiesComponent } from './translation-opportunities/translation-opportunities.component';
import { ContributionsAndReview } from './contributions-and-review/contributions-and-review.component';
import { QuestionOpportunitiesComponent } from './question-opportunities/question-opportunities.component';
import { ContributorDashboardPageComponent } from 'pages/contributor-dashboard-page/contributor-dashboard-page.component';

import { SharedFormsModule } from 'components/forms/shared-forms.module';

import { ContributorDashboardPageRoutingModule } from './contributor-dashboard-page-routing.module';
import { ContributorDashboardRootComponent } from './contributor-dashboard-page-root.component';import { CommonModule } from '@angular/common';
;

@NgModule({
  imports: [
    CommonModule,
    InteractionExtensionsModule,
    ContributorDashboardPageRoutingModule,
    SharedComponentsModule,
    NgbModule,
    SharedFormsModule,
  ],
  declarations: [
    CkEditorCopyToolbarComponent,
    LoginRequiredMessageComponent,
    LoginRequiredModalContent,
    OpportunitiesListItemComponent,
    OpportunitiesListComponent,
    TranslationLanguageSelectorComponent,
    TranslationOpportunitiesComponent,
    TranslationSuggestionReviewModalComponent,
    TranslationTopicSelectorComponent,
    TranslationModalComponent,
    ContributionsAndReview,
    QuestionOpportunitiesComponent,
    ContributorDashboardRootComponent,
    ContributorDashboardPageComponent
  ],
  entryComponents: [
    CkEditorCopyToolbarComponent,
    LoginRequiredMessageComponent,
    LoginRequiredModalContent,
    OpportunitiesListItemComponent,
    OpportunitiesListComponent,
    TranslationLanguageSelectorComponent,
    TranslationOpportunitiesComponent,
    TranslationSuggestionReviewModalComponent,
    TranslationTopicSelectorComponent,
    TranslationModalComponent,
    ContributionsAndReview,
    QuestionOpportunitiesComponent,
    ContributorDashboardRootComponent,
    ContributorDashboardPageComponent
  ]
})
export class ContributorDashboardPageModule {}
