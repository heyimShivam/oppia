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
 * @fileoverview Unit tests for Schema Based Float Editor Component
 */

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormControl, FormsModule } from '@angular/forms';
import { NumericInputValidationService } from 'interactions/NumericInput/directives/numeric-input-validation.service';
import { SchemaFormSubmittedService } from 'services/schema-form-submitted.service';
import { FocusManagerService } from 'services/stateful/focus-manager.service';
import { MockTranslatePipe } from 'tests/unit-test-utils';
import { SchemaBasedFloatEditorComponent } from './schema-based-float-editor.component';

class MockFocusManagerService {
  setFocusWithoutScroll(value: string) {}

  generateFocusLabel(): string {
    return 'FocusLabel';
  }

  setFocus(value: string) {}
}

describe('Schema based float editor component', function() {
  let component: SchemaBasedFloatEditorComponent;
  let fixture: ComponentFixture<SchemaBasedFloatEditorComponent>;
  let schemaFormSubmittedService: SchemaFormSubmittedService;
  let numericInputValidationService: NumericInputValidationService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        SchemaBasedFloatEditorComponent,
        MockTranslatePipe
      ],
      providers: [
        {
          provide: FocusManagerService,
          useClass: MockFocusManagerService
        },
        NumericInputValidationService,
        SchemaFormSubmittedService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaBasedFloatEditorComponent);
    component = fixture.componentInstance;

    component.validators = [
      {
        id: 'is_at_least',
        min_value: 1.1
      },
      {
        id: 'is_at_most',
        max_value: 3.5
      }
    ];
    schemaFormSubmittedService = TestBed.inject(SchemaFormSubmittedService);
    numericInputValidationService =
      TestBed.inject(NumericInputValidationService);
    fixture.detectChanges();
  });

  it('should set component properties on initialization', fakeAsync(() => {
    component.ngOnInit();
    tick(50);

    expect(component.hasLoaded).toBe(true);
    expect(component.isUserCurrentlyTyping).toBe(false);
    expect(component.hasFocusedAtLeastOnce).toBe(false);
    expect(component.errorStringI18nKey).toBe('');
    expect(component.localValue).toBe(0.0);
    expect(component.checkRequireNonnegativeInputValue).toBe(false);
    expect(component.labelForErrorFocusTarget).toBe('FocusLabel');

    tick();
    let mockFunction = function(value: number) {};
    component.registerOnChange(mockFunction);
    component.writeValue(2);
    component.registerOnTouched(null);
    component.updateLocalValue(13);

    expect(component.localValue).toBe(13);
    expect(component.onChange).toEqual(mockFunction);
  }));

  it('should call input focus when user selects the input field', () => {
    spyOn(component.inputFocus, 'emit');

    component.onFocus();

    expect(component.inputFocus.emit).toHaveBeenCalled();
  });

  it('should call input blur user deselects the input field', () => {
    spyOn(component.inputBlur, 'emit');

    component.onBlur();

    expect(component.inputBlur.emit).toHaveBeenCalled();
  });

  it('should get minimum and maximum values', () => {
    expect(component.getMinValue()).toBe(1.1);
    expect(component.getMaxValue()).toBe(3.5);
  });

  it('should not register keyboard event when user is typing', fakeAsync(() => {
    let evt = new KeyboardEvent('', {
      keyCode: 14
    });

    component.isUserCurrentlyTyping = false;

    component.onKeypress(evt);

    expect(component.isUserCurrentlyTyping).toBe(true);
  }));

  it('should register keyboard event when user is not typing if there' +
    'was as an error in form then set userTyping to false', fakeAsync(() => {
    let evt = new KeyboardEvent('', {
      keyCode: 13
    });

    let formvalue = new FormControl(null);
    formvalue.setErrors({invalidNumber: true});
    component.floatForm.form.controls.floatValue = formvalue;
    component.isUserCurrentlyTyping = true;

    component.onKeypress(evt);

    expect(component.isUserCurrentlyTyping).toBe(false);
  }));

  it('should register keyboard event when user is not typing if there' +
    'was not an error emit value', fakeAsync(() => {
    spyOn(schemaFormSubmittedService.onSubmittedSchemaBasedForm, 'emit')
      .and.stub();
    let evt = new KeyboardEvent('', {
      keyCode: 13
    });

    let formvalue = new FormControl(null);
    formvalue.setErrors({});
    component.floatForm.form.controls.floatValue = formvalue;
    component.isUserCurrentlyTyping = true;

    component.onKeypress(evt);

    expect(component.isUserCurrentlyTyping).toBe(true);
    expect(schemaFormSubmittedService.onSubmittedSchemaBasedForm.emit)
      .toHaveBeenCalled();
  }));

  it('should generate error for wrong input', fakeAsync(() => {
    spyOn(numericInputValidationService, 'getErrorStringI18nKey')
      .and.returnValue('I18N_INTERACTIONS_NUMERIC_INPUT_INVALID_NUMBER');
    component.localValue = null;
    component.generateErrors();

    expect(component.errorStringI18nKey)
      .toBe('I18N_INTERACTIONS_NUMERIC_INPUT_INVALID_NUMBER');
  }));


  it('should validate value', () => {
    component.uiConfig = null;

    expect(component.validate(new FormControl(2)))
      .toEqual({});
    expect(component.validate(new FormControl(null)))
      .toEqual({error: 'invalid'});
  });
});
