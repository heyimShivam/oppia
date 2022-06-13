// Copyright 2018 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Unit tests for question update service.
 */

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SubtitledHtml } from 'domain/exploration/subtitled-html.model';
import { QuestionObjectFactory } from 'domain/question/QuestionObjectFactory';
import { QuestionUndoRedoService } from 'domain/editor/undo_redo/question-undo-redo.service';
import { QuestionUpdateService} from 'domain/question/question-update.service';
import { StateObjectFactory } from 'domain/state/StateObjectFactory';
import cloneDeep from 'lodash/cloneDeep';

describe('Question update service', () => {
  let questionUpdateService = null;
  let questionObjectFactory = null;
  let questionUndoRedoService = null;
  let stateObjectFactory = null;
  let sampleQuestion = null;
  let sampleStateDict = null;
  let expectedOutputStateDict = null;
  let expectedOutputState = null;
  let sampleQuestionBackendObject = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        QuestionUpdateService,
        QuestionObjectFactory,
        QuestionUndoRedoService,
        StateObjectFactory
      ]
    });

    questionUpdateService = TestBed.inject(QuestionUpdateService);
    questionObjectFactory = TestBed.inject(QuestionObjectFactory);
    questionUndoRedoService = TestBed.inject(QuestionUndoRedoService);
    stateObjectFactory = TestBed.inject(StateObjectFactory);

    sampleStateDict = {
      name: 'question',
      classifier_model_id: 0,
      content: {
        html: 'old content',
        content_id: 'content'
      },
      param_changes: [],
      interaction: {
        answer_groups: [{
          rule_specs: [{
            rule_type: 'Contains',
            inputs: {x: {
              contentId: 'rule_input',
              normalizedStrSet: ['hola']
            }}
          }],
          outcome: {
            dest: 'Me Llamo',
            feedback: {
              content_id: 'feedback_1',
              html: 'buen trabajo!'
            },
            labelled_as_correct: true
          }
        }],
        customization_args: {
          placeholder: {
            value: {
              content_id: 'ca_placeholder_0',
              unicode_str: ''
            }
          },
          rows: { value: 1 }
        },
        default_outcome: {
          dest: 'Hola',
          feedback: {
            content_id: 'default_outcome',
            html: 'try again!'
          },
          labelled_as_correct: false
        },
        hints: [],
        id: 'TextInput',
      },
      linked_skill_id: null,
      recorded_voiceovers: {
        voiceovers_mapping: {
          content: {},
          default_outcome: {}
        }
      },
      solicit_answer_details: false,
      written_translations: {
        translations_mapping: {
          content: {},
          default_outcome: {}
        }
      }
    };

    expectedOutputStateDict = {
      name: 'question',
      classifier_model_id: 0,
      content: {
        html: 'test content',
        content_id: 'content'
      },
      param_changes: [],
      interaction: {
        answer_groups: [{
          rule_specs: [{
            rule_type: 'Contains',
            inputs: {x: {
              contentId: 'rule_input',
              normalizedStrSet: ['hola']
            }}
          }],
          outcome: {
            dest: 'Me Llamo',
            feedback: {
              content_id: 'feedback_1',
              html: 'buen trabajo!'
            },
            labelled_as_correct: true
          }
        }],
        customization_args: {
          placeholder: {
            value: {
              content_id: 'ca_placeholder_0',
              unicode_str: ''
            }
          },
          rows: { value: 1 }
        },
        default_outcome: {
          dest: 'Hola',
          feedback: {
            content_id: 'default_outcome',
            html: 'try again!'
          },
          labelled_as_correct: false
        },
        hints: [],
        id: 'TextInput',
      },
      linked_skill_id: null,
      recorded_voiceovers: {
        voiceovers_mapping: {
          content: {},
          default_outcome: {}
        }
      },
      solicit_answer_details: false,
      written_translations: {
        translations_mapping: {
          content: {},
          default_outcome: {}
        }
      }
    };

    expectedOutputState = stateObjectFactory.createFromBackendDict(
      'question', expectedOutputStateDict);

    sampleQuestionBackendObject = {
      id: '0',
      question_state_data: sampleStateDict,
      language_code: 'en',
      version: 1
    };

    sampleQuestion = questionObjectFactory.createFromBackendDict(
      sampleQuestionBackendObject);
  });
  it('should update the language code of the question', () => {
    expect(sampleQuestion.getLanguageCode()).toEqual('en');

    questionUpdateService.setQuestionLanguageCode(sampleQuestion, 'zh');
    expect(sampleQuestion.getLanguageCode()).toEqual('zh');

    questionUndoRedoService.undoChange(sampleQuestion);
    expect(sampleQuestion.getLanguageCode()).toEqual('en');
  });

  it('should update the state data of the question', () => {
    let oldStateData = cloneDeep(sampleQuestion.getStateData());
    let updateFunction = () => {
      let stateData = sampleQuestion.getStateData();
      stateData.content = SubtitledHtml.createDefault(
        'test content', 'content');
    };

    questionUpdateService.setQuestionStateData(
      sampleQuestion, updateFunction);
    expect(sampleQuestion.getStateData()).toEqual(expectedOutputState);

    questionUndoRedoService.undoChange(sampleQuestion);
    expect(sampleQuestion.getStateData()).toEqual(oldStateData);
  });

  it('should set question inapplicable skills misconception ids when ' +
    'calling \'setQuestionInapplicableSkillMisconceptionIds\'', () => {
    expect(sampleQuestion.getInapplicableSkillMisconceptionIds())
      .toBe(undefined);

    questionUpdateService.setQuestionInapplicableSkillMisconceptionIds(
      sampleQuestion, ['id1']);
    expect(sampleQuestion.getInapplicableSkillMisconceptionIds())
      .toEqual(['id1']);

    questionUndoRedoService.undoChange(sampleQuestion);
    expect(sampleQuestion.getInapplicableSkillMisconceptionIds())
      .toBe(undefined);
  });
});
