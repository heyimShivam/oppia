(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!********************************************************!*\
  !*** multi ./core/templates/pages/oppia-root/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shivam/Desktop/oppia/oppia/core/templates/pages/oppia-root/index.ts */"h2fZ");


/***/ }),

/***/ "3eoD":
/*!**************************************************************!*\
  !*** ./core/templates/services/contextual/logger.service.ts ***!
  \**************************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoggerService {
    constructor() { }
    /**
     * Logs a message to console at the debug level.
     * @param msg - A message to log.
     */
    debug(msg) {
        // eslint-disable-next-line no-console
        console.debug(msg);
    }
    /**
     * Logs a message to console at the info level.
     * @param msg - A message to log.
     */
    info(msg) {
        // eslint-disable-next-line no-console
        console.info(msg);
    }
    /**
     * Logs a message to console at the warning level.
     * @param msg - A message to log.
     */
    warn(msg) {
        console.warn(msg);
    }
    /**
     * Logs a message to console at the error level.
     * @param msg - A message to log.
     */
    error(msg) {
        console.error(msg);
    }
    /**
     * Logs a message to console.
     * @param msg - A message to log.
     */
    log(msg) {
        // eslint-disable-next-line no-console
        console.log(msg);
    }
}
LoggerService.ɵfac = function LoggerService_Factory(t) { return new (t || LoggerService)(); };
LoggerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoggerService, factory: LoggerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "5kqk":
/*!***********************************************************************!*\
  !*** ./core/templates/pages/oppia-root/routing/app.routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
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
 * @fileoverview Root routing module.
 */




// import { AppConstants } from 'app.constants';
// All paths must be defined in constants.ts file.
// Otherwise pages will have false 404 status code.
const routes = [
    {
        path: 'terms-page',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-terms-page-terms-page-module */ "pages-terms-page-terms-page-module").then(__webpack_require__.bind(null, /*! pages/terms-page/terms-page.module */ "sjS1"))
            .then(m => m.TermsPageModule)
    }
];
// '**' wildcard route must be kept at the end,as it can override all other
// routes.
routes.push({
    path: '**',
    loadChildren: () => __webpack_require__.e(/*! import() | pages-error-pages-error-404-error-404-page-module */ "pages-error-pages-error-404-error-404-page-module").then(__webpack_require__.bind(null, /*! pages/error-pages/error-404/error-404-page.module */ "wRSX")).then(m => m.Error404PageModule)
});
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"],
            useValue: '/'
        }
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "DcCY":
/*!*****************************************************************!*\
  !*** ./core/templates/pages/oppia-root/oppia-root.component.ts ***!
  \*****************************************************************/
/*! exports provided: OppiaRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OppiaRootComponent", function() { return OppiaRootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class OppiaRootComponent {
}
OppiaRootComponent.ɵfac = function OppiaRootComponent_Factory(t) { return new (t || OppiaRootComponent)(); };
OppiaRootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OppiaRootComponent, selectors: [["oppia-root"]], decls: 1, vars: 0, template: function OppiaRootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "DhAQ":
/*!*****************************************!*\
  !*** ./core/templates/app.constants.ts ***!
  \*****************************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
/* harmony import */ var assets_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/constants */ "g/rd");
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
 * @fileoverview Shared constants for the Oppia module.
 */

const AppConstants = Object.assign(Object.assign({}, assets_constants__WEBPACK_IMPORTED_MODULE_0__["default"]), { DEFAULT_TRANSLATIONS: {
        I18N_LIBRARY_PAGE_TITLE_FRAGMENT_FOR_WEB: 'Library',
        I18N_LIBRARY_LOADING: 'Loading',
        I18N_SIGNUP_PAGE_SUBTITLE: 'Registration',
        I18N_SIGNUP_PAGE_TITLE_FRAGMENT_FOR_WEB: 'Oppia',
        I18N_LIBRARY_SEARCH_PLACEHOLDER: 'What are you curious about?',
        I18N_LIBRARY_ALL_LANGUAGES: 'All Languages',
        I18N_LIBRARY_LANGUAGES_EN: 'English',
        I18N_LIBRARY_ALL_CATEGORIES: 'All Categories',
        I18N_TOPNAV_SIGN_IN: 'Sign in',
        I18N_SPLASH_PAGE_TITLE_FRAGMENT_FOR_WEB: 'Oppia | Free, Online and Interactive Lessons for Anyone',
        I18N_SIGNUP_REGISTRATION: 'Registration',
        I18N_SIGNUP_LOADING: 'Loading',
    }, ACTIVITY_STATUS_PRIVATE: 'private', ACTIVITY_STATUS_PUBLIC: 'public', RULE_SUMMARY_WRAP_CHARACTER_COUNT: 30, 
    /* Called when the learner moves to a new card that they haven't seen
       before. */
    EDITABLE_EXPLORATION_DATA_DRAFT_URL_TEMPLATE: ('/createhandler/data/<exploration_id>?apply_draft=<apply_draft>'), EDITABLE_EXPLORATION_DATA_URL_TEMPLATE: ('/createhandler/data/<exploration_id>'), EXPLORATION_DATA_URL_TEMPLATE: '/explorehandler/init/<exploration_id>', EXPLORATION_VERSION_DATA_URL_TEMPLATE: ('/explorehandler/init/<exploration_id>?v=<version>'), WARNING_TYPES: {
        // These must be fixed before the exploration can be saved.
        CRITICAL: 'critical',
        // These must be fixed before publishing an exploration to the public
        // library.
        ERROR: 'error',
    }, STATE_ERROR_MESSAGES: {
        ADD_INTERACTION: 'Please add an interaction to this card.',
        STATE_UNREACHABLE: 'This card is unreachable.',
        UNABLE_TO_END_EXPLORATION: "There's no way to complete the exploration starting from this card. " +
            'To fix this, make sure that the last card in the chain starting from' +
            " this one has an 'End Exploration' question type.",
        INCORRECT_SOLUTION: 'The current solution does not lead to another card.',
        UNRESOLVED_ANSWER: 'There is an answer among the top 10 which has no explicit feedback.',
    }, CHECKPOINT_ERROR_MESSAGES: {
        INIT_CARD: 'The first card of the lesson must be a checkpoint.',
        TERMINAL_CARD: 'Checkpoints are not allowed on the last card of the lesson.',
        CHECKPOINT_COUNT: 'Only a maximum of 8 checkpoints are allowed per lesson.',
        BYPASSABLE_CARD: 'Checkpoints must not be assigned to cards that can be bypassed.'
    }, EXPLORATION_SUMMARY_DATA_URL_TEMPLATE: '/explorationsummarieshandler/data', EXPLORATION_AND_SKILL_ID_PATTERN: /^[a-zA-Z0-9_-]+$/, 
    // We use a slash because this character is forbidden in a state name.
    PLACEHOLDER_OUTCOME_DEST: '/', INTERACTION_DISPLAY_MODE_INLINE: 'inline', LOADING_INDICATOR_URL: '/activity/loadingIndicator.gif', OBJECT_EDITOR_URL_PREFIX: '/object_editor_template/', 
    // Feature still in development.
    // NOTE TO DEVELOPERS: This should be synchronized with the value in feconf.
    ENABLE_ML_CLASSIFIERS: false, 
    // Feature still in development.
    INFO_MESSAGE_SOLUTION_IS_INVALID_FOR_EXPLORATION: ('The current solution does not lead to another card.'), PARAMETER_TYPES: {
        REAL: 'Real',
        UNICODE_STRING: 'UnicodeString',
    }, 
    // The maximum number of nodes to show in a row of the state graph.
    MAX_NODES_PER_ROW: 4, 
    // The following variable must be at least 3. It represents the maximum
    // length, in characters, for the name of each node label in the state graph.
    MAX_NODE_LABEL_LENGTH: 15, 
    // If an $http request fails with the following error codes, a warning is
    // displayed.
    FATAL_ERROR_CODES: [400, 401, 404, 500], 
    // Do not modify these, for backwards-compatibility reasons. These strings are
    // used to identify components, to generate content ids, and to determine what
    // type of content a given content id is associated with. If you wish to
    // change one of these, a state migration of all existing content ids is
    // required. The component content type should be sufficiently small such that
    // the commit messages that use the content type strings do not exceed 375
    // characters (which is the maximum length of a commit message).
    COMPONENT_NAME_CONTENT: 'content', COMPONENT_NAME_FEEDBACK: 'feedback', COMPONENT_NAME_HINT: 'hint', COMPONENT_NAME_INTERACTION_CUSTOMIZATION_ARGS: 'ca', COMPONENT_NAME_RULE_INPUT: 'rule_input', COMPONENT_NAME_SOLUTION: 'solution', COMPONENT_NAME_EXPLANATION: 'explanation', COMPONENT_NAME_WORKED_EXAMPLE: {
        QUESTION: 'worked_example_question',
        EXPLANATION: 'worked_example_explanation',
    }, ACTION_TYPE_EXPLORATION_START: 'ExplorationStart', ACTION_TYPE_ANSWER_SUBMIT: 'AnswerSubmit', ACTION_TYPE_EXPLORATION_QUIT: 'ExplorationQuit', ISSUE_TYPE_EARLY_QUIT: 'EarlyQuit', ISSUE_TYPE_MULTIPLE_INCORRECT_SUBMISSIONS: 'MultipleIncorrectSubmissions', ISSUE_TYPE_CYCLIC_STATE_TRANSITIONS: 'CyclicStateTransitions', 
    // A block refers to a set of learner actions displayed together so that
    // they are part of the same context. If two consecutive learner actions are
    // from different states, we consider them unrelated. This constant refers to
    // the maximum number of such actions that can exist in one block. (Note that
    // all related actions are shown together, regardless of how many there are.)
    MAX_UNRELATED_ACTIONS_PER_BLOCK: 4, SITE_NAME: 'Oppia.org', DEFAULT_PROFILE_IMAGE_PATH: '/avatar/user_blue_72px.webp', 
    // TODO(vojtechjelinek): Move these to separate file later, after we establish
    // process to follow for Angular constants (#6731).
    SUBTOPIC_PAGE_EDITOR_DATA_URL_TEMPLATE: ('/subtopic_page_editor_handler/data/<topic_id>/<subtopic_id>'), 
    // This should be synchronized with SUBTOPIC_MASTERY_DATA_URL
    // in feconf.
    SUBTOPIC_MASTERY_DATA_URL_TEMPLATE: ('/subtopic_mastery_handler/data'), EDITABLE_TOPIC_DATA_URL_TEMPLATE: '/topic_editor_handler/data/<topic_id>', LABEL_FOR_CLEARING_FOCUS: 'labelForClearingFocus', 
    // TODO(bhenning): This constant should be provided by the backend.
    COLLECTION_DATA_URL_TEMPLATE: '/collection_handler/data/<collection_id>', ENTITY_TYPE: {
        COLLECTION: 'collection',
        EXPLORATION: 'exploration',
        TOPIC: 'topic',
        SKILL: 'skill',
        STORY: 'story',
        QUESTION: 'question',
        BLOG_POST: 'blog_post',
    }, AUDIO_UPLOAD_URL_TEMPLATE: '/createhandler/audioupload/<exploration_id>', IMAGE_UPLOAD_URL_TEMPLATE: ('/createhandler/imageupload/<entity_type>/<entity_id>'), MAX_NUM_AUDIO_FILES_TO_DOWNLOAD_SIMULTANEOUSLY: 3, MAX_NUM_IMAGE_FILES_TO_DOWNLOAD_SIMULTANEOUSLY: 3, IMAGE_CONTEXT: {
        EXPLORATION_SUGGESTIONS: 'exploration_suggestions',
        QUESTION_SUGGESTIONS: 'question_suggestions'
    }, IMAGE_SAVE_DESTINATION_SERVER: 'imageSaveDestinationServer', IMAGE_SAVE_DESTINATION_LOCAL_STORAGE: 'imageSaveDestinationLocalStorage' });


/***/ }),

/***/ "MAh8":
/*!******************************************!*\
  !*** ./core/templates/pages/mock-ajs.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
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
 * @fileoverview Mock angular object for pages that don't use AngularJS.
 */
/**
 * We are at a stage where we can have some pages in Angular. But we share
 * component in between pages. So we can't remove the code that downgrades
 * components and services. This code is found in most Angular components and
 * services (towards the end of the file). In order to not have to create a
 * separate file for each service and component just for the sake of downgrading
 * , we have created this mock AngularJS object that will be used in the pages
 * that don't use AngularJS.
 */
// TODO(#13080): Remove the mock-ajs.ts file after the migration is complete.

let mockAngular = {
    $$minErr: () => mockAngular,
    component: () => mockAngular,
    config: () => mockAngular,
    constant: () => mockAngular,
    controller: () => mockAngular,
    directive: () => mockAngular,
    factory: () => mockAngular,
    filter: () => mockAngular,
    info: () => mockAngular,
    module: () => mockAngular,
    provider: () => mockAngular,
    requires: () => [],
    run: () => mockAngular,
    service: () => mockAngular,
    value: () => mockAngular,
    version: _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"]
};
// This throws "Property 'angular' does not exist on type 'Window & typeof
// globalThis'." when the `as unknown as ...` is not used.
window.angular = mockAngular;


/***/ }),

/***/ "V9QP":
/*!************************************************!*\
  !*** ./core/templates/pages/common-imports.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es7/reflect */ "FZcq");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js */ "0TWp");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pages_mock_ajs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pages/mock-ajs */ "MAh8");
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
 * @fileoverview Common imports required in all oppia pages.
 */


// TODO(#13080): Remove the mock-ajs.ts file after the migration is complete.



/***/ }),

/***/ "g/rd":
/*!*****************************!*\
  !*** ./assets/constants.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// We are using eslint disable here for multilines because we have used quotes
// around properties at a lot of places so it is not possible to use
// "eslint disable next line" for each of them.
/* eslint-disable oppia/no-multiline-disable */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* Don't modify anything outside the {} brackets.
 * Insides of the {} brackets should be formatted as a JSON object.
 * JSON rules:
 * 1. All keys and string values must be enclosed in double quotes.
 * 2. Each key/value pair should be on a new line.
 * 3. All values and keys must be constant, you can't use any Javascript
 *    functions.
 */
/**
 * @fileoverview Initializes constants for the Oppia codebase.
 */
/* harmony default export */ __webpack_exports__["default"] = ({
    // Whether to allow custom event reporting to Google Analytics.
    // Mock gtag function is used when disabled.
    "CAN_SEND_ANALYTICS_EVENTS": false,
    // The term 'staging' is used instead of the classroom url fragment field
    // in the URL for topics that are not yet attached to a classroom.
    "CLASSROOM_URL_FRAGMENT_FOR_UNATTACHED_TOPICS": "staging",
    // The default classroom URL fragment to use when the provided classroom URL
    // fragment in the controller is invalid.
    "DEFAULT_CLASSROOM_URL_FRAGMENT": "math",
    "ALL_CATEGORIES": ["Algebra", "Algorithms", "Architecture", "Arithmetic",
        "Art", "Astronomy", "Biology", "Business", "Calculus", "Chemistry",
        "Combinatorics", "Computing", "Economics", "Education", "Engineering",
        "English", "Environment", "Gaulish", "Geography", "Geometry", "Government",
        "Graph Theory", "History", "Languages", "Latin", "Law", "Logic",
        "Mathematics", "Medicine", "Music", "Philosophy", "Physics", "Poetry",
        "Probability", "Programming", "Puzzles", "Reading", "Spanish", "Sport",
        "Statistics", "Trigonometry", "Welcome"],
    "ACTIVITY_TYPE_EXPLORATION": "exploration",
    "ACTIVITY_TYPE_COLLECTION": "collection",
    "ACTIVITY_TYPE_STORY": "story",
    "ACTIVITY_TYPE_LEARN_TOPIC": "learntopic",
    "DISABLED_EXPLORATION_IDS": ["5"],
    "TESTING_CONSTANT": "test",
    "LIBRARY_TILE_WIDTH_PX": 208,
    "LIBRARY_MOBILE_TILE_WIDTH_PX": 350,
    "DASHBOARD_TYPE_CREATOR": "creator",
    "DASHBOARD_TYPE_LEARNER": "learner",
    "DEFAULT_COLOR": "#a33f40",
    "DEFAULT_THUMBNAIL_ICON": "Lightbulb",
    "DEFAULT_CATEGORY_ICON": "Lightbulb",
    "ACTION_ACCEPT_SUGGESTION": "accept",
    "ACTION_REJECT_SUGGESTION": "reject",
    "SKILL_STATUS_OPTIONS": {
        "ALL": "All",
        "ASSIGNED": "Assigned",
        "UNASSIGNED": "Unassigned"
    },
    "TOPIC_MINIMUM_QUESTIONS_TO_PRACTICE": 10,
    "TOPIC_SKILL_DASHBOARD_SORT_OPTIONS": {
        "IncreasingCreatedOn": "Newly Created",
        "DecreasingCreatedOn": "Oldest Created",
        "IncreasingUpdatedOn": "Most Recently Updated",
        "DecreasingUpdatedOn": "Least Recently Updated"
    },
    // These categories are shown in the library navbar. The categories should
    // be in sorted order.
    "SEARCH_DROPDOWN_CATEGORIES": ["Algorithms", "Architecture", "Art",
        "Biology", "Business", "Chemistry", "Economics", "English", "Geography",
        "History", "Mathematics", "Medicine", "Music", "Physics", "Programming",
        "Reading", "Statistics"],
    // The default language code for an exploration.
    "DEFAULT_LANGUAGE_CODE": "en",
    "RTL_LANGUAGE_CODES": ["ar"],
    // Hacky translation keys for classroom, topic, skill, exploration
    // and subtopic names and descriptions. Needs to be updated whenever
    // any new class, topic, skill, exploration or subtopic is added or a
    // previous one is deleted.
    // TODO(#14645): Remove these keys once translation service is extended.
    "HACKY_TRANSLATION_KEYS": [
        "I18N_CLASSROOM_MATH_TITLE",
        "I18N_TOPIC_iX9kYCjnouWN_TITLE",
        "I18N_TOPIC_sWBXKH4PZcK6_TITLE",
        "I18N_TOPIC_C4fqwrvqWpRm_TITLE",
        "I18N_TOPIC_qW12maD4hiA8_TITLE",
        "I18N_TOPIC_dLmjjMDbCcrf_TITLE",
        "I18N_TOPIC_0abdeaJhmfPm_TITLE",
        "I18N_TOPIC_5g0nxGUmx5J5_TITLE",
        "I18N_TOPIC_iX9kYCjnouWN_DESCRIPTION",
        "I18N_TOPIC_sWBXKH4PZcK6_DESCRIPTION",
        "I18N_TOPIC_C4fqwrvqWpRm_DESCRIPTION",
        "I18N_TOPIC_qW12maD4hiA8_DESCRIPTION",
        "I18N_TOPIC_dLmjjMDbCcrf_DESCRIPTION",
        "I18N_TOPIC_0abdeaJhmfPm_DESCRIPTION",
        "I18N_TOPIC_5g0nxGUmx5J5_DESCRIPTION",
        "I18N_EXPLORATION_K645IfRNzpKy_TITLE",
        "I18N_EXPLORATION_K645IfRNzpKy_DESCRIPTION",
        "I18N_EXPLORATION_Knvx24p24qPO_TITLE",
        "I18N_EXPLORATION_Knvx24p24qPO_DESCRIPTION",
        "I18N_EXPLORATION_aAkDKVDR53cG_TITLE",
        "I18N_EXPLORATION_aAkDKVDR53cG_DESCRIPTION",
        "I18N_EXPLORATION_avwshGklKLJE_TITLE",
        "I18N_EXPLORATION_avwshGklKLJE_DESCRIPTION",
        "I18N_EXPLORATION_OKxYhsWONHZV_TITLE",
        "I18N_EXPLORATION_OKxYhsWONHZV_DESCRIPTION",
        "I18N_EXPLORATION_BJd7yHIxpqkq_TITLE",
        "I18N_EXPLORATION_BJd7yHIxpqkq_DESCRIPTION",
        "I18N_EXPLORATION_W0xq3jW5GzDF_TITLE",
        "I18N_EXPLORATION_W0xq3jW5GzDF_DESCRIPTION",
        "I18N_EXPLORATION_53Ka3mQ6ra5A_TITLE",
        "I18N_EXPLORATION_53Ka3mQ6ra5A_DESCRIPTION",
        "I18N_EXPLORATION_VKXd8qHsxLml_TITLE",
        "I18N_EXPLORATION_VKXd8qHsxLml_DESCRIPTION",
        "I18N_EXPLORATION_PsfDKdhd6Esz_TITLE",
        "I18N_EXPLORATION_PsfDKdhd6Esz_DESCRIPTION",
        "I18N_EXPLORATION_9DITEN8BUEHw_TITLE",
        "I18N_EXPLORATION_9DITEN8BUEHw_DESCRIPTION",
        "I18N_EXPLORATION_R7WpsSfmDQPV_TITLE",
        "I18N_EXPLORATION_R7WpsSfmDQPV_DESCRIPTION",
        "I18N_EXPLORATION_zIBYaqfDJrJC_TITLE",
        "I18N_EXPLORATION_zIBYaqfDJrJC_DESCRIPTION",
        "I18N_EXPLORATION_1904tpP0CYwY_TITLE",
        "I18N_EXPLORATION_1904tpP0CYwY_DESCRIPTION",
        "I18N_EXPLORATION_cQDibOXQbpi7_TITLE",
        "I18N_EXPLORATION_cQDibOXQbpi7_DESCRIPTION",
        "I18N_EXPLORATION_MRJeVrKafW6G_TITLE",
        "I18N_EXPLORATION_MRJeVrKafW6G_DESCRIPTION",
        "I18N_EXPLORATION_hNOP3TwRJhsz_TITLE",
        "I18N_EXPLORATION_hNOP3TwRJhsz_DESCRIPTION",
        "I18N_EXPLORATION_zTg2hzTz37jP_TITLE",
        "I18N_EXPLORATION_zTg2hzTz37jP_DESCRIPTION",
        "I18N_EXPLORATION_8HTzQQUPiK5i_TITLE",
        "I18N_EXPLORATION_8HTzQQUPiK5i_DESCRIPTION",
        "I18N_EXPLORATION_40a3vjmZ7Fwu_TITLE",
        "I18N_EXPLORATION_40a3vjmZ7Fwu_DESCRIPTION",
        "I18N_EXPLORATION_WulCxGAmGE61_TITLE",
        "I18N_EXPLORATION_WulCxGAmGE61_DESCRIPTION",
        "I18N_EXPLORATION_lOU0XPC2BnE9_TITLE",
        "I18N_EXPLORATION_lOU0XPC2BnE9_DESCRIPTION",
        "I18N_EXPLORATION_wE9pyaC5np3n_TITLE",
        "I18N_EXPLORATION_wE9pyaC5np3n_DESCRIPTION",
        "I18N_EXPLORATION_umPkwp0L1M0-_TITLE",
        "I18N_EXPLORATION_umPkwp0L1M0-_DESCRIPTION",
        "I18N_EXPLORATION_MjZzEVOG47_1_TITLE",
        "I18N_EXPLORATION_MjZzEVOG47_1_DESCRIPTION",
        "I18N_EXPLORATION_9trAQhj6uUC2_TITLE",
        "I18N_EXPLORATION_9trAQhj6uUC2_DESCRIPTION",
        "I18N_EXPLORATION_rfX8jNkPnA-1_TITLE",
        "I18N_EXPLORATION_rfX8jNkPnA-1_DESCRIPTION",
        "I18N_EXPLORATION_0FBWxCE5egOw_TITLE",
        "I18N_EXPLORATION_0FBWxCE5egOw_DESCRIPTION",
        "I18N_EXPLORATION_670bU6d9JGBh_TITLE",
        "I18N_EXPLORATION_670bU6d9JGBh_DESCRIPTION",
        "I18N_EXPLORATION_aHikhPlxYgOH_TITLE",
        "I18N_EXPLORATION_aHikhPlxYgOH_DESCRIPTION",
        "I18N_EXPLORATION_-tMgcP1i_4au_TITLE",
        "I18N_EXPLORATION_-tMgcP1i_4au_DESCRIPTION",
        "I18N_EXPLORATION_zW39GLG_BdN2_TITLE",
        "I18N_EXPLORATION_zW39GLG_BdN2_DESCRIPTION",
        "I18N_EXPLORATION_Xa3B_io-2WI5_TITLE",
        "I18N_EXPLORATION_Xa3B_io-2WI5_DESCRIPTION",
        "I18N_EXPLORATION_6Q6IyIDkjpYC_TITLE",
        "I18N_EXPLORATION_6Q6IyIDkjpYC_DESCRIPTION",
        "I18N_EXPLORATION_osw1m5Q3jK41_TITLE",
        "I18N_EXPLORATION_osw1m5Q3jK41_DESCRIPTION",
        "I18N_EXPLORATION_2mzzFVDLuAj8_TITLE",
        "I18N_EXPLORATION_2mzzFVDLuAj8_DESCRIPTION",
        "I18N_EXPLORATION_5NWuolNcwH6e_TITLE",
        "I18N_EXPLORATION_5NWuolNcwH6e_DESCRIPTION",
        "I18N_EXPLORATION_k2bQ7z5XHNbK_TITLE",
        "I18N_EXPLORATION_k2bQ7z5XHNbK_DESCRIPTION",
        "I18N_EXPLORATION_tIoSb3HZFN6e_TITLE",
        "I18N_EXPLORATION_tIoSb3HZFN6e_DESCRIPTION",
        "I18N_EXPLORATION_nLmUS6lbmvnl_TITLE",
        "I18N_EXPLORATION_nLmUS6lbmvnl_DESCRIPTION",
        "I18N_EXPLORATION_Vgde5_ZVqrq5_TITLE",
        "I18N_EXPLORATION_Vgde5_ZVqrq5_DESCRIPTION",
        "I18N_EXPLORATION_RvopsvVdIb0J_TITLE",
        "I18N_EXPLORATION_RvopsvVdIb0J_DESCRIPTION",
        "I18N_EXPLORATION_zVbqxwck0KaC_TITLE",
        "I18N_EXPLORATION_zVbqxwck0KaC_DESCRIPTION",
        "I18N_EXPLORATION_rDJojPOc0KgJ_TITLE",
        "I18N_EXPLORATION_rDJojPOc0KgJ_DESCRIPTION",
        "I18N_EXPLORATION_kYSrbNDCv5sH_TITLE",
        "I18N_EXPLORATION_kYSrbNDCv5sH_DESCRIPTION",
        "I18N_EXPLORATION_K89Hgj2qRSzw_TITLE",
        "I18N_EXPLORATION_K89Hgj2qRSzw_DESCRIPTION",
        "I18N_EXPLORATION_lNpxiuqufPiw_TITLE",
        "I18N_EXPLORATION_lNpxiuqufPiw_DESCRIPTION",
        "I18N_EXPLORATION_Jbgc3MlRiY07_TITLE",
        "I18N_EXPLORATION_Jbgc3MlRiY07_DESCRIPTION",
        "I18N_EXPLORATION_rwN3YPG9XWZa_TITLE",
        "I18N_EXPLORATION_rwN3YPG9XWZa_DESCRIPTION",
        "I18N_EXPLORATION_nTMZwH7i0DdW_TITLE",
        "I18N_EXPLORATION_nTMZwH7i0DdW_DESCRIPTION",
        "I18N_EXPLORATION_IrbGLTicm0BI_TITLE",
        "I18N_EXPLORATION_IrbGLTicm0BI_DESCRIPTION",
        "I18N_EXPLORATION_v8fonNnX4Ub1_TITLE",
        "I18N_EXPLORATION_v8fonNnX4Ub1_DESCRIPTION",
        "I18N_EXPLORATION_ibeLZqbbjbKF_TITLE",
        "I18N_EXPLORATION_ibeLZqbbjbKF_DESCRIPTION",
        "I18N_EXPLORATION_BDIln52yGfeH_TITLE",
        "I18N_EXPLORATION_BDIln52yGfeH_DESCRIPTION",
        "I18N_EXPLORATION_SR1IKIdLxnm1_TITLE",
        "I18N_EXPLORATION_SR1IKIdLxnm1_DESCRIPTION",
        "I18N_EXPLORATION_m1nvGABWeUoh_TITLE",
        "I18N_EXPLORATION_m1nvGABWeUoh_DESCRIPTION",
        "I18N_EXPLORATION_zNb0Bh27QtJ4_TITLE",
        "I18N_EXPLORATION_zNb0Bh27QtJ4_DESCRIPTION",
        "I18N_EXPLORATION_5I4srORrwjt2_TITLE",
        "I18N_EXPLORATION_5I4srORrwjt2_DESCRIPTION",
        "I18N_EXPLORATION_aqJ07xrTFNLF_TITLE",
        "I18N_EXPLORATION_aqJ07xrTFNLF_DESCRIPTION",
        "I18N_EXPLORATION_0X0KC9DXWwra_TITLE",
        "I18N_EXPLORATION_0X0KC9DXWwra_DESCRIPTION",
        "I18N_STORY_RRVMHsZ5Mobh_TITLE",
        "I18N_STORY_RRVMHsZ5Mobh_DESCRIPTION",
        "I18N_STORY_Qu6THxP29tOy_TITLE",
        "I18N_STORY_Qu6THxP29tOy_DESCRIPTION",
        "I18N_STORY_vfJDB3JAdwIx_TITLE",
        "I18N_STORY_vfJDB3JAdwIx_DESCRIPTION",
        "I18N_STORY_rqnxwceQyFnv_TITLE",
        "I18N_STORY_rqnxwceQyFnv_DESCRIPTION",
        "I18N_STORY_3M5VBajMccXO_TITLE",
        "I18N_STORY_3M5VBajMccXO_DESCRIPTION",
        "I18N_STORY_JhiDkq01dqgC_TITLE",
        "I18N_STORY_JhiDkq01dqgC_DESCRIPTION",
        "I18N_STORY_ialKSV0VYV0B_TITLE",
        "I18N_STORY_ialKSV0VYV0B_DESCRIPTION",
        "I18N_SUBTOPIC_iX9kYCjnouWN_place-names-and-values_TITLE",
        "I18N_SUBTOPIC_iX9kYCjnouWN_naming-numbers_TITLE",
        "I18N_SUBTOPIC_iX9kYCjnouWN_comparing-numbers_TITLE",
        "I18N_SUBTOPIC_iX9kYCjnouWN_rounding-numbers_TITLE",
        "I18N_SUBTOPIC_sWBXKH4PZcK6_adding-numbers_TITLE",
        "I18N_SUBTOPIC_sWBXKH4PZcK6_subtracting-numbers_TITLE",
        "I18N_SUBTOPIC_sWBXKH4PZcK6_addition-subtraction_TITLE",
        "I18N_SUBTOPIC_sWBXKH4PZcK6_estimation_TITLE",
        "I18N_SUBTOPIC_sWBXKH4PZcK6_sequences _TITLE",
        "I18N_SUBTOPIC_C4fqwrvqWpRm_basic-concepts_TITLE",
        "I18N_SUBTOPIC_C4fqwrvqWpRm_memorizing-expressions_TITLE",
        "I18N_SUBTOPIC_C4fqwrvqWpRm_multiplication-techniques_TITLE",
        "I18N_SUBTOPIC_C4fqwrvqWpRm_rules-to-simplify_TITLE",
        "I18N_SUBTOPIC_qW12maD4hiA8_basic-concepts_TITLE",
        "I18N_SUBTOPIC_qW12maD4hiA8_techniques-of-division_TITLE",
        "I18N_SUBTOPIC_qW12maD4hiA8_problem-solving_TITLE",
        "I18N_SUBTOPIC_dLmjjMDbCcrf_order-of-operations_TITLE",
        "I18N_SUBTOPIC_dLmjjMDbCcrf_variables_TITLE",
        "I18N_SUBTOPIC_dLmjjMDbCcrf_modelling-scenarios_TITLE",
        "I18N_SUBTOPIC_dLmjjMDbCcrf_problem-solving_TITLE",
        "I18N_SUBTOPIC_dLmjjMDbCcrf_algebraic-expressions_TITLE",
        "I18N_SUBTOPIC_dLmjjMDbCcrf_solving-equations_TITLE",
        "I18N_SUBTOPIC_0abdeaJhmfPm_what-is-a-fraction_TITLE",
        "I18N_SUBTOPIC_0abdeaJhmfPm_fractions-of-a-group_TITLE",
        "I18N_SUBTOPIC_0abdeaJhmfPm_equivalent-fractions_TITLE",
        "I18N_SUBTOPIC_0abdeaJhmfPm_mixed-numbers_TITLE",
        "I18N_SUBTOPIC_0abdeaJhmfPm_number-line_TITLE",
        "I18N_SUBTOPIC_0abdeaJhmfPm_comparing-fractions_TITLE",
        "I18N_SUBTOPIC_0abdeaJhmfPm_adding-fractions_TITLE",
        "I18N_SUBTOPIC_0abdeaJhmfPm_subtracting-fractions_TITLE",
        "I18N_SUBTOPIC_0abdeaJhmfPm_multiplying-fractions_TITLE",
        "I18N_SUBTOPIC_0abdeaJhmfPm_dividing-fractions_TITLE",
        "I18N_SUBTOPIC_5g0nxGUmx5J5_what-is-a-ratio_TITLE",
        "I18N_SUBTOPIC_5g0nxGUmx5J5_equivalent-ratios_TITLE",
        "I18N_SUBTOPIC_5g0nxGUmx5J5_calculations-with-ratios_TITLE",
        "I18N_SUBTOPIC_5g0nxGUmx5J5_combining-ratios_TITLE"
    ],
    "ALLOWED_THUMBNAIL_BG_COLORS": {
        "chapter": ["#F8BF74", "#D68F78", "#8EBBB6", "#B3D8F1"],
        "topic": ["#C6DCDA"],
        "subtopic": ["#FFFFFF"],
        "story": ["#F8BF74", "#D68F78", "#8EBBB6", "#B3D8F1"]
    },
    "ALLOWED_IMAGE_FORMATS": ["svg", "png", "jpeg", "jpg", "gif"],
    "TASK_TYPE_HIGH_BOUNCE_RATE": "high_bounce_rate",
    "TASK_TYPE_INEFFECTIVE_FEEDBACK_LOOP": "ineffective_feedback_loop",
    "TASK_TYPE_SUCCESSIVE_INCORRECT_ANSWERS": "successive_incorrect_answers",
    "TASK_TYPE_NEEDS_GUIDING_RESPONSES": "needs_guiding_responses",
    "TASK_STATUS_OPEN": "open",
    "TASK_STATUS_OBSOLETE": "obsolete",
    "TASK_STATUS_RESOLVED": "resolved",
    "TASK_ENTITY_TYPE_EXPLORATION": "exploration",
    "TASK_TARGET_TYPE_STATE": "state",
    // Roles in exploration.
    "ROLE_OWNER": "owner",
    "ROLE_EDITOR": "editor",
    "ROLE_VOICE_ARTIST": "voice artist",
    "ROLE_VIEWER": "viewer",
    // Regex to validate the format of Math rich-text component SVGs. If this is
    // changed in the future, the existing filenames on the server should be
    // handled as well.
    // eslint-disable-next-line max-len
    "MATH_SVG_FILENAME_REGEX": "mathImg_[a-z0-9_]+_height_[0-9d]+_width_[0-9d]+_vertical_[0-9d]+.(svg)$",
    // The SVG tag-specific attribute allowlist is based on the list of tags and
    // and attributes specified in this project:
    // https://github.com/cure53/DOMPurify
    // The mapping of SVG tag to attribute is based on the following pages:
    // https://github.com/wooorm/svg-element-attributes/blob/master/index.json
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
    // https://www.w3schools.com/graphics/svg_reference.asp
    "SVG_ATTRS_ALLOWLIST": {
        "a": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "download",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "focusable",
            "focushighlight",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "href",
            "hreflang",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "nav-down",
            "nav-down-left",
            "nav-down-right",
            "nav-left",
            "nav-next",
            "nav-prev",
            "nav-right",
            "nav-up",
            "nav-up-left",
            "nav-up-right",
            "opacity",
            "overflow",
            "ping",
            "pointer-events",
            "property",
            "referrerpolicy",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "target",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "transform",
            "type",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "altglyph": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "dx",
            "dy",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "format",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "glyphref",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "resource",
            "rev",
            "rotate",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "altglyphdef": [
            "about",
            "class",
            "content",
            "datatype",
            "id",
            "lang",
            "property",
            "rel",
            "resource",
            "rev",
            "style",
            "tabindex",
            "typeof"
        ],
        "altglyphitem": [
            "about",
            "class",
            "content",
            "datatype",
            "id",
            "lang",
            "property",
            "rel",
            "resource",
            "rev",
            "style",
            "tabindex",
            "typeof"
        ],
        "animatecolor": [
            "about",
            "accumulate",
            "additive",
            "alignment-baseline",
            "attributename",
            "attributetype",
            "baseline-shift",
            "begin",
            "by",
            "calcmode",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "dur",
            "enable-background",
            "end",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "from",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "id",
            "image-rendering",
            "kerning",
            "keysplines",
            "keytimes",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "max",
            "min",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "repeatcount",
            "repeatdur",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "restart",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "to",
            "typeof",
            "unicode-bidi",
            "values",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "animatemotion": [
            "about",
            "accumulate",
            "additive",
            "begin",
            "by",
            "calcmode",
            "class",
            "content",
            "datatype",
            "dur",
            "end",
            "externalresourcesrequired",
            "fill",
            "from",
            "href",
            "id",
            "keypoints",
            "keysplines",
            "keytimes",
            "lang",
            "max",
            "min",
            "origin",
            "path",
            "property",
            "rel",
            "repeatcount",
            "repeatdur",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "restart",
            "rev",
            "rotate",
            "style",
            "systemlanguage",
            "tabindex",
            "to",
            "typeof",
            "values"
        ],
        "animatetransform": [
            "about",
            "accumulate",
            "additive",
            "attributename",
            "attributetype",
            "begin",
            "by",
            "calcmode",
            "class",
            "content",
            "datatype",
            "dur",
            "end",
            "externalresourcesrequired",
            "fill",
            "from",
            "href",
            "id",
            "keysplines",
            "keytimes",
            "lang",
            "max",
            "min",
            "property",
            "rel",
            "repeatcount",
            "repeatdur",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "restart",
            "rev",
            "style",
            "systemlanguage",
            "tabindex",
            "to",
            "type",
            "typeof",
            "values"
        ],
        "audio": [
            "about",
            "begin",
            "class",
            "content",
            "datatype",
            "dur",
            "end",
            "externalresourcesrequired",
            "fill",
            "id",
            "lang",
            "max",
            "min",
            "property",
            "rel",
            "repeatcount",
            "repeatdur",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "restart",
            "rev",
            "style",
            "syncbehavior",
            "syncmaster",
            "synctolerance",
            "systemlanguage",
            "tabindex",
            "type",
            "typeof"
        ],
        "canvas": [
            "about",
            "class",
            "content",
            "datatype",
            "id",
            "lang",
            "preserveaspectratio",
            "property",
            "rel",
            "requiredextensions",
            "resource",
            "rev",
            "style",
            "systemlanguage",
            "tabindex",
            "typeof"
        ],
        "circle": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "cx",
            "cy",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "focusable",
            "focushighlight",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "nav-down",
            "nav-down-left",
            "nav-down-right",
            "nav-left",
            "nav-next",
            "nav-prev",
            "nav-right",
            "nav-up",
            "nav-up-left",
            "nav-up-right",
            "opacity",
            "overflow",
            "pathlength",
            "pointer-events",
            "property",
            "r",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "transform",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "clippath": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "clippathunits",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "transform",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "defs": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "transform",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "desc": [
            "about",
            "class",
            "content",
            "datatype",
            "id",
            "lang",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "rev",
            "style",
            "systemlanguage",
            "tabindex",
            "typeof"
        ],
        "ellipse": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "cx",
            "cy",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "focusable",
            "focushighlight",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "nav-down",
            "nav-down-left",
            "nav-down-right",
            "nav-left",
            "nav-next",
            "nav-prev",
            "nav-right",
            "nav-up",
            "nav-up-left",
            "nav-up-right",
            "opacity",
            "overflow",
            "pathlength",
            "pointer-events",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "rev",
            "rx",
            "ry",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "transform",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "feblend": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "in",
            "in2",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "mode",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "result",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "fecolormatrix": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "in",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "result",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "type",
            "typeof",
            "unicode-bidi",
            "values",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "fecomponenttransfer": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "in",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "result",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "fecomposite": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "in",
            "in2",
            "k1",
            "k2",
            "k3",
            "k4",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "operator",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "result",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "feconvolvematrix": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "bias",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "divisor",
            "dominant-baseline",
            "edgemode",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "in",
            "kernelmatrix",
            "kernelunitlength",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "order",
            "overflow",
            "pointer-events",
            "preservealpha",
            "property",
            "rel",
            "resource",
            "result",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "targetx",
            "targety",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "fediffuselighting": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "diffuseconstant",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "in",
            "kernelunitlength",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "result",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "surfacescale",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "fedisplacementmap": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "in",
            "in2",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "result",
            "rev",
            "scale",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "xchannelselector",
            "y",
            "ychannelselector"
        ],
        "fedistantlight": [
            "about",
            "azimuth",
            "class",
            "content",
            "datatype",
            "elevation",
            "id",
            "lang",
            "property",
            "rel",
            "resource",
            "rev",
            "style",
            "tabindex",
            "typeof"
        ],
        "feflood": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "result",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "fefunca": [
            "about",
            "amplitude",
            "class",
            "content",
            "datatype",
            "exponent",
            "id",
            "intercept",
            "lang",
            "offset",
            "property",
            "rel",
            "resource",
            "rev",
            "slope",
            "style",
            "tabindex",
            "tablevalues",
            "type",
            "typeof"
        ],
        "fefuncb": [
            "about",
            "amplitude",
            "class",
            "content",
            "datatype",
            "exponent",
            "id",
            "intercept",
            "lang",
            "offset",
            "property",
            "rel",
            "resource",
            "rev",
            "slope",
            "style",
            "tabindex",
            "tablevalues",
            "type",
            "typeof"
        ],
        "fefuncg": [
            "about",
            "amplitude",
            "class",
            "content",
            "datatype",
            "exponent",
            "id",
            "intercept",
            "lang",
            "offset",
            "property",
            "rel",
            "resource",
            "rev",
            "slope",
            "style",
            "tabindex",
            "tablevalues",
            "type",
            "typeof"
        ],
        "fefuncr": [
            "about",
            "amplitude",
            "class",
            "content",
            "datatype",
            "exponent",
            "id",
            "intercept",
            "lang",
            "offset",
            "property",
            "rel",
            "resource",
            "rev",
            "slope",
            "style",
            "tabindex",
            "tablevalues",
            "type",
            "typeof"
        ],
        "fegaussianblur": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "edgemode",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "in",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "result",
            "rev",
            "shape-rendering",
            "stddeviation",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "femerge": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "result",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "femergenode": [
            "about",
            "class",
            "content",
            "datatype",
            "id",
            "in",
            "lang",
            "property",
            "rel",
            "resource",
            "rev",
            "style",
            "tabindex",
            "typeof"
        ],
        "femorphology": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "in",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "operator",
            "overflow",
            "pointer-events",
            "property",
            "radius",
            "rel",
            "resource",
            "result",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "feoffset": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "dx",
            "dy",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "in",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "result",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "fepointlight": [
            "about",
            "class",
            "content",
            "datatype",
            "id",
            "lang",
            "property",
            "rel",
            "resource",
            "rev",
            "style",
            "tabindex",
            "typeof",
            "x",
            "y",
            "z"
        ],
        "fespecularlighting": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "in",
            "kernelunitlength",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "result",
            "rev",
            "shape-rendering",
            "specularconstant",
            "specularexponent",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "surfacescale",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "fespotlight": [
            "about",
            "class",
            "content",
            "datatype",
            "id",
            "lang",
            "limitingconeangle",
            "pointsatx",
            "pointsaty",
            "pointsatz",
            "property",
            "rel",
            "resource",
            "rev",
            "specularexponent",
            "style",
            "tabindex",
            "typeof",
            "x",
            "y",
            "z"
        ],
        "fetile": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "in",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "result",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "feturbulence": [
            "about",
            "alignment-baseline",
            "basefrequency",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "numoctaves",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "result",
            "rev",
            "seed",
            "shape-rendering",
            "stitchtiles",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "type",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "filter": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "filterres",
            "filterunits",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "primitiveunits",
            "property",
            "rel",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "font": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "horiz-adv-x",
            "horiz-origin-x",
            "horiz-origin-y",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "vert-adv-y",
            "vert-origin-x",
            "vert-origin-y",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "g": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "focusable",
            "focushighlight",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "nav-down",
            "nav-down-left",
            "nav-down-right",
            "nav-left",
            "nav-next",
            "nav-prev",
            "nav-right",
            "nav-up",
            "nav-up-left",
            "nav-up-right",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "transform",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "glyph": [
            "about",
            "alignment-baseline",
            "arabic-form",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "d",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-name",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "horiz-adv-x",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "orientation",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode",
            "unicode-bidi",
            "vert-adv-y",
            "vert-origin-x",
            "vert-origin-y",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "glyphref": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "dx",
            "dy",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "format",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "glyphref",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "hkern": [
            "about",
            "class",
            "content",
            "datatype",
            "g1",
            "g2",
            "id",
            "k",
            "lang",
            "property",
            "rel",
            "resource",
            "rev",
            "style",
            "tabindex",
            "typeof",
            "u1",
            "u2"
        ],
        "image": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "crossorigin",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "focusable",
            "focushighlight",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "href",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "nav-down",
            "nav-down-left",
            "nav-down-right",
            "nav-left",
            "nav-next",
            "nav-prev",
            "nav-right",
            "nav-up",
            "nav-up-left",
            "nav-up-right",
            "opacity",
            "overflow",
            "pointer-events",
            "preserveaspectratio",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "transform",
            "type",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "line": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "focusable",
            "focushighlight",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "nav-down",
            "nav-down-left",
            "nav-down-right",
            "nav-left",
            "nav-next",
            "nav-prev",
            "nav-right",
            "nav-up",
            "nav-up-left",
            "nav-up-right",
            "opacity",
            "overflow",
            "pathlength",
            "pointer-events",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "transform",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode",
            "x1",
            "x2",
            "y1",
            "y2"
        ],
        "lineargradient": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "gradienttransform",
            "gradientunits",
            "href",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "rev",
            "shape-rendering",
            "spreadmethod",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode",
            "x1",
            "x2",
            "y1",
            "y2"
        ],
        "marker": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "markerheight",
            "markerunits",
            "markerwidth",
            "mask",
            "opacity",
            "orient",
            "overflow",
            "pointer-events",
            "preserveaspectratio",
            "property",
            "refx",
            "refy",
            "rel",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "viewbox",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "mask": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "maskcontentunits",
            "maskunits",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "metadata": [
            "about",
            "class",
            "content",
            "datatype",
            "id",
            "lang",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "rev",
            "style",
            "systemlanguage",
            "tabindex",
            "typeof"
        ],
        "mpath": [
            "about",
            "class",
            "content",
            "datatype",
            "externalresourcesrequired",
            "href",
            "id",
            "lang",
            "property",
            "rel",
            "resource",
            "rev",
            "style",
            "tabindex",
            "typeof"
        ],
        "path": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "d",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "focusable",
            "focushighlight",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "nav-down",
            "nav-down-left",
            "nav-down-right",
            "nav-left",
            "nav-next",
            "nav-prev",
            "nav-right",
            "nav-up",
            "nav-up-left",
            "nav-up-right",
            "opacity",
            "overflow",
            "pathlength",
            "pointer-events",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "transform",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "pattern": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "href",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "patterncontentunits",
            "patterntransform",
            "patternunits",
            "pointer-events",
            "preserveaspectratio",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "viewbox",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "polygon": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "focusable",
            "focushighlight",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "nav-down",
            "nav-down-left",
            "nav-down-right",
            "nav-left",
            "nav-next",
            "nav-prev",
            "nav-right",
            "nav-up",
            "nav-up-left",
            "nav-up-right",
            "opacity",
            "overflow",
            "pathlength",
            "pointer-events",
            "points",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "transform",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "polyline": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "focusable",
            "focushighlight",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "nav-down",
            "nav-down-left",
            "nav-down-right",
            "nav-left",
            "nav-next",
            "nav-prev",
            "nav-right",
            "nav-up",
            "nav-up-left",
            "nav-up-right",
            "opacity",
            "overflow",
            "pathlength",
            "pointer-events",
            "points",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "transform",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "radialgradient": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "cx",
            "cy",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "fr",
            "fx",
            "fy",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "gradienttransform",
            "gradientunits",
            "href",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "r",
            "rel",
            "resource",
            "rev",
            "shape-rendering",
            "spreadmethod",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "rect": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "focusable",
            "focushighlight",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "nav-down",
            "nav-down-left",
            "nav-down-right",
            "nav-left",
            "nav-next",
            "nav-prev",
            "nav-right",
            "nav-up",
            "nav-up-left",
            "nav-up-right",
            "opacity",
            "overflow",
            "pathlength",
            "pointer-events",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "rev",
            "rx",
            "ry",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "transform",
            "typeof",
            "unicode-bidi",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "stop": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "offset",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "style": [
            "about",
            "class",
            "content",
            "datatype",
            "id",
            "lang",
            "media",
            "property",
            "rel",
            "resource",
            "rev",
            "style",
            "tabindex",
            "title",
            "type",
            "typeof"
        ],
        "svg": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "baseprofile",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "contentscripttype",
            "contentstyletype",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "focusable",
            "focushighlight",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "height",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "nav-down",
            "nav-down-left",
            "nav-down-right",
            "nav-left",
            "nav-next",
            "nav-prev",
            "nav-right",
            "nav-up",
            "nav-up-left",
            "nav-up-right",
            "opacity",
            "overflow",
            "playbackorder",
            "playbackorder",
            "pointer-events",
            "preserveaspectratio",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "resource",
            "rev",
            "shape-rendering",
            "snapshottime",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "syncbehaviordefault",
            "synctolerancedefault",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "timelinebegin",
            "timelinebegin",
            "transform",
            "typeof",
            "unicode-bidi",
            "version",
            "viewbox",
            "visibility",
            "width",
            "word-spacing",
            "writing-mode",
            "x",
            "xmlns",
            "xmlns:xlink",
            "y",
            "zoomandpan"
        ],
        "switch": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "focusable",
            "focushighlight",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "nav-down",
            "nav-down-left",
            "nav-down-right",
            "nav-left",
            "nav-next",
            "nav-prev",
            "nav-right",
            "nav-up",
            "nav-up-left",
            "nav-up-right",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "transform",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "symbol": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "preserveaspectratio",
            "property",
            "refx",
            "refy",
            "rel",
            "resource",
            "rev",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "typeof",
            "unicode-bidi",
            "viewbox",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "text": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "dx",
            "dy",
            "editable",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "focusable",
            "focushighlight",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "lengthadjust",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "nav-down",
            "nav-down-left",
            "nav-down-right",
            "nav-left",
            "nav-next",
            "nav-prev",
            "nav-right",
            "nav-up",
            "nav-up-left",
            "nav-up-right",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "rev",
            "rotate",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "textlength",
            "transform",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "textpath": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "href",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "lengthadjust",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "method",
            "opacity",
            "overflow",
            "path",
            "pointer-events",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "resource",
            "rev",
            "shape-rendering",
            "side",
            "spacing",
            "startoffset",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "textlength",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode"
        ],
        "title": [
            "about",
            "class",
            "content",
            "datatype",
            "id",
            "lang",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "rev",
            "style",
            "systemlanguage",
            "tabindex",
            "typeof"
        ],
        "tref": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "dx",
            "dy",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "lengthadjust",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "resource",
            "rev",
            "rotate",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "textlength",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "tspan": [
            "about",
            "alignment-baseline",
            "baseline-shift",
            "class",
            "clip",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "content",
            "cursor",
            "datatype",
            "direction",
            "display",
            "dominant-baseline",
            "dx",
            "dy",
            "enable-background",
            "externalresourcesrequired",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "flood-color",
            "flood-opacity",
            "focusable",
            "focushighlight",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "id",
            "image-rendering",
            "kerning",
            "lang",
            "lengthadjust",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "nav-down",
            "nav-down-left",
            "nav-down-right",
            "nav-left",
            "nav-next",
            "nav-prev",
            "nav-right",
            "nav-up",
            "nav-up-left",
            "nav-up-right",
            "opacity",
            "overflow",
            "pointer-events",
            "property",
            "rel",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "rev",
            "rotate",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "systemlanguage",
            "tabindex",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "textlength",
            "typeof",
            "unicode-bidi",
            "visibility",
            "word-spacing",
            "writing-mode",
            "x",
            "y"
        ],
        "video": [
            "about",
            "begin",
            "class",
            "content",
            "datatype",
            "dur",
            "end",
            "externalresourcesrequired",
            "fill",
            "focusable",
            "focushighlight",
            "height",
            "id",
            "initialvisibility",
            "lang",
            "max",
            "min",
            "nav-down",
            "nav-down-left",
            "nav-down-right",
            "nav-left",
            "nav-next",
            "nav-prev",
            "nav-right",
            "nav-up",
            "nav-up-left",
            "nav-up-right",
            "overlay",
            "preserveaspectratio",
            "property",
            "rel",
            "repeatcount",
            "repeatdur",
            "requiredextensions",
            "requiredfeatures",
            "requiredfonts",
            "requiredformats",
            "resource",
            "restart",
            "rev",
            "style",
            "syncbehavior",
            "syncmaster",
            "synctolerance",
            "systemlanguage",
            "tabindex",
            "transform",
            "transformbehavior",
            "type",
            "typeof",
            "width",
            "x",
            "y"
        ],
        "view": [
            "about",
            "class",
            "content",
            "datatype",
            "externalresourcesrequired",
            "id",
            "lang",
            "preserveaspectratio",
            "property",
            "rel",
            "resource",
            "rev",
            "style",
            "tabindex",
            "typeof",
            "viewbox",
            "viewtarget",
            "zoomandpan"
        ],
        "vkern": [
            "about",
            "class",
            "content",
            "datatype",
            "g1",
            "g2",
            "id",
            "k",
            "lang",
            "property",
            "rel",
            "resource",
            "rev",
            "style",
            "tabindex",
            "typeof",
            "u1",
            "u2"
        ]
    },
    // List of supported default categories. For now, each category has a specific
    // color associated with it. Each category also has a thumbnail icon whose
    // filename is '{{CategoryName}}.svg'.
    "CATEGORIES_TO_COLORS": {
        "Mathematics": "#cd672b",
        "Algebra": "#cd672b",
        "Arithmetic": "#d68453",
        "Calculus": "#b86330",
        "Logic": "#d68453",
        "Combinatorics": "#cf5935",
        "Graph Theory": "#cf5935",
        "Probability": "#cf5935",
        "Statistics": "#cd672b",
        "Geometry": "#d46949",
        "Trigonometry": "#d46949",
        "Algorithms": "#d0982a",
        "Computing": "#bb8b2f",
        "Programming": "#d9aa53",
        "Astronomy": "#879d6c",
        "Biology": "#97a766",
        "Chemistry": "#aab883",
        "Engineering": "#8b9862",
        "Environment": "#aba86d",
        "Medicine": "#97a766",
        "Physics": "#879d6c",
        "Architecture": "#6e3466",
        "Art": "#895a83",
        "Music": "#6a3862",
        "Philosophy": "#613968",
        "Poetry": "#7f507f",
        "English": "#193a69",
        "Languages": "#1b4174",
        "Latin": "#3d5a89",
        "Reading": "#193a69",
        "Spanish": "#405185",
        "Gaulish": "#1b4174",
        "Business": "#387163",
        "Economics": "#5d8b7f",
        "Geography": "#3c6d62",
        "Government": "#538270",
        "History": "#3d6b52",
        "Law": "#538270",
        "Education": "#942e20",
        "Puzzles": "#a8554a",
        "Sport": "#893327",
        "Welcome": "#992a2b"
    },
    // This is linked to VALID_RTE_COMPONENTS in android_validation_constants.
    "VALID_RTE_COMPONENTS_FOR_ANDROID": ["image", "link", "math", "skillreview"],
    // This is linked to SUPPORTED_LANGUAGES in android_validation_constants.
    "SUPPORTED_CONTENT_LANGUAGES_FOR_ANDROID": [{
            "code": "en",
            "description": "English",
            "decimal_separator": "."
        }],
    // List of supported content languages in which we can create explorations or
    // other entities. Each description has a parenthetical part that may be
    // stripped out to give a shorter description.
    // The decimal separators were derived from https://en.wikipedia.org/w/index.php?title=Decimal_separator&section=9#Usage_worldwide.
    "SUPPORTED_CONTENT_LANGUAGES": [{
            "code": "en",
            "description": "English",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "code": "ar",
            "description": "العربية (Arabic)",
            "direction": "rtl",
            "decimal_separator": ","
        }, {
            "code": "sq",
            "description": "shqip (Albanian)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "az",
            "description": "Azeri (Azerbaijani)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "bg",
            "description": "български (Bulgarian)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "bn",
            "description": "বাংলা (Bangla)",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "code": "ca",
            "description": "català (Catalan)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "zh",
            "description": "中文 (Chinese)",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "code": "hr",
            "description": "hrvatski (Croatian)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "cs",
            "description": "čeština (Czech)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "da",
            "description": "dansk (Danish)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "nl",
            "description": "Nederlands (Dutch)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "fat",
            "description": "Fanti",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "code": "tl",
            "description": "Filipino (Filipino)",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "code": "fi",
            "description": "suomi (Finnish)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "fr",
            "description": "français (French)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "lg",
            "description": "Luganda (Ganda)",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "code": "de",
            "description": "Deutsch (German)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "el",
            "description": "ελληνικά (Greek)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "ha",
            "description": "Halshen Hausa (Hausa)",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "code": "he",
            "description": "עברית (Hebrew)",
            "direction": "rtl",
            "decimal_separator": "."
        }, {
            "code": "hi",
            "description": "हिन्दी (Hindi)",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "code": "hi-en",
            "description": "Hinglish",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "code": "hu",
            "description": "magyar (Hungarian)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "id",
            "description": "Bahasa Indonesia (Indonesian)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "ig",
            "description": "Ásụ̀sụ́ Ìgbò (Igbo)",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "code": "it",
            "description": "italiano (Italian)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "ja",
            "description": "日本語 (Japanese)",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "code": "kab",
            "description": "Taqbaylit (Kabyle)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "ko",
            "description": "한국어 (Korean)",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "code": "lv",
            "description": "latviešu (Latvian)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "lt",
            "description": "lietuvių (Lithuanian)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "mr",
            "description": "मराठी (Marathi)",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "code": "no",
            "description": "Norsk (Norwegian)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "fa",
            "description": "فارسی (Persian)",
            "direction": "rtl",
            "decimal_separator": ","
        }, {
            "code": "pcm",
            "description": "Naijá (Nigerian Pidgin)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "pl",
            "description": "polszczyzna (Polish)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "prs",
            "description": "دری (Dari)",
            "direction": "rtl",
            "decimal_separator": ","
        }, {
            "code": "pt",
            "description": "português (Portuguese)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "ro",
            "description": "română (Romanian)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "ru",
            "description": "pусский (Russian)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "sr",
            "description": "cрпски (Serbian)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "sk",
            "description": "slovenčina (Slovak)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "sl",
            "description": "slovenščina (Slovenian)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "es",
            "description": "español (Spanish)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "sw",
            "description": "kiswahili (Swahili)",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "code": "sv",
            "description": "svenska (Swedish)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "ta",
            "description": "தமிழ் (Tamil)",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "code": "th",
            "description": "ภาษาไทย (Thai)",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "code": "tr",
            "description": "Türkçe (Turkish)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "uk",
            "description": "yкраїнська (Ukrainian)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "ur",
            "description": "اُردُو (Urdu)",
            "direction": "rtl",
            "decimal_separator": ","
        }, {
            "code": "vi",
            "description": "Tiếng Việt (Vietnamese)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "code": "yo",
            "description": "Èdè Yoùbá (Yoruba)",
            "direction": "ltr",
            "decimal_separator": "."
        }],
    // NOTE TO DEVELOPERS: While adding another language, please ensure that the
    // languages are roughly in order of how much support we have for them in
    // terms of lesson content translations.
    // List of supported site languages in which the platform is offered.
    // The decimal separators were derived from https://en.wikipedia.org/w/index.php?title=Decimal_separator&section=9#Usage_worldwide.
    "SUPPORTED_SITE_LANGUAGES": [{
            "id": "en",
            "text": "English",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "id": "pt-br",
            "text": "Português (Brasil)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "id": "ar",
            "text": "العربية",
            "direction": "rtl",
            "decimal_separator": ","
        }, {
            "id": "hi",
            "text": "हिन्दी",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "id": "es",
            "text": "Español",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "id": "bn",
            "text": "বাংলা",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "id": "fr",
            "text": "français",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "id": "id",
            "text": "Bahasa Indonesia",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "id": "pcm",
            "text": "Naijá (Nigerian Pidgin)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "id": "uk",
            "text": "украї́нська мо́ва",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "id": "sk",
            "text": "slovenčina",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "id": "nl",
            "text": "Nederlands",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "id": "kab",
            "text": "Taqbaylit (Kabyle)",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "id": "vi",
            "text": "Tiếng Việt",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "id": "tr",
            "text": "Türkçe",
            "direction": "ltr",
            "decimal_separator": ","
        }, {
            "id": "zh-hans",
            "text": "中文(简体)",
            "direction": "ltr",
            "decimal_separator": "."
        }, {
            "id": "zh-hant",
            "text": "中文(繁體)",
            "direction": "ltr",
            "decimal_separator": "."
        }],
    // List of supported audio languages in which we have audio and translations
    // for explorations or other entities.
    // Related languages are used to prioritize an exploration's language when
    // setting the default audio language.
    "SUPPORTED_AUDIO_LANGUAGES": [{
            "id": "en",
            "description": "English",
            "relatedLanguages": ["en"],
            "direction": "ltr"
        }, {
            "id": "ak",
            "description": "Ákán (Akan)",
            "relatedLanguages": ["ak"],
            "direction": "ltr"
        }, {
            "id": "sq",
            "description": "shqip (Albanian)",
            "relatedLanguages": ["sq"],
            "direction": "ltr"
        }, {
            "id": "ar",
            "description": "العربية (Arabic)",
            "relatedLanguages": ["ar"],
            "direction": "rtl"
        }, {
            "id": "az",
            "description": "Azeri (Azerbaijani)",
            "relatedLanguages": ["az"],
            "direction": "ltr"
        }, {
            "id": "bg",
            "description": "български (Bulgarian)",
            "relatedLanguages": ["bg"],
            "direction": "ltr"
        }, {
            "id": "bn",
            "description": "বাংলা (Bangla)",
            "relatedLanguages": ["bn"],
            "direction": "ltr"
        }, {
            "id": "ms",
            "description": "بهاس ملايو(Bahasa Melayu)",
            "relatedLanguages": ["ms"],
            "direction": "ltr"
        }, {
            "id": "ca",
            "description": "català (Catalan)",
            "relatedLanguages": ["ca"],
            "direction": "ltr"
        }, {
            "id": "zh",
            "description": "中文 (Chinese)",
            "relatedLanguages": ["zh"],
            "direction": "ltr"
        }, {
            "id": "hr",
            "description": "hrvatski (Croatian)",
            "relatedLanguages": ["hr"],
            "direction": "ltr"
        }, {
            "id": "cs",
            "description": "čeština (Czech)",
            "relatedLanguages": ["cs"],
            "direction": "ltr"
        }, {
            "id": "da",
            "description": "dansk (Danish)",
            "relatedLanguages": ["da"],
            "direction": "ltr"
        }, {
            "id": "prs",
            "description": "دری (Dari)",
            "relatedLanguages": ["prs"],
            "direction": "rtl"
        }, {
            "id": "nl",
            "description": "Nederlands (Dutch)",
            "relatedLanguages": ["nl"],
            "direction": "ltr"
        }, {
            "id": "ee",
            "description": "Eʋegbe (Ewe)",
            "relatedLanguages": ["ee"],
            "direction": "ltr"
        }, {
            "id": "fat",
            "description": "Fante (Fanti)",
            "relatedLanguages": ["ak", "fat"],
            "direction": "ltr"
        }, {
            "id": "tl",
            "description": "Filipino (Filipino)",
            "relatedLanguages": ["tl"],
            "direction": "ltr"
        }, {
            "id": "fi",
            "description": "suomi (Finnish)",
            "relatedLanguages": ["fi"],
            "direction": "ltr"
        }, {
            "id": "fr",
            "description": "français (French)",
            "relatedLanguages": ["fr"],
            "direction": "ltr"
        }, {
            "id": "lg",
            "description": "Luganda (Ganda)",
            "relatedLanguages": ["lg"],
            "direction": "ltr"
        }, {
            "id": "de",
            "description": "Deutsch (German)",
            "relatedLanguages": ["de"],
            "direction": "ltr"
        }, {
            "id": "el",
            "description": "ελληνικά (Greek)",
            "relatedLanguages": ["el"],
            "direction": "ltr"
        }, {
            "id": "gaa",
            "description": "Gã (Ga)",
            "relatedLanguages": ["gaa"],
            "direction": "ltr"
        }, {
            "id": "ha",
            "description": "Halshen Hausa (Hausa)",
            "relatedLanguages": ["ha"],
            "direction": "ltr"
        }, {
            "id": "he",
            "description": "עברית (Hebrew)",
            "relatedLanguages": ["he"],
            "direction": "rtl"
        }, {
            "id": "hi",
            "description": "हिन्दी (Hindi)",
            "relatedLanguages": ["hi"],
            "direction": "ltr"
        }, {
            "id": "hi-en",
            "description": "Hinglish",
            "relatedLanguages": ["hi", "en"],
            "direction": "ltr"
        }, {
            "id": "hu",
            "description": "magyar (Hungarian)",
            "relatedLanguages": ["hu"],
            "direction": "ltr"
        }, {
            "id": "id",
            "description": "Bahasa Indonesia (Indonesian)",
            "relatedLanguages": ["id"],
            "direction": "ltr"
        }, {
            "id": "ig",
            "description": "Ásụ̀sụ́ Ìgbò (Igbo)",
            "relatedLanguages": ["igbo"],
            "direction": "ltr"
        }, {
            "id": "it",
            "description": "italiano (Italian)",
            "relatedLanguages": ["it"],
            "direction": "ltr"
        }, {
            "id": "ja",
            "description": "日本語 (Japanese)",
            "relatedLanguages": ["ja"],
            "direction": "ltr"
        }, {
            "id": "kab",
            "description": "Taqbaylit (Kabyle)",
            "relatedLanguages": ["kab"],
            "direction": "ltr"
        }, {
            "id": "ko",
            "description": "한국어 (Korean)",
            "relatedLanguages": ["ko"],
            "direction": "ltr"
        }, {
            "id": "lv",
            "description": "latviešu (Latvian)",
            "relatedLanguages": ["lv"],
            "direction": "ltr"
        }, {
            "id": "lt",
            "description": "lietuvių (Lithuanian)",
            "relatedLanguages": ["lt"],
            "direction": "ltr"
        }, {
            "id": "mr",
            "description": "मराठी (Marathi)",
            "relatedLanguages": ["mr"],
            "direction": "ltr"
        }, {
            "id": "no",
            "description": "Norsk (Norwegian)",
            "relatedLanguages": ["no"],
            "direction": "ltr"
        }, {
            "id": "fa",
            "description": "فارسی (Persian)",
            "relatedLanguages": ["fa"],
            "direction": "rtl"
        }, {
            "id": "pcm",
            "description": "Naijá (Nigerian Pidgin)",
            "relatedLanguages": ["pcm"],
            "direction": "ltr"
        }, {
            "id": "pl",
            "description": "polszczyzna (Polish)",
            "relatedLanguages": ["pl"],
            "direction": "ltr"
        }, {
            "id": "pt",
            "description": "português (Portuguese)",
            "relatedLanguages": ["pt"],
            "direction": "ltr"
        }, {
            "id": "ps",
            "description": "پښتو (Pashto)",
            "relatedLanguages": ["ps"],
            "direction": "rtl"
        }, {
            "id": "ro",
            "description": "română (Romanian)",
            "relatedLanguages": ["ro"],
            "direction": "ltr"
        }, {
            "id": "ru",
            "description": "pусский (Russian)",
            "relatedLanguages": ["ru"],
            "direction": "ltr"
        }, {
            "id": "sr",
            "description": "cрпски (Serbian)",
            "relatedLanguages": ["sr"],
            "direction": "ltr"
        }, {
            "id": "sk",
            "description": "slovenčina (Slovak)",
            "relatedLanguages": ["sk"],
            "direction": "ltr"
        }, {
            "id": "sl",
            "description": "slovenščina (Slovenian)",
            "relatedLanguages": ["sl"],
            "direction": "ltr"
        }, {
            "id": "es",
            "description": "español (Spanish)",
            "relatedLanguages": ["es"],
            "direction": "ltr"
        }, {
            "id": "sw",
            "description": "kiswahili (Swahili)",
            "relatedLanguages": ["sw"],
            "direction": "ltr"
        }, {
            "id": "sv",
            "description": "svenska (Swedish)",
            "relatedLanguages": ["sv"],
            "direction": "ltr"
        }, {
            "id": "ta",
            "description": "தமிழ் (Tamil)",
            "relatedLanguages": ["ta"],
            "direction": "ltr"
        }, {
            "id": "te",
            "description": "తెలుగు (Telugu)",
            "relatedLanguages": ["te"],
            "direction": "ltr"
        }, {
            "id": "th",
            "description": "ภาษาไทย (Thai)",
            "relatedLanguages": ["th"],
            "direction": "ltr"
        }, {
            "id": "tr",
            "description": "Türkçe (Turkish)",
            "relatedLanguages": ["tr"],
            "direction": "ltr"
        }, {
            "id": "uk",
            "description": "yкраїнська (Ukrainian)",
            "relatedLanguages": ["uk"],
            "direction": "ltr"
        }, {
            "id": "ur",
            "description": "اُردُو (Urdu)",
            "relatedLanguages": ["ur"],
            "direction": "rtl"
        }, {
            "id": "vi",
            "description": "Tiếng Việt (Vietnamese)",
            "relatedLanguages": ["vi"],
            "direction": "ltr"
        }, {
            "id": "yo",
            "description": "Èdè Yoùbá (Yoruba)",
            "relatedLanguages": ["yo"],
            "direction": "ltr"
        }],
    "AUTOGENERATED_AUDIO_LANGUAGES": [{
            "id": "en-auto",
            "description": "English (auto)",
            "explorationLanguage": "en",
            "speechSynthesisCode": "en-US",
            "speechSynthesisCodeMobile": "en_US"
        }],
    "TRANSLATION_TIPS": {
        // Arabic.
        "ar": [
            // eslint-disable-next-line max-len
            "In Oppia, we prefer to use simple words that can be easily understood by children. For example, we use “تابع قائلًا” instead of “أردف قائلًا”. Furthermore, the English words that are used in the Arab society regularly can be translated as follows; Arabic word (The regularly used English word). For example, we can translate the word cupcakes this way; كعك القوالب الصغيرة (cupcakes). ",
            // eslint-disable-next-line max-len
            "Use respectful ways and formal prefixes to address people. For example, use “سيدي” and “سيدتي”. ",
            // eslint-disable-next-line max-len
            "If the name has a meaning in Arabic, or in English, such as Baker or Crumb, always use words that indicate that they are names before writing the name itself. For example, you can use one of the following words depending on the context; “السيد، السيدة، العم، الجد، الجدة، الآنسة.”",
            "Use the same voice (active or passive) as in the original English Text",
            // eslint-disable-next-line max-len
            "Preserve punctuation and bolding. If the original content has bold text, make sure it is bold in Arabic as well. If there are bullet points, double quotes, etc., make sure that the translated content also has bullet points and double quotes.",
            // eslint-disable-next-line max-len
            "Use the hyperlinks to different cards as shown in the original English Text."
        ],
        // Bangla.
        "bn": [
            // eslint-disable-next-line max-len
            "Use simple Bangla words that are used in daily communication. Note that common English words (pencil, etc.) can be written as transliterations (e.g পেন্সিল ).",
            "Use proper punctuation.",
            "Full stop = |",
            // eslint-disable-next-line max-len
            "Use the same voice (active or passive) as in the original English text.",
            // eslint-disable-next-line max-len
            "Preserve punctuation and bolding. If the original content has bold text, make sure it is bold in Bangla as well. If there are bullet points, double quotes, etc., make sure that the translated content also has bullet points and double quotes."
        ],
        // Chinese.
        "zh": [
            // eslint-disable-next-line max-len
            "Write fractions or numbers as they are, unless they are written out in words. For instance, one-fifth would be (五分之一)",
            // eslint-disable-next-line max-len
            "When referring to Mr. Baker (or, in general, Mr./Ms. followed by an occupation), leave it as Baker先生, since in certain cases Baker is the last name.",
            "Make sure to use the correct punctuation:",
            "Period = 。",
            "Comma for compound sentences or translation phrases = ，",
            "Comma for list of numbers or objects = 、",
            // eslint-disable-next-line max-len
            "Preserve bolding. If the original content has bold text, make sure it is bold in Chinese as well.",
            // eslint-disable-next-line max-len
            "Make sure that you have selected the correct words (e.g. words such as 再 and 在 )."
        ],
        // Hindi.
        "hi": [
            // eslint-disable-next-line max-len
            "Prefer simple Hindi words that are used in daily communication Note that common English words (pen, paper, cake, etc.) can be written as transliterations (पेन, पेपर, केक). For harder words, include the English word in parentheses, e.g. अंश (Numerator), हर (Denominator), भिन्न (Fraction).",
            // eslint-disable-next-line max-len
            "Use respectful pronouns (like “आप” instead of “तुम/तू ”) and a corresponding respectful tone like “करिये, करेंगे”.",
            // eslint-disable-next-line max-len
            "Use the same voice (active or passive) as in the original English text.",
            // eslint-disable-next-line max-len
            "Preserve punctuation and bolding. If the original content has bold text, make sure it is bold in Hindi as well. If there are bullet points, double quotes, etc., make sure that the translated content also has bullet points and double quotes.",
            // eslint-disable-next-line max-len
            "If the original card has “components” (such as pictures, links, and equations), these need to be added to the translated content. You can use the “Copy tool” for this -- click on the Copy tool and then click on the component you want to carry over. Also, double-click on the image and translate the alt text (and caption, if any)."
        ],
        // Spanish.
        "es": [
            "Include proper punctuation, ¡blank!, ¿question? and accent marks.",
            // eslint-disable-next-line max-len
            "In Spanish, the nouns are usually gendered. Make sure to use the correct article gender for the noun gender (el gato, la casa , las mujeres, los hombres etc.) El is usually used for masculine singular and la is usually for feminine singular. Los for masculine plural and las for feminine plural.",
            // eslint-disable-next-line max-len
            "Try to make sure that the accents are placed correctly as it can make a big difference in meaning for the reader (tu = your vs. tú = informal you, si = if vs. sí = yes).",
            // eslint-disable-next-line max-len
            "Preserve punctuation and bolding. If the original content has bold text, make sure it is bold in Spanish as well. If there are bullet points, double quotes, etc., make sure that the translated content also has bullet points and double quotes."
        ],
        // Portuguese.
        "pt": [
            // eslint-disable-next-line max-len
            "When translating names of mathematical terms, look for how these names are used in Brazilian education/literature instead of translating literally. For example, while the names may be similar in some cases (e.g. \"The Commutative Property of Multiplication\" would be \"A Propriedade Comutativa da Multiplicação\"), in other cases the literal translation will not match the names used in Brazil (e.g. \"The Carrying Method of multiplication\" would be \"O Método Tradicional de Multiplicação\"). Also, terms like \"Place Values\" may have a different translation depending on the context, which may be \"casa\"/\"ordem\" or \"valor relativo\".",
            // eslint-disable-next-line max-len
            "When writing a number, remember that \",\" in English corresponds to \".\" in Portuguese, and vice-versa.",
            // eslint-disable-next-line max-len
            "Prefer to use friendly words and sentences for children. For example, instead of using \"Diga-me o nome...\" or \"vou pedir-lhe ajuda\", you can write the sentence with a more informal language like \"Me diga o nome...\" or \"vou pedir a sua ajuda\".",
            // eslint-disable-next-line max-len
            "In English some nouns/articles are neutral. In Portuguese the nouns are usually gendered. Be careful not to generate inconsistencies and make sure to use the correct article gender for the noun gender. For example: Nina and Sandra loved the cake. They went out to buy more. In Portuguese: Nina e Sandra adoraram o bolo. Elas saíram para comprar mais.",
            // eslint-disable-next-line max-len
            "Preserve punctuation and bolding. If the original content has bold text, make sure it is bold in Portuguese as well. If there are bullet points, double quotes, etc., make sure that the translated content also has bullet points and double quotes.",
            // eslint-disable-next-line max-len
            "If the original card has “components” (such as pictures, links, and equations), these need to be added to the translated content. You can use the “Copy tool” for this -- click on the Copy tool and then click on the component you want to carry over. Also, double-click on the image and translate the alt text (and caption, if any).",
            // eslint-disable-next-line max-len
            "Images with text in English should be edited and replaced by the same images with the same text in Portuguese. If you don't know how to edit the image, please skip the translation.",
            // eslint-disable-next-line max-len
            "If you think you need more context in order to get the right terms and nouns, please play the lesson once before submitting the translation.",
            // eslint-disable-next-line max-len
            "Keep in mind that some English puns may not work for Portuguese, so you might need to adjust them or construct the same sentence without the pun.",
            "When translating a currency, replace \"Dollar\" for \"Real\"."
        ]
    },
    // Types of view in creator dashboard page.
    "ALLOWED_CREATOR_DASHBOARD_DISPLAY_PREFS": {
        "CARD": "card",
        "LIST": "list"
    },
    "ALLOWED_QUESTION_INTERACTION_CATEGORIES": [{
            "name": "Commonly Used",
            "interaction_ids": [
                "ImageClickInput",
                "ItemSelectionInput",
                "MultipleChoiceInput",
                "TextInput",
                "DragAndDropSortInput",
                "NumericInput"
            ]
        }, {
            "name": "Math",
            "interaction_ids": [
                "FractionInput",
                "NumberWithUnits",
                "NumericInput"
            ]
        }],
    // These are linked to the VALID_INTERACTION_IDS constant in
    // android_validation_constants.py.
    "ALLOWED_EXPLORATION_IN_STORY_INTERACTION_CATEGORIES": [{
            "name": "General",
            "interaction_ids": [
                "Continue",
                "EndExploration",
                "ImageClickInput",
                "ItemSelectionInput",
                "MultipleChoiceInput",
                "TextInput",
                "DragAndDropSortInput"
            ]
        }, {
            "name": "Math",
            "interaction_ids": [
                "FractionInput",
                "NumericInput",
                "NumericExpressionInput",
                "AlgebraicExpressionInput",
                "MathEquationInput",
                "NumberWithUnits",
                "RatioExpressionInput"
            ]
        }],
    // These categories and interactions are displayed in the order in which they
    // appear in the interaction selector.
    "ALLOWED_INTERACTION_CATEGORIES": [{
            "name": "Commonly Used",
            "interaction_ids": [
                "Continue",
                "EndExploration",
                "ImageClickInput",
                "ItemSelectionInput",
                "MultipleChoiceInput",
                "NumericInput",
                "TextInput",
                "DragAndDropSortInput"
            ]
        }, {
            "name": "Math",
            "interaction_ids": [
                "FractionInput",
                "GraphInput",
                "NumericInput",
                "SetInput",
                "NumericExpressionInput",
                "AlgebraicExpressionInput",
                "MathEquationInput",
                "NumberWithUnits",
                "RatioExpressionInput"
            ]
        }, {
            "name": "Programming",
            "interaction_ids": [
                "CodeRepl",
                "PencilCodeEditor"
            ]
        }, {
            "name": "Music",
            "interaction_ids": [
                "MusicNotesInput"
            ]
        }, {
            "name": "Geography",
            "interaction_ids": [
                "InteractiveMap"
            ]
        }],
    "CONTRIBUTION_RIGHT_CATEGORY_REVIEW_TRANSLATION": "translation",
    "CONTRIBUTION_RIGHT_CATEGORY_REVIEW_VOICEOVER": "voiceover",
    "CONTRIBUTION_RIGHT_CATEGORY_REVIEW_QUESTION": "question",
    "CONTRIBUTION_RIGHT_CATEGORY_SUBMIT_QUESTION": "submit_question",
    "CONTRIBUTION_RIGHT_CATEGORIES": [
        "translation", "voiceover", "question", "submit_question"
    ],
    "ACTION_REMOVE_ALL_REVIEW_RIGHTS": "all",
    "ACTION_REMOVE_SPECIFIC_CONTRIBUTION_RIGHTS": "specific",
    "USER_FILTER_CRITERION_USERNAME": "username",
    "USER_FILTER_CRITERION_ROLE": "role",
    // Interaction IDs for which answer details cannot be solicited.
    "INTERACTION_IDS_WITHOUT_ANSWER_DETAILS": ["EndExploration", "Continue"],
    "WHITELISTED_COLLECTION_IDS_FOR_SAVING_GUEST_PROGRESS": [],
    "FEEDBACK_SUBJECT_MAX_CHAR_LIMIT": 50,
    "MAX_CURRENT_GOALS_COUNT": 5,
    "ACTIVITY_STATUS_PRIVATE": "private",
    "ACTIVITY_STATUS_PUBLIC": "public",
    "SITE_FEEDBACK_FORM_URL": "",
    "SYSTEM_USER_IDS": ["admin", "OppiaMigrationBot"],
    // A string containing the disallowed characters in state or exploration
    // names. The underscore is needed because spaces in names must be converted
    // to underscores when displayed as part of a URL or key. The other
    // conventions here are derived from the Wikipedia guidelines for naming
    // articles.
    "INVALID_NAME_CHARS": [
        ":", "#", "/", "|", "_", "%", "<", ">", "[", "]", "{", "}", "\\ufffd",
        "\\\\", "\\u007f", "\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004",
        "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000b", "\\f",
        "\\r", "\\u000e", "\\u000f", "\\u0010", "\\u0011", "\\u0012", "\\u0013",
        "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001a",
        "\\u001b", "\\u001c", "\\u001d", "\\u001e", "\\u001f"
    ],
    "DEFAULT_SKILL_DIFFICULTY": 0.3,
    "INLINE_RTE_COMPONENTS": ["link", "math", "skillreview"],
    // If new difficulties are added or the names changed, only the constants
    // below need to be edited.
    "SKILL_DIFFICULTY_EASY": "Easy",
    "SKILL_DIFFICULTY_MEDIUM": "Medium",
    "SKILL_DIFFICULTY_HARD": "Hard",
    "SKILL_DIFFICULTIES": ["Easy", "Medium", "Hard"],
    "SKILL_DIFFICULTY_LABEL_TO_FLOAT": {
        "Easy": 0.3,
        "Medium": 0.6,
        "Hard": 0.9
    },
    "ENABLE_PREREQUISITE_SKILLS": false,
    "ENABLE_NEW_STRUCTURE_VIEWER_UPDATES": true,
    "ENABLE_SOLICIT_ANSWER_DETAILS_FEATURE": true,
    "MAX_SKILLS_PER_QUESTION": 3,
    "MAX_QUESTIONS_PER_SKILL": 10,
    "NUM_EXPLORATIONS_PER_REVIEW_TEST": 3,
    "NUM_QUESTIONS_PER_PAGE": 10,
    "BULK_EMAIL_SERVICE_SIGNUP_URL": "",
    // The default number of opportunities to show on the contributor dashboard
    // page.
    "OPPORTUNITIES_PAGE_SIZE": 10,
    // The following character limit constraints follow from
    // android_validation_constants.py. Both have to be kept in sync.
    // This represents the maximum number of characters in the URL fragment for
    // classroom in the classroom page URL. E.g. in /learn/math/...,
    // 'math' is the 'classroom URL fragment'.
    "MAX_CHARS_IN_CLASSROOM_URL_FRAGMENT": 20,
    "MAX_CHARS_IN_TOPIC_NAME": 39,
    "MAX_CHARS_IN_ABBREV_TOPIC_NAME": 12,
    // This represents the maximum number of characters in the URL fragment for
    // topic in the topic page URL. E.g. in /learn/math/fractions/...,
    // 'fractions' is the 'topic URL fragment'.
    "MAX_CHARS_IN_TOPIC_URL_FRAGMENT": 20,
    "MAX_CHARS_IN_TOPIC_DESCRIPTION": 240,
    "MAX_CHARS_IN_SUBTOPIC_TITLE": 64,
    "MAX_CHARS_IN_SKILL_DESCRIPTION": 100,
    "MAX_CHARS_IN_STORY_TITLE": 39,
    "MAX_CHARS_IN_STORY_DESCRIPTION": 1000,
    "MAX_CHARS_IN_EXPLORATION_TITLE": 36,
    "MAX_CHARS_IN_CHAPTER_DESCRIPTION": 152,
    "MAX_CHARS_IN_MISCONCEPTION_NAME": 100,
    "MAX_CHARS_IN_BLOG_POST_TITLE": 40,
    "MIN_CHARS_IN_BLOG_POST_TITLE": 5,
    "MAX_CHARS_IN_BLOG_POST_SUMMARY": 300,
    "STORY_ID_LENGTH": 12,
    // This represents the maximum number of characters in the URL fragment for
    // story in the story page URL. E.g.
    // in /learn/math/fractions/story/bakery/..., 'bakery' is the
    // 'story URL fragment'.
    "MAX_CHARS_IN_STORY_URL_FRAGMENT": 30,
    // This represents the maximum number of characters in the URL fragment for
    // subtopic in the revision page URL. E.g.
    // in /learn/math/fractions/revision/place-values, 'place-values' is the
    // 'subtopic URL fragment'.
    "MAX_CHARS_IN_SUBTOPIC_URL_FRAGMENT": 25,
    // This represents the maximum number of characters in the URL fragment for
    // the blog post.
    "MAX_CHARS_IN_BLOG_POST_URL_FRAGMENT": 65,
    // The recommended length for meta tag contents. Search engines will truncate
    // results greater than this limit.
    "MAX_CHARS_IN_META_TAG_CONTENT": 160,
    "MIN_CHARS_IN_PAGE_TITLE_FRAGMENT_FOR_WEB": 5,
    "MAX_CHARS_IN_PAGE_TITLE_FRAGMENT_FOR_WEB": 50,
    "NEW_STATE_TEMPLATE": {
        "classifier_model_id": null,
        "linked_skill_id": null,
        "content": {
            "html": "",
            "content_id": "content"
        },
        "interaction": {
            "id": null,
            "customization_args": {},
            "answer_groups": [],
            "default_outcome": {
                "dest": "Introduction",
                "feedback": {
                    "content_id": "default_outcome",
                    "html": ""
                },
                "labelled_as_correct": false,
                "param_changes": [],
                "refresher_exploration_id": null,
                "missing_prerequisite_skill_id": null
            },
            "confirmed_unclassified_answers": [],
            "hints": [],
            "solution": null
        },
        "next_content_id_index": 0,
        "param_changes": [],
        "recorded_voiceovers": {
            "voiceovers_mapping": {
                "content": {},
                "default_outcome": {}
            }
        },
        "solicit_answer_details": false,
        "card_is_checkpoint": false,
        "written_translations": {
            "translations_mapping": {
                "content": {},
                "default_outcome": {}
            }
        }
    },
    // Data required for Google Analytics.
    "ANALYTICS_ID": "",
    "SITE_NAME_FOR_ANALYTICS": "",
    // Data required for Firebase authentication.
    //
    // NOTE TO RELEASE COORDINATORS: Please change these to the production values,
    // and change useEmulator to be false, before deploying to production.
    "FIREBASE_CONFIG_API_KEY": "fake-api-key",
    "FIREBASE_CONFIG_AUTH_DOMAIN": "",
    "FIREBASE_CONFIG_PROJECT_ID": "dev-project-id",
    "FIREBASE_CONFIG_STORAGE_BUCKET": "",
    "FIREBASE_CONFIG_MESSAGING_SENDER_ID": "",
    "FIREBASE_CONFIG_APP_ID": "",
    "FIREBASE_CONFIG_GOOGLE_CLIENT_ID": "",
    // The name of the cookie Oppia will place the session cookie into. The name
    // is arbitrary. If it is changed later on, then the cookie will live on in
    // the users' browsers as garbage (although it'd expire eventually).
    "FIREBASE_AUTH_SESSION_COOKIE_NAME": "session",
    "ALLOW_YAML_FILE_UPLOAD": false,
    // A regular expression for tags.
    "TAG_REGEX": "^[a-z ]+$",
    // A regular expression for allowed character in tags for blog post.
    "BLOG_POST_TAG_REGEX": "^[a-zA-Z0-9 ]+$",
    // A regular expression for allowed characters in URL fragment fields.
    "VALID_URL_FRAGMENT_REGEX": "^[a-z]+(-[a-z]+)*$",
    // A regular expression for allowed characters for thumbnail filename.
    "VALID_THUMBNAIL_FILENAME_REGEX": "^[^.](?!.*/)(?!.*\\.\\.).*.svg$",
    // A regular expression for allowed entity id's.
    "ENTITY_ID_REGEX": "^[a-zA-Z0-9-_]{1,12}$",
    // A regular expression for allowed characters in Title field for Blog Post.
    "VALID_BLOG_POST_TITLE_REGEX": "^[a-zA-Z0-9][a-zA-Z0-9 ]+(-[a-zA-Z0-9]+)*$",
    // A regular expression for allowed characters in URL fragment for Blog Post.
    "VALID_URL_BLOG_FRAGMENT_REGEX": "^[a-z0-9]+(-[a-z0-9]+)*$",
    // A regular expression for allowed characters in URL fragment for Blog Post.
    // eslint-disable-next-line max-len
    "VALID_THREAD_ID_REGEX": "(exploration|collection|skill).[a-zA-Z0-9]+.[a-zA-Z0-9=]+",
    // A regular expression for valid skill misconception id.
    "VALID_SKILL_MISCONCEPTION_ID_REGEX": "[A-Za-z0-9]{12}-[0-9]+",
    // Invalid names for parameters used in expressions.
    "INVALID_PARAMETER_NAMES": [
        "answer", "choices", "abs", "all", "and", "any", "else",
        "floor", "if", "log", "or", "pow", "round", "then"
    ],
    // Greek letters allowed in math interactions.
    "GREEK_LETTER_NAMES_TO_SYMBOLS": {
        "alpha": "α",
        "beta": "β",
        "gamma": "γ",
        "delta": "δ",
        "epsilon": "ε",
        "zeta": "ζ",
        "eta": "η",
        "theta": "θ",
        "iota": "ι",
        "kappa": "κ",
        "lambda": "λ",
        "mu": "μ",
        "nu": "ν",
        "xi": "ξ",
        "pi": "π",
        "rho": "ρ",
        "sigma": "σ",
        "tau": "τ",
        "upsilon": "υ",
        "phi": "φ",
        "chi": "χ",
        "psi": "ψ",
        "omega": "ω",
        "Gamma": "Γ",
        "Delta": "Δ",
        "Theta": "Θ",
        "Lambda": "Λ",
        "Xi": "Ξ",
        "Pi": "Π",
        "Sigma": "Σ",
        "Phi": "Φ",
        "Psi": "Ψ",
        "Omega": "Ω"
    },
    // The greek letters in the list should be in sync with the
    // GREEK_LETTER_NAMES_TO_SYMBOLS object's keys.
    "VALID_ALGEBRAIC_IDENTIFIERS": [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D",
        "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
        "T", "U", "V", "W", "X", "Y", "Z",
        "alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta",
        "iota", "kappa", "lambda", "mu", "nu", "xi", "pi", "rho", "sigma", "tau",
        "upsilon", "phi", "chi", "psi", "omega", "Gamma", "Delta", "Theta",
        "Lambda", "Xi", "Pi", "Sigma", "Phi", "Psi", "Omega"
    ],
    // Allowed letters in the OSK.
    "VALID_CUSTOM_OSK_LETTERS": [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D",
        "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
        "T", "U", "V", "W", "X", "Y", "Z",
        "α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "π",
        "ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω", "Γ", "Δ", "Θ", "Λ", "Ξ", "Π", "Σ",
        "Φ", "Ψ", "Ω"
    ],
    // Number of custom letters allowed in the on-screen keyboard for math
    // interactions.
    "MAX_CUSTOM_LETTERS_FOR_OSK": 10,
    // Functions allowed in math interactions.
    "MATH_FUNCTION_NAMES": [
        "log", "ln", "sqrt", "abs", "sin", "cos", "tan", "sec", "csc", "cot",
        "arcsin", "arccos", "arctan", "sinh", "cosh", "tanh"
    ],
    "OSK_MAIN_TAB": "mainTab",
    "OSK_FUNCTIONS_TAB": "functionsTab",
    "OSK_LETTERS_TAB": "lettersTab",
    "CUSTOM_LETTERS_LATIN_TAB": "latinTab",
    "CUSTOM_LETTERS_GREEK_TAB": "greekTab",
    // Name to human readable form mapping of the position of terms object.
    "POSITION_OF_TERMS_MAPPING": [{
            "name": "lhs",
            "humanReadableName": "on Left Hand Side"
        }, {
            "name": "rhs",
            "humanReadableName": "on Right Hand Side"
        }, {
            "name": "both",
            "humanReadableName": "on both sides"
        }, {
            "name": "irrelevant",
            "humanReadableName": "with reordering allowed around ="
        }],
    // Placeholder texts for the math interactions.
    "MATH_INTERACTION_PLACEHOLDERS": {
        "AlgebraicExpressionInput": "I18N_INTERACTIONS_ALGEBRAIC_EXPR_INSTRUCTION",
        "MathEquationInput": "I18N_INTERACTIONS_MATH_EQ_INSTRUCTION",
        // The following is user editable and hence, is not translated.
        "NumericExpressionInput": "Type an expression here, using only numbers."
    },
    // Unfinished features.
    "SHOW_TRAINABLE_UNRESOLVED_ANSWERS": false,
    // eslint-disable-next-line max-len
    "DEFAULT_TWITTER_SHARE_MESSAGE_EDITOR": "Check out this interactive lesson on Oppia - a free platform for teaching and learning!",
    "OPPORTUNITY_TYPE_SKILL": "skill",
    "OPPORTUNITY_TYPE_TRANSLATION": "translation",
    "OPPORTUNITY_TYPE_VOICEOVER": "voiceover",
    // The bucket name is set to app_default_bucket which is used to store files
    // in GCS when local development server is running. This should be changed
    // in prod appropriately.
    "GCS_RESOURCE_BUCKET_NAME": "app_default_bucket",
    "ENABLE_EXP_FEEDBACK_FOR_LOGGED_OUT_USERS": true,
    // Link to open when the Oppia avatar is clicked on any page.
    "OPPIA_AVATAR_LINK_URL": null,
    // Maximum allowed length of a username.
    "MAX_USERNAME_LENGTH": 30,
    // Maximum allowed length of a state name.
    "MAX_STATE_NAME_LENGTH": 50,
    "PLATFORM_PARAMETER_ALLOWED_BROWSER_TYPES": [
        "Chrome", "Edge", "Safari", "Firefox", "Others"
    ],
    "PLATFORM_PARAMETER_ALLOWED_PLATFORM_TYPES": ["Web", "Android", "Backend"],
    // The ordering of in ALLOWED_APP_VERSION_FLAVORS implies the ordering
    // of corresponding flavors, which is used in app_version_flavor filter for
    // order comparison, with ordering: 'test' < 'alpha' < 'beta' < 'release'.
    "PLATFORM_PARAMETER_ALLOWED_APP_VERSION_FLAVORS": [
        "test", "alpha", "beta", "release"
    ],
    "PLATFORM_PARAMETER_APP_VERSION_WITHOUT_HASH_REGEXP": "^(\\d+(?:\\.\\d+){2})$",
    "PLATFORM_PARAMETER_APP_VERSION_WITH_HASH_REGEXP": "^(\\d+(?:\\.\\d+){2})(?:-[a-z0-9]+(?:-(.+))?)?$",
    // Maximum allowed commit message length. 375 characters because indexed
    // fields must be at most 1500 bytes, and UTF-8 encoded characters can be
    // up to 4 bytes long.
    "MAX_COMMIT_MESSAGE_LENGTH": 375,
    "MAX_REVIEW_MESSAGE_LENGTH": 10000,
    "EMAIL_DASHBOARD_PREDICATE_DEFINITION": [
        {
            "backend_id": "user_inactivity",
            "backend_attr": "inactive_in_last_n_days",
            "description": "Inactive in last n days",
            "schema": {
                "type": "int",
                "validators": [{
                        "id": "is_at_least",
                        "min_value": 0
                    }]
            },
            "default_value": null
        },
        {
            "backend_id": "user_login_activity",
            "backend_attr": "has_not_logged_in_for_n_days",
            "description": "Has not logged in for n days",
            "schema": {
                "type": "int",
                "validators": [{
                        "id": "is_at_least",
                        "min_value": 0
                    }]
            },
            "default_value": null
        },
        {
            "backend_id": "minimum_exp_created",
            "backend_attr": "created_at_least_n_exps",
            "description": "Has created at least n explorations",
            "schema": {
                "type": "int",
                "validators": [{
                        "id": "is_at_least",
                        "min_value": 0
                    }]
            },
            "default_value": null
        },
        {
            "backend_id": "maximum_exp_created",
            "backend_attr": "created_fewer_than_n_exps",
            "description": "Has created fewer than n explorations",
            "schema": {
                "type": "int",
                "validators": [{
                        "id": "is_at_least",
                        "min_value": 0
                    }]
            },
            "default_value": null
        },
        {
            "backend_id": "minimum_exp_edited",
            "backend_attr": "edited_at_least_n_exps",
            "description": "Has edited at least n explorations",
            "schema": {
                "type": "int",
                "validators": [{
                        "id": "is_at_least",
                        "min_value": 0
                    }]
            },
            "default_value": null
        },
        {
            "backend_id": "maximum_exp_edited",
            "backend_attr": "edited_fewer_than_n_exps",
            "description": "Has edited fewer than n explorations",
            "schema": {
                "type": "int",
                "validators": [{
                        "id": "is_at_least",
                        "min_value": 0
                    }]
            },
            "default_value": null
        },
        {
            "backend_id": "created_collection",
            "backend_attr": "created_collection",
            "description": "Has created collection",
            "schema": {
                "type": "bool",
                "validators": [{
                        "id": "is_nonempty"
                    }]
            },
            "default_value": false
        }
    ],
    // When the site cookie policy was last updated in UNIX time milliseconds.
    "COOKIE_POLICY_LAST_UPDATED_MSECS": 1624909164000,
    // Pages registered with angular router.
    "PAGES_REGISTERED_WITH_FRONTEND": {
        "ABOUT": {
            "ROUTE": "about",
            "TITLE": "I18N_ABOUT_PAGE_TITLE",
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it."
                },
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "og:description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it."
                }
            ]
        },
        "ABOUT_FOUNDATION": {
            "ROUTE": "about-foundation",
            "TITLE": "About the Oppia Foundation | Oppia",
            "META": []
        },
        "CLASSROOM": {
            "ROUTE": "learn/:classroom_url_fragment",
            "TITLE": "Oppia",
            // Some routes contain url fragments, as syntax for url fragments are
            // different for angular router and backend. They have to be registered
            // manually in the backend. Please use angular router syntax here.
            "MANUALLY_REGISTERED_WITH_BACKEND": true,
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it"
                },
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "og:description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it"
                }
            ]
        },
        "CONTACT": {
            "ROUTE": "contact",
            "TITLE": "I18N_CONTACT_PAGE_TITLE",
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "Contact the Oppia team, submit feedback, and learn how to get involved with the Oppia project."
                },
                {
                    "PROPERTY_TYPE": "property",
                    "PROPERTY_VALUE": "og:description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "Contact the Oppia team, submit feedback, and learn how to get involved with the Oppia project."
                }
            ]
        },
        "DONATE": {
            "ROUTE": "donate",
            "TITLE": "Donate | Oppia",
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "Donate to The Oppia Foundation to enable more students to receive the quality education they deserve."
                },
                {
                    "PROPERTY_TYPE": "property",
                    "PROPERTY_VALUE": "og:description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "Donate to The Oppia Foundation to enable more students to receive the quality education they deserve."
                }
            ]
        },
        "GET_STARTED": {
            "ROUTE": "get-started",
            "TITLE": "I18N_GET_STARTED_PAGE_TITLE",
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    "CONTENT": "Learn how to get started using Oppia."
                },
                {
                    "PROPERTY_TYPE": "property",
                    "PROPERTY_VALUE": "og:description",
                    "CONTENT": "Learn how to get started using Oppia."
                }
            ]
        },
        "LICENSE": {
            "ROUTE": "license",
            "TITLE": "I18N_LICENSE_PAGE_TITLE",
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    "CONTENT": "License terms that Oppia is attributed under."
                },
                {
                    "PROPERTY_TYPE": "property",
                    "PROPERTY_VALUE": "og:description",
                    "CONTENT": "License terms that Oppia is attributed under."
                }
            ]
        },
        "LOGIN": {
            "ROUTE": "login",
            "TITLE": "I18N_LOGIN_PAGE_TITLE",
            "META": []
        },
        "LOGOUT": {
            "ROUTE": "logout",
            "TITLE": "I18N_LOGOUT_PAGE_BROWSER_TAB_TITLE",
            "META": []
        },
        "PARTNERSHIPS": {
            "ROUTE": "partnerships",
            "TITLE": "Partnerships | Oppia",
            "META": []
        },
        "PLAYBOOK": {
            "ROUTE": "creator-guidelines",
            "TITLE": "I18N_PLAYBOOK_PAGE_TITLE",
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "The Oppia library is full of user-created lessons called 'explorations'. Read about how to participate in the community and begin creating explorations."
                },
                {
                    "PROPERTY_TYPE": "property",
                    "PROPERTY_VALUE": "og:description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "The Oppia library is full of user-created lessons called 'explorations'. Read about how to participate in the community and begin creating explorations."
                }
            ]
        },
        "PRIVACY": {
            "ROUTE": "privacy-policy",
            "TITLE": "I18N_PRIVACY_POLICY_PAGE_TITLE",
            "META": []
        },
        "SIGNUP": {
            "ROUTE": "signup",
            "TITLE": "I18N_SIGNUP_PAGE_TITLE",
            "MANUALLY_REGISTERED_WITH_BACKEND": true,
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    "CONTENT": "Sign up for Oppia and begin exploring a new subject."
                },
                {
                    "PROPERTY_TYPE": "property",
                    "PROPERTY_VALUE": "og:description",
                    "CONTENT": "Sign up for Oppia and begin exploring a new subject."
                }
            ]
        },
        "TEACH": {
            "ROUTE": "teach",
            "TITLE": "I18N_TEACH_PAGE_TITLE",
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "The Oppia library is full of user-created lessons called 'explorations'. Read about how to participate in the community and begin creating explorations."
                },
                {
                    "PROPERTY_TYPE": "property",
                    "PROPERTY_VALUE": "og:description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "The Oppia library is full of user-created lessons called 'explorations'. Read about how to participate in the community and begin creating explorations."
                }
            ]
        },
        "TERMS": {
            "ROUTE": "terms",
            "TITLE": "I18N_TERMS_PAGE_TITLE",
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "Oppia is a 501(c)(3) registered non-profit open-source e-learning platform. Learn about our terms and conditions for creating and distributing learning material."
                },
                {
                    "PROPERTY_TYPE": "property",
                    "PROPERTY_VALUE": "og:description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "Oppia is a 501(c)(3) registered non-profit open-source e-learning platform. Learn about our terms and conditions for creating and distributing learning material."
                }
            ]
        },
        "THANKS": {
            "ROUTE": "thanks",
            "TITLE": "I18N_THANKS_PAGE_TITLE",
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    "CONTENT": "Thank you for donating to The Oppia Foundation!"
                },
                {
                    "PROPERTY_TYPE": "property",
                    "PROPERTY_VALUE": "og:description",
                    "CONTENT": "Thank you for donating to The Oppia Foundation!"
                }
            ]
        },
        "DELETE_ACCOUNT": {
            "ROUTE": "delete-account",
            "TITLE": "I18N_DELETE_ACCOUNT_PAGE_TITLE",
            "META": []
        },
        "LIBRARY_INDEX": {
            "ROUTE": "community-library",
            "TITLE": "Oppia",
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "Looking to learn something new? Learn any subject of your choice created by professors, teachers and Oppia users! Free lessons are always available for any topic and level you want."
                },
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "og:description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "Looking to learn something new? Learn any subject of your choice created by professors, teachers and Oppia users! Free lessons are always available for any topic and level you want."
                }
            ]
        },
        "LIBRARY_RECENTLY_PUBLISHED": {
            "ROUTE": "community-library/recently-published",
            "TITLE": "Oppia",
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "Looking to learn something new? Learn any subject of your choice created by professors, teachers and Oppia users! Free lessons are always available for any topic and level you want."
                },
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "og:description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "Looking to learn something new? Learn any subject of your choice created by professors, teachers and Oppia users! Free lessons are always available for any topic and level you want."
                }
            ]
        },
        "LIBRARY_SEARCH": {
            "ROUTE": "search/find",
            "TITLE": "Oppia",
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "Looking to learn something new? Learn any subject of your choice created by professors, teachers and Oppia users! Free lessons are always available for any topic and level you want."
                },
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "og:description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "Looking to learn something new? Learn any subject of your choice created by professors, teachers and Oppia users! Free lessons are always available for any topic and level you want."
                }
            ]
        },
        "LIBRARY_TOP_RATED": {
            "ROUTE": "community-library/top-rated",
            "TITLE": "Oppia",
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "Looking to learn something new? Learn any subject of your choice created by professors, teachers and Oppia users! Free lessons are always available for any topic and level you want."
                },
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "og:description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "Looking to learn something new? Learn any subject of your choice created by professors, teachers and Oppia users! Free lessons are always available for any topic and level you want."
                }
            ]
        },
        "PENDING_ACCOUNT_DELETION": {
            "ROUTE": "pending-account-deletion",
            "TITLE": "I18N_PENDING_ACCOUNT_DELETION_PAGE_TITLE",
            "META": []
        },
        "PREFERENCES": {
            "ROUTE": "preferences",
            "TITLE": "I18N_PREFERENCES_PAGE_BROWSER_TAB_TITLE",
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    "CONTENT": "Change your Oppia profile settings and preferences"
                },
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "og:description",
                    "CONTENT": "Change your Oppia profile settings and preferences"
                }
            ]
        },
        "PROFILE": {
            "ROUTE": "profile/:username_fragment",
            "TITLE": "I18N_PROFILE_PAGE_TITLE",
            // Some routes contain url fragments, as syntax for url fragments are
            // different for angular router and backend. They have to be registered
            // manually in the backend. Please use angular router syntax here.
            "MANUALLY_REGISTERED_WITH_BACKEND": true,
            "META": []
        },
        "RELEASE_COORDINATOR_PAGE": {
            "ROUTE": "release-coordinator",
            "TITLE": "I18N_RELEASE_COORDINATOR_PAGE_TITLE",
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it."
                },
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "og:description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it."
                }
            ]
        },
        "SPLASH": {
            "ROUTE": "",
            "TITLE": "I18N_SPLASH_PAGE_TITLE",
            "META": [
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it."
                },
                {
                    "PROPERTY_TYPE": "itemprop",
                    "PROPERTY_VALUE": "og:description",
                    // eslint-disable-next-line max-len
                    "CONTENT": "With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it."
                }
            ]
        },
        "STORY_VIEWER": {
            // eslint-disable-next-line max-len
            "ROUTE": "learn/:classroom_url_fragment/:topic_url_fragment/story/:story_url_fragment",
            "TITLE": "Oppia",
            // Some routes contain url fragments, as syntax for url fragments are
            // different for angular router and backend. They have to be registered
            // manually in the backend. Please use angular router syntax here.
            "MANUALLY_REGISTERED_WITH_BACKEND": true,
            "META": []
        },
        "VOLUNTEER": {
            "ROUTE": "volunteer",
            "TITLE": "Volunteer | Oppia",
            "META": []
        }
    },
    "STEWARDS_LANDING_PAGE": {
        "ROUTES": ["parents", "partners", "nonprofits", "teachers", "volunteers"],
        "TITLE": "Getting Started with Oppia",
        "META": []
    },
    // A dict representing available landing pages, having subject as a key
    // and list of topics as the value.
    // Note: This dict needs to be keep in sync with frontend
    // TOPIC_LANDING_PAGE_DATA oppia constant defined in
    // core/templates/pages/landing-pages/topic-landing-page/
    // topic-landing-page.constants.ts file.
    "AVAILABLE_LANDING_PAGES": {
        "math": ["fractions", "negative-numbers", "ratios"]
    },
    "SCHEMA_FOR_TOPIC_URL_FRAGMENTS": {
        "schema": {
            "type": "basestring",
            "validators": [{
                    "id": "is_regex_matched",
                    "regex_pattern": "^[a-z]+(-[a-z]+)*$"
                }, {
                    "id": "has_length_at_most",
                    "max_value": 20
                }]
        }
    },
    "SCHEMA_FOR_CLASSROOM_URL_FRAGMENTS": {
        "schema": {
            "type": "basestring",
            "validators": [{
                    "id": "is_regex_matched",
                    "regex_pattern": "^[a-z]+(-[a-z]+)*$"
                }, {
                    "id": "has_length_at_most",
                    "max_value": 20
                }]
        }
    },
    "SCHEMA_FOR_STORY_URL_FRAGMENTS": {
        "schema": {
            "type": "basestring",
            "validators": [{
                    "id": "is_regex_matched",
                    "regex_pattern": "^[a-z]+(-[a-z]+)*$"
                }, {
                    "id": "has_length_at_most",
                    "max_value": 30
                }]
        }
    },
    "DEV_MODE": true,
    "EMULATOR_MODE": true,
    "ASSET_TYPE_AUDIO": "audio",
    "ASSET_TYPE_IMAGE": "image",
    "ASSET_TYPE_THUMBNAIL": "thumbnail"
});


/***/ }),

/***/ "h2fZ":
/*!**************************************************!*\
  !*** ./core/templates/pages/oppia-root/index.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var pages_common_imports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pages/common-imports */ "V9QP");
/* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app.constants */ "DhAQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.module */ "tFXE");
/* harmony import */ var services_contextual_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! services/contextual/logger.service */ "3eoD");
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
 * @fileoverview Directive scripts for the oppia pages.
 */





if (!app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].DEV_MODE) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["enableProdMode"])();
}
const loggerService = new services_contextual_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]();
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch((err) => loggerService.error(err));
// This prevents angular pages to cause side effects to hybrid pages.
// TODO(#13080): Remove window.name statement from import.ts files
// after migration is complete.
window.name = '';


/***/ }),

/***/ "tFXE":
/*!*******************************************************!*\
  !*** ./core/templates/pages/oppia-root/app.module.ts ***!
  \*******************************************************/
/*! exports provided: toastrConfig, MyHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toastrConfig", function() { return toastrConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routing/app.routing.module */ "5kqk");
/* harmony import */ var _oppia_root_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oppia-root.component */ "DcCY");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie */ "4pnn");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_9__);
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
 * @fileoverview Module for the about page.
 */


// Modules.



// Components.








class FirebaseErrorFilterHandler extends _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"] {
    handleError(error) {
        if (FirebaseErrorFilterHandler.EXPECTED_ERROR_CODES.includes(error.code)) {
            return;
        }
        super.handleError(error);
    }
}
// AngularFire throws duplicate errors because it uses setTimeout() to manage
// promises internally. Errors thrown from those setTimeout() calls are not
// accessible to our code. Because of this, even though LoginPageComponent
// catches errors thrown by AngularFire, their duplicates are treated as
// "Unhandled Promise Rejections" and result in top-level error messages.
//
// To prevent these errors from interfering with end-to-end tests and from
// polluting the server, we ignore the following list of EXPECTED error codes.
FirebaseErrorFilterHandler.EXPECTED_ERROR_CODES = [
    // Users pending deletion have their Firebase accounts disabled. When they
    // try to sign in anyway, we redirect them to the /pending-account-deletion
    // page.
    'auth/user-disabled',
    // In emulator mode we use signInWithEmailAndPassword() and, if that throws
    // an 'auth/user-not-found' error, createUserWithEmailAndPassword() for
    // convenience. In production mode we use signInWithRedirect(), which
    // doesn't throw 'auth/user-not-found' because it handles both signing in
    // and creating users in the same way.
    'auth/user-not-found',
];
// Config for ToastrModule (helps in flashing messages and alerts).
const toastrConfig = {
    allowHtml: false,
    iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
    },
    positionClass: 'toast-bottom-right',
    messageClass: 'toast-message protractor-test-toast-message',
    progressBar: false,
    tapToDismiss: true,
    titleClass: 'toast-title'
};
class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            swipe: { direction: hammerjs__WEBPACK_IMPORTED_MODULE_9__["DIRECTION_HORIZONTAL"] },
            pinch: { enable: false },
            rotate: { enable: false },
        };
        this.options = {
            cssProps: {
                userSelect: true
            }
        };
    }
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_oppia_root_component__WEBPACK_IMPORTED_MODULE_5__["OppiaRootComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"],
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
            useClass: FirebaseErrorFilterHandler,
        },
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HAMMER_GESTURE_CONFIG"],
            useClass: MyHammerConfig
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
            _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(toastrConfig)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_oppia_root_component__WEBPACK_IMPORTED_MODULE_5__["OppiaRootComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
        _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"]] }); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map