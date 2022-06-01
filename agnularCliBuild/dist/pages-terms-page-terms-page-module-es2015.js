(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-terms-page-terms-page-module"],{

/***/ "+Ayk":
/*!**********************************************************************!*\
  !*** ./core/templates/pages/terms-page/terms-page-root.component.ts ***!
  \**********************************************************************/
/*! exports provided: TermsPageRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageRootComponent", function() { return TermsPageRootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var pages_terms_page_terms_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pages/terms-page/terms-page.component */ "adAV");


class TermsPageRootComponent {
    constructor() { }
    ngOnInit() {
    }
}
TermsPageRootComponent.ɵfac = function TermsPageRootComponent_Factory(t) { return new (t || TermsPageRootComponent)(); };
TermsPageRootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsPageRootComponent, selectors: [["oppia-terms-page-root"]], decls: 9, vars: 0, consts: [[1, "nav", "navbar-nav", "oppia-div"], [1, "oppia-div-separator"]], template: function TermsPageRootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Terms of Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "terms-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [pages_terms_page_terms_page_component__WEBPACK_IMPORTED_MODULE_1__["TermsPageComponent"]], encapsulation: 2 });


/***/ }),

/***/ "adAV":
/*!*****************************************************************!*\
  !*** ./core/templates/pages/terms-page/terms-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: TermsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageComponent", function() { return TermsPageComponent; });
/* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app.constants */ "DhAQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class TermsPageComponent {
    constructor() {
        this.PAGES_REGISTERED_WITH_FRONTEND = (app_constants__WEBPACK_IMPORTED_MODULE_0__["AppConstants"].PAGES_REGISTERED_WITH_FRONTEND);
    }
    scrollTo(el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}
TermsPageComponent.ɵfac = function TermsPageComponent_Factory(t) { return new (t || TermsPageComponent)(); };
TermsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TermsPageComponent, selectors: [["terms-page"]], decls: 154, vars: 1, consts: [[1, "oppia-page-cards-container", "protractor-test-terms-page"], [1, "oppia-page-card", "oppia-long-text"], [1, "oppia-privacy-terms-anchor"], ["ourServices", ""], ["privacyPolicy", ""], ["href", "/privacy-policy", 3, "routerLink"], ["hostedCreatedContent", ""], ["href", "https://creativecommons.org/licenses/by-sa/4.0/legalcode"], ["refrainingFromCertainActivities", ""], [1, "oppia-h2-text"], ["termination", ""], ["disclaimerOfWarranty", ""], ["limitationOfLiability", ""], ["disputesAndJurisdiction", ""], ["modificationsToTheseTerms", ""], ["href", "https://groups.google.com/forum/#!forum/oppia-announce"], [1, "nav", "oppia-terms-right-menu", "d-none", "d-md-block"], [3, "click"]], template: function TermsPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Hello! Thanks for your interest in Oppia Foundation Inc., a nonprofit that operates the website located at https://www.oppia.org (the \"Website\"). The following Terms of Use (also referred to as the \"Terms\") are a contract between you and Oppia (also referred to as \"we\" or \"us\" in these Terms). Visitors or registered users to this website are referred to as \"Users\" or an individual \"User\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " PLEASE READ THE FOLLOWING TERMS OF USE CAREFULLY. BY REGISTERING FOR OR ACCESSING THE WEBSITE, YOU ACKNOWLEDGE, AGREE, AND ACCEPT TO BE BOUND BY THE TERMS. IF YOU DO NOT AGREE TO THE TERMS, OR IF YOU ARE UNDER THE AGE OF 13 YEARS OLD AND DO NOT HAVE THE APPROVAL OF A LEGAL PARENT OR GUARDIAN, YOU MUST NOT REGISTER FOR OR ACCESS THIS WEBSITE. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "a", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Oppia is a learning platform that allows Users to participate in an interactive learning experience by uploading and editing a wide variety of content, such as Explorations, Collections, and Derivatives (collectively, \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Educational Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\"). Users on our website can go through Explorations (or Collections of Explorations) to learn about topics that they're interested in, create their own Explorations, create Derivatives of existing Explorations, or provide edits to any of the Educational Content. To participate in our community, Users can register and create personalized Profiles that include information about themselves and the Educational Content to which they've contributed. We do not charge Users for any of our services. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "a", 2, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " For more information about how we use your personal information and what types of information we collect and why, please refer to our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Privacy Policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "a", 2, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Hosted Created Content and Intellectual Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " All our Educational Content is meant to be shared, refined, and \u2014 obviously \u2014 explored! You can further this goal by uploading or creating your own Educational Content on the Website or by editing or contributing to an Exploration that is already published on the Website. If you upload or submit any Educational Content or any other content or materials to the Website or your User Profile (collectively, \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Submissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\"), we will need certain rights from you to be able to make them available for all. Accordingly, you hereby grant to us a worldwide, non-exclusive, transferable, sub-licensable (through multiple tiers), royalty-free, perpetual, irrevocable right and license, without compensation to you, to use, reproduce, distribute, adapt (including to edit, modify, translate, and reformat, and to allow third parties to do the same), create derivative works of, transmit, publicly display and publicly perform such Submissions, in any media now known or hereafter developed. Please note that, because this license is non-exclusive, you retain ownership of your Submissions and may license them to others. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " All Educational Content that is licensed to us pursuant to these Terms is then immediately licensed by us under the Creative Commons CC-BY-SA 4.0 license, which means that all of the content on Oppia is irrevocably licensed to the general public and can be freely used, reused, and shared. You can read more about the CC-BY-SA 4.0 license ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " You also represent and warrant that (1) you are the creator and owner of all Educational Content, or that you have the necessary licenses, rights, consents, and permissions to use the Educational Content in such a way that allows us to then license it to the general public under the CC-BY-SA 4.0 license; (2) your Educational Content does not infringe on any third-party right (including any intellectual property rights, like copyrights); and (3) your Educational Content does not contain any viruses, adware, spyware, worms, \"Trojan horses\", or other malicious code that could potentially harm our technical infrastructure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " If you believe in good faith that materials found on or accessible through the Site infringe your copyright, you may send us a written notice requesting that the material be removed or access to it blocked. In order for us to act expeditiously in responding to your notice, please send all such notices to admin@oppia.org. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "a", 2, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Refraining from Certain Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Oppia is an extremely collaborative environment that allows users to create content and learn from each other. Please remember that you are legally responsible for all your Submissions to the Website. Therefore, we encourage our users to be courteous towards each other, and follow the Golden Rule: \"Treat others the way that you wish to be treated.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " To protect this collaborative environment, we forbid certain sets of behavior on this site, specifically: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Harassing and abusing others:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " engaging in harassing, threatening, stalking, spamming, vandalism. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Infringing on the privacy of others:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " this can include soliciting Personal and Private Identifiable Information of others, infringing upon the privacy of others (whether it be under American laws or laws under the User's jurisdiction), or collecting Personal Identifiable Information from minors (i.e. those under 18). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Engaging in fraud, or impersonating someone else, or spreading libel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Infringing copyright, trademark, patents or other proprietary information under law.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Obscene, racist, homophobic, or other hateful content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Engaging in disruptive activities:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " examples include distributing viruses, adware, spyware, worms, \"Trojan horses\", or other malicious code on our platform that could potentially harm our technical infrastructure, placing an undue burden on our servers (e.g. DDoS attack), automated uses (\"macros\", \"bots\", etc.) of the site that hasn't been approved by the Oppia admins, or disrupting Oppia's services in any way. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "a", 2, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Termination");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " If you violate any of the Terms of Use above, break any laws, engage in behavior that disrupts the Oppia community, or otherwise engage in any prohibited behavior, then we may, in our sole discretion, terminate your account. You agree that if your account is so terminated, Oppia will not be liable to you or any third party for any such termination. Any Educational Content uploaded or provided before termination can be removed, or used in a manner consistent with the CC-BY_SA 4.0 License, at Oppia's sole discretion. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " If you are not satisfied in any way with Oppia, these Terms, or any Explorations or any other content on the Website, please contact us and let us know. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "a", 2, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Disclaimer of Warranty");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " Oppia does not make any promises about its services. We make no commitments or warranties about their specific functions, reliability, availability, ability to meet your needs, or the content contained within them. We do not and cannot control the content or quality of sites that may be accessible through outgoing links on the Website, and as such we make no warranties about those sites and disclaim any responsibility for their content. We are vigilant about responding to user complaints, but we do not actively monitor or control Educational Content being posted to Oppia and as such do not endorse or guarantee the completeness or accuracy of any Educational Content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " As such, THE WEBSITE, THE EXPLORATIONS, THE EDUCATIONAL CONTENT, AND ALL DATA, INFORMATION, SOFTWARE, WEBSITE MATERIALS, CONTENT, USER CONTENT, REFERENCE SITES, SERVICES, OR APPLICATIONS MADE AVAILABLE ON OR THROUGH THE WEBSITE, ARE PROVIDED ON AN \"AS IS\", \"AS AVAILABLE\", AND \"WITH ALL FAULTS\" BASIS. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, OPPIA, OPPIA'S SUPPLIERS, AND OPPIA'S CONTRIBUTORS DISCLAIM ANY AND ALL WARRANTIES AND CONDITIONS, WHETHER STATUTORY, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "a", 2, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Limitation of Liability");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " In any event (and notwithstanding anything else in this Agreement), Oppia's liability will be limited to the fullest extent permitted by applicable law. This means: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " UNDER NO CIRCUMSTANCES (INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE) WILL OPPIA, OPPIA'S SUPPLIERS, AND OPPIA'S CONTRIBUTORS BE LIABLE FOR ANY SPECIAL, INDIRECT, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, RELIANCE, OR EXEMPLARY DAMAGES (INCLUDING, BUT NOT LIMITED TO, COURT COSTS, LOST BUSINESS, LOST REVENUES, LOST PROFITS, LOST DATA, OR ANY OTHER PECUNIARY OR NON-PECUNIARY LOSS OR DAMAGE OF ANY NATURE WHATSOEVER) ARISING OUT OF YOUR USE (OR INABILITY TO USE OR ACCESS) THE WEBSITE, OR ANY OTHER INTERACTIONS WITH THE WEBSITE OR OPPIA, EVEN IF OPPIA OR ANY OF OPPIA'S REPRESENTATIVES HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGES. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "a", 2, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Disputes and Jurisdiction");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, " These Terms shall be governed by and construed according to the laws of the State of California. If you seek to file a legal claim against us, then you agree that that claim shall be brought and determined in Santa Clara County, and you agree to submit to the jurisdiction of Santa Clara County. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "a", 2, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Modifications to These Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " Oppia may update, change, modify, add, or remove portions of these Terms from time to time. If we do, we will notify you (and all our registered Users) by sending an email to our Google Group mailing list (which you may sign up for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "). Your continued use of the Website, including logging into your account after such changes, indicates to us that you accept the changes and agree to be bound by them. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, " To the best extent we can, we will update the below Changelog to reflect the changes to these Terms. Please note that the Changelog is for reference only and may not always be accurate and up-to-date. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Changelog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "19 Oct 2020: Clarified use of CC-BY-SA.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "13 Oct 2015: Minor updates for clarity.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "26 Sep 2015: Revised terms added.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsPageComponent_Template_a_click_128_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9); return ctx.scrollTo(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsPageComponent_Template_a_click_131_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18); return ctx.scrollTo(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsPageComponent_Template_a_click_134_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27); return ctx.scrollTo(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Hosted Created Content and IP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsPageComponent_Template_a_click_137_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](45); return ctx.scrollTo(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Refraining from Certain Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsPageComponent_Template_a_click_140_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](75); return ctx.scrollTo(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Termination");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsPageComponent_Template_a_click_143_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](83); return ctx.scrollTo(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Disclaimer of Warranty");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsPageComponent_Template_a_click_146_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](91); return ctx.scrollTo(_r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Limitation of Liability");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsPageComponent_Template_a_click_149_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](99); return ctx.scrollTo(_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Disputes and Jurisdiction");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsPageComponent_Template_a_click_152_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](105); return ctx.scrollTo(_r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Modifications to these Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/" + ctx.PAGES_REGISTERED_WITH_FRONTEND.PRIVACY.ROUTE);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".oppia-page-cards-container[_ngcontent-%COMP%]   .oppia-page-card[_ngcontent-%COMP%] {\n    padding: 30px 55px 30px 45px;\n  }\n\n  .oppia-terms-right-menu[_ngcontent-%COMP%] {\n    left: 50%;\n    margin-left: 360px;\n    position: fixed;\n    top: 100px;\n    width: 300px;\n  }\n\n  .oppia-terms-right-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 1;\n    margin: 0.5em 0;\n  }\n  .oppia-terms-right-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding-left: 20px;\n  }\n  .oppia-page-cards-container[_ngcontent-%COMP%]   .oppia-h2-text[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }"] });


/***/ }),

/***/ "jgrr":
/*!**********************************************************************!*\
  !*** ./core/templates/pages/terms-page/terms-page-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: TermsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageRoutingModule", function() { return TermsPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _terms_page_root_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-page-root.component */ "+Ayk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _terms_page_root_component__WEBPACK_IMPORTED_MODULE_1__["TermsPageRootComponent"]
    }
];
class TermsPageRoutingModule {
}
TermsPageRoutingModule.ɵfac = function TermsPageRoutingModule_Factory(t) { return new (t || TermsPageRoutingModule)(); };
TermsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TermsPageRoutingModule });
TermsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TermsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "sjS1":
/*!**************************************************************!*\
  !*** ./core/templates/pages/terms-page/terms-page.module.ts ***!
  \**************************************************************/
/*! exports provided: TermsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageModule", function() { return TermsPageModule; });
/* harmony import */ var pages_terms_page_terms_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pages/terms-page/terms-page.component */ "adAV");
/* harmony import */ var _terms_page_root_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-page-root.component */ "+Ayk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _terms_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms-page-routing.module */ "jgrr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class TermsPageModule {
}
TermsPageModule.ɵfac = function TermsPageModule_Factory(t) { return new (t || TermsPageModule)(); };
TermsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TermsPageModule });
TermsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _terms_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["TermsPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TermsPageModule, { declarations: [pages_terms_page_terms_page_component__WEBPACK_IMPORTED_MODULE_0__["TermsPageComponent"],
        _terms_page_root_component__WEBPACK_IMPORTED_MODULE_1__["TermsPageRootComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _terms_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["TermsPageRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-terms-page-terms-page-module-es2015.js.map