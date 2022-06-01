(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-error-pages-error-404-error-404-page-module"],{

/***/ "LBQc":
/*!*************************************************************************************!*\
  !*** ./core/templates/pages/error-pages/error-404/error-404-page-root.component.ts ***!
  \*************************************************************************************/
/*! exports provided: Error404PageRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404PageRootComponent", function() { return Error404PageRootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Error404PageRootComponent {
    constructor() { }
    ngOnInit() { }
}
Error404PageRootComponent.ɵfac = function Error404PageRootComponent_Factory(t) { return new (t || Error404PageRootComponent)(); };
Error404PageRootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error404PageRootComponent, selectors: [["oppia-error-page-root"]], decls: 3, vars: 0, template: function Error404PageRootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "hello Shivam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error 404 Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "Vc1j":
/*!*************************************************************************************!*\
  !*** ./core/templates/pages/error-pages/error-404/error-404-page-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: Error404PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404PageRoutingModule", function() { return Error404PageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _error_404_page_root_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-404-page-root.component */ "LBQc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _error_404_page_root_component__WEBPACK_IMPORTED_MODULE_1__["Error404PageRootComponent"]
    }
];
class Error404PageRoutingModule {
}
Error404PageRoutingModule.ɵfac = function Error404PageRoutingModule_Factory(t) { return new (t || Error404PageRoutingModule)(); };
Error404PageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: Error404PageRoutingModule });
Error404PageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Error404PageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Yn5y":
/*!********************************************************************************!*\
  !*** ./core/templates/pages/error-pages/error-404/error-404-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: Error404PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404PageComponent", function() { return Error404PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Error404PageComponent {
    constructor() { }
}
Error404PageComponent.ɵfac = function Error404PageComponent_Factory(t) { return new (t || Error404PageComponent)(); };
Error404PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error404PageComponent, selectors: [["oppia-error-404-page"]], decls: 15, vars: 0, consts: [[1, "oppia-content", "oppia-error-page-main-content"], [1, "oppia-wide-panel", "oppia-error-wide-container"], [1, "oppia-wide-panel-content", "protractor-test-error-container"], [1, "oppia-error-h1"], [1, "oppia-error-h2"]], template: function Error404PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " - Page Not Found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\nsss ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "sss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".oppia-error-h1[_ngcontent-%COMP%] {\n    font-size: 1em;\n    margin: 1.33em 0;\n  }\n  .oppia-error-h2[_ngcontent-%COMP%] {\n    font-size: 1.17em;\n    font-weight: 700;\n  }\n  @media screen and (min-width: 768px) {\n    .oppia-footer[_ngcontent-%COMP%] {\n      position: relative;\n    }\n  }"] });


/***/ }),

/***/ "wRSX":
/*!*****************************************************************************!*\
  !*** ./core/templates/pages/error-pages/error-404/error-404-page.module.ts ***!
  \*****************************************************************************/
/*! exports provided: Error404PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404PageModule", function() { return Error404PageModule; });
/* harmony import */ var _error_404_page_root_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-404-page-root.component */ "LBQc");
/* harmony import */ var _error_404_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-404-page-routing.module */ "Vc1j");
/* harmony import */ var _error_404_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-404-page.component */ "Yn5y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class Error404PageModule {
}
Error404PageModule.ɵfac = function Error404PageModule_Factory(t) { return new (t || Error404PageModule)(); };
Error404PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: Error404PageModule });
Error404PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _error_404_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["Error404PageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Error404PageModule, { declarations: [_error_404_page_component__WEBPACK_IMPORTED_MODULE_2__["Error404PageComponent"],
        _error_404_page_root_component__WEBPACK_IMPORTED_MODULE_0__["Error404PageRootComponent"]], imports: [_error_404_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["Error404PageRoutingModule"]], exports: [_error_404_page_component__WEBPACK_IMPORTED_MODULE_2__["Error404PageComponent"],
        _error_404_page_root_component__WEBPACK_IMPORTED_MODULE_0__["Error404PageRootComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-error-pages-error-404-error-404-page-module-es2015.js.map