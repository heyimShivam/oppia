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
 * @fileoverview Unit tests for schema-based editor component for custom values
 */

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SchemaBasedCustomEditorComponent } from './schema-based-custom-editor.component';

describe('Schema Based Custom Editor Component', () => {
  let component: SchemaBasedCustomEditorComponent;
  let fixture: ComponentFixture<SchemaBasedCustomEditorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        SchemaBasedCustomEditorComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaBasedCustomEditorComponent);
    component = fixture.componentInstance;

    component.frm = {
      statusChanges: {
        subscribe: (callb: (value: string) => void) => {
          callb('VALID');
        }
      }
    } as NgForm;

    component.ngAfterViewInit();

    component.registerOnTouched(() => {});
    component.registerOnChange(null);
    component.onValidatorChange();
    component.onTouch();
    component.onChange = (val: boolean) => {
      return;
    };
  });

  it('should get empty object on validating', () => {
    expect(component.validate(null)).toEqual({});
  });

  it('should overwrite local value', () => {
    expect(component.localValue).toBe(undefined);

    component.writeValue(true);

    expect(component.localValue).toBeTrue();
  });

  it('should not overwrite when local value not change', () => {
    component.localValue = true;

    component.writeValue(true);

    expect(component.localValue).toBeTrue();
  });

  it('should update local value', () => {
    component.localValue = false;

    component.updateValue(false);

    expect(component.localValue).toBeFalse();

    component.updateValue(true);

    expect(component.localValue).toBeTrue();
  });
});
