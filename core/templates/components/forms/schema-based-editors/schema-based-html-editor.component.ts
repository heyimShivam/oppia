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
 * @fileoverview Component for a schema-based editor for HTML.
 */

import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ControlValueAccessor, ValidationErrors, Validator } from '@angular/forms';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
  selector: 'schema-based-html-editor',
  templateUrl: './schema-based-html-editor.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SchemaBasedHtmlEditorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SchemaBasedHtmlEditorComponent),
    },
  ]
})

export class SchemaBasedHtmlEditorComponent
implements ControlValueAccessor, OnInit, Validator {
  localValue;
  @Input() disabled;
  @Input() labelForFocusTarget;
  @Input() uiConfig;
  @Input() headersEnabled;
  onChange: (val: unknown) => void = () => {};
  constructor() { }

  // Implemented as a part of ControlValueAccessor interface.
  writeValue(value: unknown): void {
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

  ngOnInit(): void { }

  updateValue(value: string): void {
    this.onChange(value);
    setTimeout(() => {
      this.onChange(value);
    });
  }
}

angular.module('oppia').directive('schemaBasedHtmlEditor', downgradeComponent({
  component: SchemaBasedHtmlEditorComponent
}));
