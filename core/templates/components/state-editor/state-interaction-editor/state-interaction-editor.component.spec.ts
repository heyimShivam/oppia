// Copyright 2022 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS-IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * @fileoverview Unit tests for 'State Interaction Editor Component'.
 */

import { EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { StateEditorService } from '../state-editor-properties-services/state-editor.service';
import { StateInteractionEditorComponent } from './state-interaction-editor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { State } from 'domain/state/StateObjectFactory';
import { Interaction } from 'domain/exploration/InteractionObjectFactory';
import { ResponsesService } from 'pages/exploration-editor-page/editor-tab/services/responses.service';
import { UrlInterpolationService } from 'domain/utilities/url-interpolation.service';
import { EditabilityService } from 'services/editability.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CustomizeInteractionModalComponent } from 'pages/exploration-editor-page/editor-tab/templates/modal-templates/customize-interaction-modal.component';
import { StateNextContentIdIndexService } from '../state-editor-properties-services/state-next-content-id-index.service';
import { StateInteractionIdService } from '../state-editor-properties-services/state-interaction-id.service';
import { StateContentService } from '../state-editor-properties-services/state-content.service';
import { SubtitledHtml } from 'domain/exploration/subtitled-html.model';
import { ContextService } from 'services/context.service';
import { StateCustomizationArgsService } from '../state-editor-properties-services/state-customization-args.service';
import { StateSolutionService } from '../state-editor-properties-services/state-solution.service';
import { ExplorationHtmlFormatterService } from 'services/exploration-html-formatter.service';
import { InteractionDetailsCacheService } from 'pages/exploration-editor-page/editor-tab/services/interaction-details-cache.service';

class MockNgbModal {
  modal: string;
  success: boolean = true;
  open(content, options) {
    if (this.modal === 'add_interaction') {
      return {
        result: {
          componentInstance: {
            showMarkAllAudioAsNeedingUpdateModalIfRequired: EventEmitter
          },
          then: (
              successCallback: (result) => void,
              cancelCallback: () => void
          ) => {
            if (this.success) {
              successCallback({});
            } else {
              cancelCallback();
            }
          }
        }
      };
    } else if (this.modal === 'delete_interaction') {
      return {
        result: {
          then: (
              successCallback: () => void,
              errorCallback: () => void
          ) => {
            if (this.success) {
              successCallback();
            } else {
              errorCallback();
            }
            return {
              then: (callback: () => void) => {
                callback();
              }
            };
          }
        }
      };
    }
  }
}

describe('State Interaction component', () => {
  let component: StateInteractionEditorComponent;
  let fixture: ComponentFixture<StateInteractionEditorComponent>;
  let stateEditorService: StateEditorService;
  let responsesService: ResponsesService;
  let urlInterpolationService: UrlInterpolationService;
  let editabilityService: EditabilityService;
  let mockNgbModal: MockNgbModal;
  let stateNextContentIdIndexService: StateNextContentIdIndexService;
  let stateInteractionIdService: StateInteractionIdService;
  let stateContentService: StateContentService;
  let contextService: ContextService;
  let stateCustomizationArgsService: StateCustomizationArgsService;
  let stateSolutionService: StateSolutionService;
  let explorationHtmlFormatterService: ExplorationHtmlFormatterService;
  let interactionDetailsCacheService: InteractionDetailsCacheService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [
        StateInteractionEditorComponent,
      ],
      providers: [
        StateEditorService,
        ResponsesService,
        {
          provide: NgbModal,
          useClass: MockNgbModal
        },
        InteractionDetailsCacheService,
        CustomizeInteractionModalComponent,
        UrlInterpolationService,
        EditabilityService,
        StateNextContentIdIndexService,
        StateInteractionIdService,
        StateSolutionService,
        StateContentService,
        ExplorationHtmlFormatterService,
        ContextService,
        StateCustomizationArgsService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateInteractionEditorComponent);
    component = fixture.componentInstance;

    stateEditorService = TestBed.inject(StateEditorService);
    responsesService = TestBed.inject(ResponsesService);
    urlInterpolationService = TestBed.inject(UrlInterpolationService);
    editabilityService = TestBed.inject(EditabilityService);
    stateNextContentIdIndexService =
      TestBed.inject(StateNextContentIdIndexService);
    stateInteractionIdService = TestBed.inject(StateInteractionIdService);
    stateContentService = TestBed.inject(StateContentService);
    mockNgbModal = (TestBed.inject(NgbModal) as unknown) as MockNgbModal;
    contextService = TestBed.inject(ContextService);
    stateCustomizationArgsService =
      TestBed.inject(StateCustomizationArgsService);
    interactionDetailsCacheService =
      TestBed.inject(InteractionDetailsCacheService);
    stateSolutionService = TestBed.inject(StateSolutionService);
    explorationHtmlFormatterService =
      TestBed.inject(ExplorationHtmlFormatterService);

    fixture.detectChanges();
  });

  it('should keep non-empty content when setting a interaction',
    fakeAsync(() => {
      spyOn(component, 'throwError').and.stub();
      spyOn(stateEditorService, 'updateStateInteractionEditorInitialised')
        .and.stub();

      component.ngOnInit();
      tick();
      stateEditorService.onStateEditorInitialized.emit(undefined);
      tick();

      expect(component.interactionIsDisabled).toBe(false);
      expect(stateEditorService.updateStateInteractionEditorInitialised)
        .toHaveBeenCalled();
    }));

  it('should keep non-empty content when setting a interaction', () => {
    spyOn(responsesService.onInitializeAnswerGroups, 'emit').and.stub();

    const state = new State(
      'shivam', 'id', 'some', null,
      new Interaction([], [], null, null, [], 'id', null),
      null, null, true, true, null, 7);

    component.ngOnInit();
    stateEditorService.onStateEditorInitialized.emit(state);

    expect(component.interactionIsDisabled).toBe(false);
    expect(component.hasLoaded).toBe(true);
    expect(responsesService.onInitializeAnswerGroups.emit)
      .toHaveBeenCalled();
  });

  it('should 2', () => {
    const interactionCustomizationArgsValue = {
      placeholder: {
        value: null
      },
      rows: {
        value: 0
      }
    };
    component.interactionEditorIsShown = true;
    spyOn(urlInterpolationService, 'getStaticImageUrl').and.returnValue(
      'image'
    );
    spyOn(explorationHtmlFormatterService, 'getInteractionHtml')
      .and.returnValue('htmlValue');
    stateInteractionIdService.savedMemento = 'interactionID';

    component.toggleInteractionEditor();

    expect(component.getStaticImageUrl('image')).toEqual('image');
    expect(component.interactionEditorIsShown).toBe(false);
    expect(component._getInteractionPreviewTag(
      interactionCustomizationArgsValue)).toBe('htmlValue');
  });

  it('should delete interaction when user click on cross btn', fakeAsync(() => {
    mockNgbModal.modal = 'delete_interaction';

    spyOn(stateSolutionService, 'saveDisplayedValue').and.stub();
    spyOn(mockNgbModal, 'open').and.callFake((dlg, opt) => {
      return (
        {
          result: Promise.resolve('success')
        }
      ) as NgbModalRef;
    });

    component.deleteInteraction();
    tick();

    expect(stateSolutionService.saveDisplayedValue)
      .toHaveBeenCalled();
  }));

  it('should not delete interaction when user click on cross btn',
    fakeAsync(() => {
      mockNgbModal.modal = 'delete_interaction';

      spyOn(stateSolutionService, 'saveDisplayedValue').and.stub();
      spyOn(mockNgbModal, 'open').and.callFake((dlg, opt) => {
        return (
          {
            result: Promise.reject('success')
          }
        ) as NgbModalRef;
      });

      component.deleteInteraction();
      tick();

      expect(stateSolutionService.saveDisplayedValue)
        .not.toHaveBeenCalled();
    }));

  it('should close modal when user click cancel', fakeAsync(() => {
    const mockEventEmitter = new EventEmitter();
    mockNgbModal.modal = 'add_interaction';
    stateContentService.savedMemento = new SubtitledHtml('html', 'contentID');
    stateCustomizationArgsService.savedMemento = {
      useFractionForDivision: false,
      customOskLetters: {
        value: ['wrok', 'done']
      }
    };
    component.interactionId = 'EndExploration';
    component.interactionIsDisabled = false;
    component.updateDefaultTerminalStateContentIfEmpty();

    spyOn(mockNgbModal, 'open').and.callFake((dlg, opt) => {
      return (
        { componentInstance: {
          showMarkAllAudioAsNeedingUpdateModalIfRequired: mockEventEmitter
        },
        result: Promise.reject('reject')
        }
      ) as NgbModalRef;
    });
    spyOn(stateNextContentIdIndexService, 'restoreFromMemento').and.stub();
    spyOn(editabilityService, 'isEditable').and.returnValue(true);
    spyOn(contextService, 'isExplorationLinkedToStory').and.returnValue(true);
    spyOn(stateEditorService.onHandleCustomArgsUpdate, 'emit').and.stub();

    component.openInteractionCustomizerModal();
    tick();
    mockEventEmitter.emit();

    expect(stateNextContentIdIndexService.restoreFromMemento)
      .toHaveBeenCalled();

    component.interactionIsDisabled = true;
    tick();
    component.openInteractionCustomizerModal();

    expect(stateNextContentIdIndexService.restoreFromMemento)
      .toHaveBeenCalledTimes(1);
  }));

  it('should save interaction when user click okay', fakeAsync(() => {
    stateNextContentIdIndexService.displayed = 2;
    stateNextContentIdIndexService.savedMemento = 1;
    stateInteractionIdService.displayed = 'EndExploration';
    stateInteractionIdService.savedMemento = 'InteractiveMap';
    component.DEFAULT_TERMINAL_STATE_CONTENT = 'HTML Content';
    stateContentService.savedMemento = SubtitledHtml.createDefault(
      '', 'contentID');
    stateContentService.displayed = SubtitledHtml.createDefault(
      '', 'contentID2');
    stateCustomizationArgsService.savedMemento = {
      latitude: {
        value: 35
      },
      longitude: {
        value: 20
      },
      zoom: {
        value: 8
      }
    };
    stateCustomizationArgsService.displayed = {
      recommendedExplorationIds: {
        value: ['null']
      }
    };

    const mockEventEmitter = new EventEmitter();
    mockNgbModal.modal = 'add_interaction';
    spyOn(mockNgbModal, 'open').and.callFake((dlg, opt) => {
      return (
        { componentInstance: {
          showMarkAllAudioAsNeedingUpdateModalIfRequired: mockEventEmitter
        },
        result: Promise.resolve('success')
        }
      ) as NgbModalRef;
    });

    spyOn(interactionDetailsCacheService, 'set').and.stub();
    spyOn(stateNextContentIdIndexService, 'saveDisplayedValue').and.stub();
    spyOn(stateContentService, 'saveDisplayedValue').and.stub();
    spyOn(stateNextContentIdIndexService, 'restoreFromMemento').and.stub();
    spyOn(editabilityService, 'isEditable').and.returnValue(true);
    spyOn(contextService, 'isExplorationLinkedToStory').and.returnValue(true);
    spyOn(stateEditorService.onHandleCustomArgsUpdate, 'emit').and.stub();

    component.openInteractionCustomizerModal();
    tick();

    expect(stateEditorService.onHandleCustomArgsUpdate.emit).toHaveBeenCalled();
    expect(stateContentService.saveDisplayedValue).toHaveBeenCalled();
  }));

  it('should through error', () => {
    expect(() => {
      component.throwError(undefined);
    }).toThrowError('Expected stateData to be defined but received undefined');
  });
});