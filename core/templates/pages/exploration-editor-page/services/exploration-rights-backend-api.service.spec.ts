// Copyright 2014 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Unit tests for the exploration rights service
 * of the exploration editor page.
 */

import { TestBed, fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AlertsService } from 'services/alerts.service';
import { CsrfTokenService } from 'services/csrf-token.service';
import { ExplorationDataService } from 'pages/exploration-editor-page/services/exploration-data.service';
import { ExplorationRightsService } from './exploration-rights-backend-api.service';

describe('Exploration rights service', () => {
  let ers: ExplorationRightsService = null;
  let als: AlertsService = null;
  let httpTestingController: HttpTestingController = null;
  let csrfService = null;
  let clearWarningsSpy = null;
  let successHandler = null;
  let failHandler = null;
  let serviceData = {
    rights: {
      owner_names: ['abc'],
      editor_names: [],
      voice_artist_names: [],
      viewer_names: [],
      status: 'private',
      cloned_from: 'e1234',
      community_owned: true,
      viewable_if_private: true
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ExplorationDataService,
          useValue: {
            explorationId: '12345',
            data: {
              version: 1
            }
          }
        }
      ]
    });
    als = TestBed.inject(AlertsService);
    csrfService = TestBed.inject(CsrfTokenService);
    ers =
      TestBed.inject(ExplorationRightsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    spyOn(csrfService, 'getTokenAsync').and.callFake(() => {
      return Promise.resolve('simple-csrf-token');
    });
    clearWarningsSpy = spyOn(als, 'clearWarnings').and.callThrough();
    successHandler = jasmine.createSpy('success');
    failHandler = jasmine.createSpy('fail');
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should correctly initializes the service', function() {
    expect(ers.ownerNames).toBeUndefined();
    expect(ers.editorNames).toBeUndefined();
    expect(ers.voiceArtistNames).toBeUndefined();
    expect(ers.viewerNames).toBeUndefined();
    expect(ers.isPrivate()).toBe(false);
    expect(ers.isPublic()).toBe(false);
    expect(ers.clonedFrom()).toBeUndefined();
    expect(ers.isCommunityOwned()).toBeUndefined();
    expect(ers.viewableIfPrivate()).toBeUndefined();

    ers.init(
      serviceData.rights.owner_names,
      serviceData.rights.editor_names,
      serviceData.rights.voice_artist_names,
      serviceData.rights.viewer_names,
      serviceData.rights.status,
      serviceData.rights.cloned_from,
      serviceData.rights.community_owned,
      serviceData.rights.viewable_if_private
    );

    expect(ers.ownerNames).toEqual(serviceData.rights.owner_names);
    expect(ers.editorNames).toEqual(serviceData.rights.editor_names);
    expect(ers.voiceArtistNames).toEqual(
      serviceData.rights.voice_artist_names);
    expect(ers.viewerNames).toEqual(serviceData.rights.viewer_names);
    expect(ers.isPrivate()).toEqual(true);
    expect(ers.clonedFrom()).toEqual(serviceData.rights.cloned_from);
    expect(ers.isCommunityOwned()).toBe(
      serviceData.rights.community_owned);
    expect(ers.viewableIfPrivate()).toBe(
      serviceData.rights.viewable_if_private);
  });

  it('should reports the correct cloning status', function() {
    ers.init(['abc'], [], [], [], 'public', '1234', true, false);
    expect(ers.isCloned()).toBe(true);
    expect(ers.clonedFrom()).toEqual('1234');

    ers.init(['abc'], [], [], [], 'public', null, true, false);
    expect(ers.isCloned()).toBe(false);
    expect(ers.clonedFrom()).toBeNull();
  });

  it('should reports the correct community-owned status', function() {
    ers.init(['abc'], [], [], [], 'public', '1234', false, false);
    expect(ers.isCommunityOwned()).toBe(false);

    ers.init(['abc'], [], [], [], 'public', '1234', true, false);
    expect(ers.isCommunityOwned()).toBe(true);
  });

  it('should reports the correct derived statuses', function() {
    ers.init(['abc'], [], [], [], 'private', 'e1234', true, false);
    expect(ers.isPrivate()).toBe(true);
    expect(ers.isPublic()).toBe(false);

    ers.init(['abc'], [], [], [], 'public', 'e1234', true, false);
    expect(ers.isPrivate()).toBe(false);
    expect(ers.isPublic()).toBe(true);
  });

  it('should reports correcty if exploration rights is viewable when private',
    function() {
      ers.init(['abc'], [], [], [], 'private', 'e1234', true, true);
      expect(ers.viewableIfPrivate()).toBe(true);

      ers.init(['abc'], [], [], [], 'private', 'e1234', false, false);
      expect(ers.viewableIfPrivate()).toBe(false);
    });

  it('should change community owned to true', fakeAsync(() => {
    ers.init(['abc'], [], [], [], 'private', 'e1234', false, true);
    ers.makeCommunityOwned();

    const req = httpTestingController.expectOne('/createhandler/rights/12345');
    expect(req.request.method).toEqual('PUT');
    req.flush(serviceData);

    flushMicrotasks();

    expect(clearWarningsSpy).toHaveBeenCalled();
    expect(ers.isCommunityOwned()).toBe(true);
  }));

  it('should use reject handler when changing community owned to true fails',
    fakeAsync(() => {
      ers.init(
        ['abc'], [], [], [], 'private', 'e1234', false, true);
      ers.makeCommunityOwned().then(
        successHandler, failHandler);

      const req = httpTestingController.expectOne(
        '/createhandler/rights/12345');
      expect(req.request.method).toEqual('PUT');
      req.flush({}, { status: 500, statusText: '' });

      flushMicrotasks();

      expect(ers.isCommunityOwned()).toBe(false);
      expect(clearWarningsSpy).not.toHaveBeenCalled();
      expect(successHandler).not.toHaveBeenCalled();
      expect(failHandler).toHaveBeenCalled();
    }));

  it('should change exploration right viewability', fakeAsync(() => {
    let sampleDataResultsCopy = angular.copy(serviceData);
    sampleDataResultsCopy.rights.viewable_if_private = true;

    ers.setViewability(true);

    const req = httpTestingController.expectOne(
      '/createhandler/rights/12345');
    expect(req.request.method).toEqual('PUT');
    req.flush(sampleDataResultsCopy, { status: 200, statusText: '' });

    flushMicrotasks();

    expect(ers.viewableIfPrivate()).toBe(true);
  }));

  it('should use reject when changing exploration right viewability fails',
    fakeAsync(() => {
      ers.init(
        ['abc'], [], [], [], 'private', 'e1234', false, false);
      ers.setViewability(true).then(
        successHandler, failHandler);

      const req = httpTestingController.expectOne(
        '/createhandler/rights/12345');
      expect(req.request.method).toEqual('PUT');
      req.flush({}, { status: 500, statusText: '' });

      flushMicrotasks();

      expect(ers.viewableIfPrivate()).toBe(false);
      expect(clearWarningsSpy).not.toHaveBeenCalled();
      expect(successHandler).not.toHaveBeenCalled();
      expect(failHandler).toHaveBeenCalled();
    }));

  it('should save a new member', fakeAsync(() => {
    let sampleDataResultsCopy = angular.copy(serviceData);
    sampleDataResultsCopy.rights.viewer_names.push('newUser');
    ers.saveRoleChanges('newUser', 'viewer');

    const req = httpTestingController.expectOne(
      '/createhandler/rights/12345');
    expect(req.request.method).toEqual('PUT');
    req.flush(sampleDataResultsCopy, { status: 200, statusText: '' });

    flushMicrotasks();

    expect(ers.viewerNames).toEqual(
      sampleDataResultsCopy.rights.viewer_names);
  }));

  it('should remove existing user', fakeAsync(() => {
    let sampleDataResultsCopy = angular.copy(serviceData);
    sampleDataResultsCopy.rights.viewer_names.push('newUser');

    ers.removeRoleAsync('newUser').then(successHandler, failHandler);

    const req = httpTestingController.expectOne(
      '/createhandler/rights/12345?username=newUser');
    expect(req.request.method).toEqual('DELETE');
    req.flush(sampleDataResultsCopy, { status: 200, statusText: '' });

    flushMicrotasks();

    expect(successHandler).toHaveBeenCalled();
    expect(failHandler).not.toHaveBeenCalled();

    expect(ers.viewerNames).toEqual(
      sampleDataResultsCopy.rights.viewer_names);
  }));

  it('should save a new voice artist', fakeAsync(() => {
    ers.init(['abc'], [], [], [], 'public', '1234', true, false);
    expect(ers.voiceArtistNames).toEqual([]);

    ers.assignVoiceArtistRoleAsync('voiceArtist').then(
      successHandler, failHandler);

    const req = httpTestingController.expectOne(
      '/voice_artist_management_handler/exploration/12345');
    expect(req.request.method).toEqual('POST');
    req.flush({}, { status: 200, statusText: '' });

    flushMicrotasks();

    expect(ers.voiceArtistNames).toEqual(['voiceArtist']);
  }));

  it('should remove existing voice artist', fakeAsync(() => {
    ers.init(['abc'], [], ['voiceArtist'], [], 'public', '1234', true, false);
    expect(ers.voiceArtistNames).toEqual(['voiceArtist']);

    ers.removeVoiceArtistRoleAsync('voiceArtist').then(
      successHandler, failHandler);

    const req = httpTestingController.expectOne(
      '/voice_artist_management_handler/exploration/12345' +
      '?voice_artist=voiceArtist');
    expect(req.request.method).toEqual('DELETE');
    req.flush({}, { status: 200, statusText: '' });

    flushMicrotasks();

    expect(successHandler).toHaveBeenCalled();
    expect(failHandler).not.toHaveBeenCalled();

    expect(ers.voiceArtistNames).toEqual([]);
  }));

  it('should check user already has roles', function() {
    let sampleDataResultsCopy = angular.copy(serviceData);
    sampleDataResultsCopy.rights.owner_names.push('newOwner');
    sampleDataResultsCopy.rights.viewer_names.push('newViewer');
    sampleDataResultsCopy.rights.editor_names.push('newEditor');
    sampleDataResultsCopy.rights.voice_artist_names.push('newVoiceArtist');

    ers.init(
      sampleDataResultsCopy.rights.owner_names,
      sampleDataResultsCopy.rights.editor_names,
      sampleDataResultsCopy.rights.voice_artist_names,
      sampleDataResultsCopy.rights.viewer_names,
      sampleDataResultsCopy.rights.status,
      sampleDataResultsCopy.rights.cloned_from,
      sampleDataResultsCopy.rights.community_owned,
      sampleDataResultsCopy.rights.viewable_if_private
    );

    expect(ers.checkUserAlreadyHasRoles('newOwner')).toBeTruthy();
    expect(ers.checkUserAlreadyHasRoles('newViewer')).toBeTruthy();
    expect(ers.checkUserAlreadyHasRoles('newEditor')).toBeTruthy();
    expect(ers.checkUserAlreadyHasRoles('newVoiceArtist')).toBeTruthy();
    expect(ers.checkUserAlreadyHasRoles('notInAllUsersList')).toBeFalsy();
  });

  it('should check oldrole of user', function() {
    let sampleDataResultsCopy = angular.copy(serviceData);
    sampleDataResultsCopy.rights.owner_names.push('newOwner');
    sampleDataResultsCopy.rights.viewer_names.push('newViewer');
    sampleDataResultsCopy.rights.editor_names.push('newEditor');
    sampleDataResultsCopy.rights.voice_artist_names.push('newVoiceArtist');

    ers.init(
      sampleDataResultsCopy.rights.owner_names,
      sampleDataResultsCopy.rights.editor_names,
      sampleDataResultsCopy.rights.voice_artist_names,
      sampleDataResultsCopy.rights.viewer_names,
      sampleDataResultsCopy.rights.status,
      sampleDataResultsCopy.rights.cloned_from,
      sampleDataResultsCopy.rights.community_owned,
      sampleDataResultsCopy.rights.viewable_if_private
    );

    expect(ers.getOldRole('newOwner')).toEqual('owner');
    expect(ers.getOldRole('newViewer')).toEqual('viewer');
    expect(ers.getOldRole('newEditor')).toEqual('editor');
    expect(ers.getOldRole('newVoiceArtist')).toEqual('voice artist');
  });

  it('should reject handler when saving a new member fails', fakeAsync(() => {
    ers.saveRoleChanges(
      'newUser', 'viewer').then(
      successHandler, failHandler);

    const req = httpTestingController.expectOne(
      '/createhandler/rights/12345');
    expect(req.request.method).toEqual('PUT');
    req.flush({}, { status: 500, statusText: '' });

    flushMicrotasks();

    expect(clearWarningsSpy).not.toHaveBeenCalled();
    expect(successHandler).not.toHaveBeenCalled();
    expect(failHandler).toHaveBeenCalled();
  }));

  it('should make exploration rights public', fakeAsync(() => {
    let sampleDataResultsCopy = angular.copy(serviceData);
    sampleDataResultsCopy.rights.status = 'public';

    ers.publish();

    const req = httpTestingController.expectOne(
      '/createhandler/status/12345');
    expect(req.request.method).toEqual('PUT');
    req.flush(sampleDataResultsCopy, { status: 200, statusText: '' });

    flushMicrotasks();

    expect(ers.isPublic()).toBe(true);
  }));

  it('should call reject handler when making exploration rights public fails',
    fakeAsync(() => {
      ers.publish().then(successHandler, failHandler);

      const req = httpTestingController.expectOne(
        '/createhandler/status/12345');
      expect(req.request.method).toEqual('PUT');
      req.flush({}, { status: 500, statusText: '' });

      flushMicrotasks();

      expect(clearWarningsSpy).not.toHaveBeenCalled();
      expect(successHandler).not.toHaveBeenCalled();
      expect(failHandler).toHaveBeenCalled();
    }));

  it('should save moderator change to backend', fakeAsync(() => {
    ers.saveModeratorChangeToBackendAsync('');

    const req = httpTestingController.expectOne(
      '/createhandler/moderatorrights/12345');
    expect(req.request.method).toEqual('PUT');
    req.flush(serviceData, { status: 200, statusText: '' });
    flushMicrotasks();

    expect(clearWarningsSpy).toHaveBeenCalled();
    expect(ers.ownerNames).toEqual(
      serviceData.rights.owner_names);
    expect(ers.editorNames).toEqual(
      serviceData.rights.editor_names);
    expect(ers.voiceArtistNames).toEqual(
      serviceData.rights.voice_artist_names);
    expect(ers.viewerNames).toEqual(
      serviceData.rights.viewer_names);
    expect(ers.isPrivate()).toEqual(true);
    expect(ers.clonedFrom()).toEqual(
      serviceData.rights.cloned_from);
    expect(ers.isCommunityOwned()).toBe(
      serviceData.rights.community_owned);
    expect(ers.viewableIfPrivate()).toBe(
      serviceData.rights.viewable_if_private);
  }));

  it('should reject handler when saving moderator change to backend fails',
    fakeAsync(() => {
      ers.saveModeratorChangeToBackendAsync('');

      const req = httpTestingController.expectOne(
        '/createhandler/moderatorrights/12345');
      expect(req.request.method).toEqual('PUT');
      req.flush({}, { status: 500, statusText: '' });
      flushMicrotasks();

      expect(clearWarningsSpy).not.toHaveBeenCalled();
      expect(ers.ownerNames).toBeUndefined();
      expect(ers.editorNames).toBeUndefined();
      expect(ers.voiceArtistNames).toBeUndefined();
      expect(ers.viewerNames).toBeUndefined();
      expect(ers.isPrivate()).toBe(false);
      expect(ers.isPublic()).toBe(false);
      expect(ers.clonedFrom()).toBeUndefined();
      expect(ers.isCommunityOwned()).toBeUndefined();
      expect(ers.viewableIfPrivate()).toBeUndefined();
    }));
});