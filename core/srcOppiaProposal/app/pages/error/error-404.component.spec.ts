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
 * @fileoverview Tests for the Base Transclusion Component.
 */

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ErrorPage } from './error-404.component';

describe('About Foundation Component', () => {
  let fixture: ComponentFixture<ErrorPage>;
  let componentInstance: ErrorPage;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ErrorPage
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPage);
    componentInstance = fixture.componentInstance;
  });

  it('should fail', () => {
    expect(componentInstance).toBeDefined();
  });
});
