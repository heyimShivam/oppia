// Copyright 2021 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Unit tests for the create new subtopic modal component.
 */

import { TopicObjectFactory } from 'domain/topic/TopicObjectFactory';
import { ComponentFixture, waitForAsync, TestBed, fakeAsync } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WindowRef } from 'services/contextual/window-ref.service';
import { TopicUpdateService } from 'domain/topic/topic-update.service';
import { TopicEditorStateService } from 'pages/topic-editor-page/services/topic-editor-state.service';
import { SubtopicValidationService } from 'pages/topic-editor-page/services/subtopic-validation.service';
import constants from 'assets/constants';
import { CreateNewSubtopicModalComponent } from './create-new-subtopic-modal.component';
import { Subtopic } from 'domain/topic/subtopic.model';
import { EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { SubtopicPage } from 'domain/topic/subtopic-page.model';

class MockWindowRef {
  nativeWindow = {
    location: {
      hostname: 'local'
    }
  };
}
class MockActiveModal {
  close(): void {
    return;
  }

  dismiss(): void {
    return;
  }
}
class MockTopicEditorStateService {
  getTopic() {
  }
  getClassroomUrlFragment() {
    return 'non';
  }
  deleteSubtopicPage() {
  }
  get onTopicReinitialized(): EventEmitter<void> {
    let topicReinitializedEventEmitter: EventEmitter<void> = (
      new EventEmitter());
    return topicReinitializedEventEmitter;
  }
  setSubtopicPage() {
  }
}

describe('create new subtopic modal', function() {
  let component: CreateNewSubtopicModalComponent;
  let fixture: ComponentFixture<CreateNewSubtopicModalComponent>;
  let ngbActiveModal: NgbActiveModal;
  let topicUpdateService: TopicUpdateService;
  let topicEditorStateService: MockTopicEditorStateService;
  let subtopicValidationService: SubtopicValidationService;
  let topicObjectFactory: TopicObjectFactory;
  let topic = null;
  let DefaultSubtopicPageSchema = {
    type: 'html',
    ui_config: {
      rows: 100
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreateNewSubtopicModalComponent
      ],
      providers: [
        {
          provide: WindowRef,
          useClass: MockWindowRef
        },
        {
          provide: NgbActiveModal,
          useClass: MockActiveModal
        },
        {
          provide: TopicEditorStateService,
          useClass: MockTopicEditorStateService
        },
        TopicUpdateService,
        SubtopicValidationService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewSubtopicModalComponent);
    component = fixture.componentInstance;

    ngbActiveModal = TestBed.inject(NgbActiveModal);
    TestBed.inject(WindowRef);
    topicUpdateService = TestBed.inject(TopicUpdateService);
    topicEditorStateService =
      (TestBed.inject(TopicEditorStateService) as unknown) as
      jasmine.SpyObj<MockTopicEditorStateService>;
    subtopicValidationService = TestBed.inject(SubtopicValidationService);
    topicObjectFactory = TestBed.inject(TopicObjectFactory);

    topic = topicObjectFactory.createInterstitialTopic();
    let subtopic1 = Subtopic.createFromTitle(1, 'Subtopic1');
    topic.getSubtopics = function() {
      return subtopic1;
    };
    topic.getId = function() {
      return '1';
    };
    topic.getNextSubtopicId = function() {
      return 1;
    };
    spyOn(topicEditorStateService, 'getTopic').and.returnValue(topic);

    fixture.detectChanges();
  });

  it('should assign default values to modal', () => {
    spyOn(topicUpdateService, 'addSubtopic').and.stub();

    component.ngOnInit();
    expect(component.SUBTOPIC_PAGE_SCHEMA).toEqual(DefaultSubtopicPageSchema);
    expect(component.subtopicId).toBe(1);
    expect(component.hostname).toBe('local');
    expect(component.classroomUrlFragment).toBe('non');
    expect(component.schemaEditorIsShown).toBe(false);
    expect(component.subtopicUrlFragmentExists).toBe(false);
    expect(component.errorMsg).toBe(null);
    expect(component.MAX_CHARS_IN_SUBTOPIC_TITLE)
      .toBe(constants.MAX_CHARS_IN_SUBTOPIC_TITLE);
    expect(component.MAX_CHARS_IN_SUBTOPIC_URL_FRAGMENT)
      .toBe(constants.MAX_CHARS_IN_SUBTOPIC_URL_FRAGMENT);
    expect(topicUpdateService.addSubtopic).toHaveBeenCalledWith(topic, '');
  });

  it('should call getSchema function properly', () => {
    let SUBTOPIC_PAGE_SCHEMA = component.getSchema();

    expect(SUBTOPIC_PAGE_SCHEMA).toEqual(DefaultSubtopicPageSchema);
  });

  it('should call showSchemaEditor function properly', () => {
    component.showSchemaEditor();

    expect(component.schemaEditorIsShown).toBe(true);
  });

  it('should call updateSubtopicThumbnailFilename function properly', () => {
    let newFileName = 'shivam';
    spyOn(topicUpdateService, 'setSubtopicThumbnailFilename').and.stub();
    component.updateSubtopicThumbnailFilename(newFileName);

    expect(component.editableThumbnailFilename).toBe(newFileName);
    expect(topicUpdateService.setSubtopicThumbnailFilename).toHaveBeenCalled();
  });

  it('should call updateSubtopicThumbnailBgColor function properly', () => {
    let newThumbnailBgColor = 'red';
    spyOn(topicUpdateService, 'setSubtopicThumbnailBgColor').and.stub();
    component.updateSubtopicThumbnailBgColor(newThumbnailBgColor);

    expect(component.editableThumbnailBgColor).toBe(newThumbnailBgColor);
    expect(topicUpdateService.setSubtopicThumbnailBgColor).toHaveBeenCalled();
  });

  it('should call resetErrorMsg function properly', () => {
    component.resetErrorMsg();

    expect(component.errorMsg).toBe(null);
  });

  it('should call isSubtopicValid function properly', () => {
    component.editableThumbnailFilename = 'something';
    component.subtopicTitle = 'something';
    component.htmlData = 'something';
    component.editableUrlFragment = 'something';

    let isSubtopicValid = component.isSubtopicValid();

    spyOn(subtopicValidationService, 'isUrlFragmentValid')
      .and.returnValue(true);
    expect(isSubtopicValid).toBe(true);
  });

  it('should call cancel function properly', fakeAsync(() => {
    spyOn(topicEditorStateService, 'deleteSubtopicPage');
    spyOn(topicUpdateService, 'deleteSubtopic');

    component.cancel();

    expect(topicEditorStateService.deleteSubtopicPage).toHaveBeenCalled();
    expect(topicUpdateService.deleteSubtopic).toHaveBeenCalled();
  }));

  it('should call checkSubtopicExistence function properly', () => {
    spyOn(subtopicValidationService, 'doesSubtopicWithUrlFragmentExist')
      .and.returnValue(true);
    component.checkSubtopicExistence();

    expect(component.subtopicUrlFragmentExists).toBe(true);
  });

  it('should call localValueChange function properly', () => {
    let stringPassed = 'working fine';
    component.localValueChange(stringPassed);

    expect(component.htmlData).toBe(stringPassed);
  });

  it('should call save function properly', () => {
    component.subtopicId = 123;
    spyOn(subtopicValidationService, 'checkValidSubtopicName')
      .and.returnValue(true);
    spyOn(topicUpdateService, 'setSubtopicTitle');
    spyOn(topicUpdateService, 'setSubtopicUrlFragment');
    spyOn(SubtopicPage, 'createDefault').and.callThrough();
    spyOn(topicEditorStateService, 'setSubtopicPage').and.callThrough();
    spyOn(ngbActiveModal, 'close');
    component.save();

    expect(topicUpdateService.setSubtopicTitle).toHaveBeenCalled();
    expect(topicUpdateService.setSubtopicUrlFragment).toHaveBeenCalled();
    expect(SubtopicPage.createDefault).toHaveBeenCalled();
    expect(topicEditorStateService.setSubtopicPage).toHaveBeenCalled();
    expect(ngbActiveModal.close).toHaveBeenCalled();
  });

  it('should call if in save function properly', () => {
    spyOn(ngbActiveModal, 'close');

    spyOn(subtopicValidationService, 'checkValidSubtopicName')
      .and.returnValue(false);
    component.save();
    expect(component.errorMsg)
      .toBe('A subtopic with this title already exists');
    expect(ngbActiveModal.close).not.toHaveBeenCalled();
  });
});