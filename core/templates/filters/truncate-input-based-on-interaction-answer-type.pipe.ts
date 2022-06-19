// Copyright 2022 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview TruncateInputBasedOnInteractionAnswerType Pipe for Oppia.
 */

import { Pipe, PipeTransform } from '@angular/core';
import INTERACTION_SPECS from 'interactions/interaction_specs.json';
import { TruncatePipe } from 'filters/string-utility-filters/truncate.pipe';
import { CodeReplAnswer, PencilCodeEditorAnswer } from 'extensions/interactions/answer-defs';

@Pipe({
  name: 'truncateInputBasedOnInteractionAnswerTypePipe'
})
export class TruncateInputBasedOnInteractionAnswerTypePipe
  implements PipeTransform {
  constructor(
    private truncatePipe: TruncatePipe,
  ) { }

  transform(
      input: CodeReplAnswer | PencilCodeEditorAnswer,
      interactionId: string, length: number): string {
    let answerType = INTERACTION_SPECS[interactionId].answer_type;
    let actualInputToTruncate = '';

    if (answerType === 'NormalizedString') {
      actualInputToTruncate = input as unknown as string;
    } else if (answerType === 'CodeEvaluation') {
      actualInputToTruncate = input.code;
    } else {
      throw new Error('Unknown interaction answer type');
    }

    return this.truncatePipe.transform(actualInputToTruncate, length);
  }
}
