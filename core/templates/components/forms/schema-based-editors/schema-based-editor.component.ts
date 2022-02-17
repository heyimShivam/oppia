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
 * @fileoverview Component for general schema-based editors.
 */

import { Input, Output, EventEmitter, Component, forwardRef, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator, AbstractControl, ValidationErrors, NgForm } from '@angular/forms';
import { downgradeComponent } from '@angular/upgrade/static';
import { Schema } from 'services/schema-default-value.service';
const INVALID = 'INVALID';
@Component({
  selector: 'schema-based-editor',
  templateUrl: './schema-based-editor.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SchemaBasedEditorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SchemaBasedEditorComponent),
    },
  ]
})
export class SchemaBasedEditorComponent
implements AfterViewInit, ControlValueAccessor, Validator {
  @ViewChild('hybridForm') frm: NgForm;
  _localValue;
  @Input() schema: Schema;
  @Input() disabled: boolean;
  @Input() labelForFocusTarget: string;
  @Output() inputBlur = new EventEmitter();
  @Output() inputFocus = new EventEmitter();
  @Input() headersEnabled;
  @Input() notRequired: boolean;
  onChange: (val: unknown) => void = () => {};
  get localValue(): unknown {
    return this._localValue;
  }

  @Input() set localValue(val: unknown) {
    this._localValue = val;
    this.onChange(val);
    this.localValueChange.emit(val);
  }

  @Output() localValueChange = new EventEmitter();
  constructor(private elementRef: ElementRef) { }

  // Implemented as a part of ControlValueAccessor interface.
  writeValue(value: unknown): void {
    if (value === null) {
      return;
    }
    this.localValue = value;
  }

  // Implemented as a part of ControlValueAccessor interface.
  registerOnChange(fn: (val: unknown) => void): void {
    this.onChange = fn;
  }

  // Implemented as a part of ControlValueAccessor interface.
  registerOnTouched(): void {
  }

  // Implemented as a part of Validator interface.
  validate(control: AbstractControl): ValidationErrors {
    return {};
  }

  ngAfterViewInit(): void {
    let form: angular.IFormController = angular.element(
      this.elementRef.nativeElement).controller('form');
    this.frm.statusChanges.subscribe((x) => {
      if (form === null || form === undefined) {
        return;
      }
      if (x === INVALID) {
        form.$setValidity('schema', false, form);
      } else {
        form.$setValidity('schema', true, form);
      }
    });
  }
}


angular.module('oppia').directive('schemaBasedEditor', downgradeComponent({
  component: SchemaBasedEditorComponent
}));
