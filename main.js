(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () { };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <mat-toolbar color=\"primary\" class=\"mat-elevation-z4\" style=\"display: block; position: fixed;\" #tb>\n  <mat-toolbar-row>\n    <button mat-button scrollTo scrollTargetSelector=\"#tbSpacer1\"><h2 class=\"mat-display-2\">about</h2></button>\n    <button mat-button scrollTo scrollTargetSelector=\"#tbSpacer2\"><h2 class=\"mat-display-2\">projects</h2></button>\n    <button mat-button scrollTo scrollTargetSelector=\"#tbSpacer3\"><h2 class=\"mat-display-2\">contact</h2></button>\n  </mat-toolbar-row>\n</mat-toolbar> -->\n\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'vinit';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tb', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "tb", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: routes, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var ng2_scroll_to__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-scroll-to */ "./node_modules/ng2-scroll-to/index.js");
/* harmony import */ var ng2_scroll_to__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_scroll_to__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contactme_contactme_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contactme/contactme.component */ "./src/app/contactme/contactme.component.ts");
/* harmony import */ var _featured_featured_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./featured/featured.component */ "./src/app/featured/featured.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _experiences_experiences_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./experiences/experiences.module */ "./src/app/experiences/experiences.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




// Router

// Material Components



// Scrolling

// components










var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_10__["IntroComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"],
                _contactme_contactme_component__WEBPACK_IMPORTED_MODULE_12__["ContactmeComponent"],
                _featured_featured_component__WEBPACK_IMPORTED_MODULE_13__["FeaturedComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
                _experiences_experiences_module__WEBPACK_IMPORTED_MODULE_16__["ExperiencesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                ng2_scroll_to__WEBPACK_IMPORTED_MODULE_8__["ScrollToModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contactme/contactme.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactme/contactme.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\na {\n\ttext-decoration: none;\n}\n\na:hover {\n\ttext-decoration: underline;\n}\n\n.contactme{\n\tbackground-color: #eceff1;\n\theight: 250px;\n}\n\n.subtitle-contact {\n\tbackground: #eceff1; \n\tcolor: #263238;\n\tmargin: 0px;\n\tpadding-left: 2%;\n\tpadding-top: 2%;\n}\n\n.link {\n\tmargin-left: 3%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG1lL2NvbnRhY3RtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDLHNCQUFzQjtDQUN0Qjs7QUFFRDtDQUNDLDJCQUEyQjtDQUMzQjs7QUFHRDtDQUNDLDBCQUEwQjtDQUMxQixjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdG1lL2NvbnRhY3RtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5hIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cblxuLmNvbnRhY3RtZXtcblx0YmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMTtcblx0aGVpZ2h0OiAyNTBweDtcbn1cblxuLnN1YnRpdGxlLWNvbnRhY3Qge1xuXHRiYWNrZ3JvdW5kOiAjZWNlZmYxOyBcblx0Y29sb3I6ICMyNjMyMzg7XG5cdG1hcmdpbjogMHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDIlO1xuXHRwYWRkaW5nLXRvcDogMiU7XG59XG5cbi5saW5rIHtcblx0bWFyZ2luLWxlZnQ6IDMlO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/contactme/contactme.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactme/contactme.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pt4 pb5\">\n\t<h3 class=\"f3 pv3 ph5-ns ph4\">Contact me</h3>\n\t<div class=\"flex flex-row pl5-ns pl4\">\n\t\t<a href=\"mailto:vinitsoni9869@gmail.com\" class=\"black ph3\">email</a>\n\t\t<a href=\"https://www.linkedin.com/in/vinitsoni/\" class=\"black ph3\">linkedin</a>\n\t\t<a href=\"https://github.com/cybervinit\" class=\"black ph3\">github</a>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/contactme/contactme.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactme/contactme.component.ts ***!
  \**************************************************/
/*! exports provided: ContactmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactmeComponent", function() { return ContactmeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactmeComponent = /** @class */ (function () {
    function ContactmeComponent() {
    }
    ContactmeComponent.prototype.ngOnInit = function () {
    };
    ContactmeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'contactme',
            template: __webpack_require__(/*! ./contactme.component.html */ "./src/app/contactme/contactme.component.html"),
            styles: [__webpack_require__(/*! ./contactme.component.css */ "./src/app/contactme/contactme.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactmeComponent);
    return ContactmeComponent;
}());



/***/ }),

/***/ "./src/app/experiences/components/experiences.component.css":
/*!******************************************************************!*\
  !*** ./src/app/experiences/components/experiences.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2VzL2NvbXBvbmVudHMvZXhwZXJpZW5jZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/experiences/components/experiences.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/experiences/components/experiences.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"mv6 f1 tc b\">loading experiences...</h3>"

/***/ }),

/***/ "./src/app/experiences/components/experiences.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/experiences/components/experiences.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExperiencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesComponent", function() { return ExperiencesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ExperiencesComponent = /** @class */ (function () {
    function ExperiencesComponent(router) {
        var _this = this;
        this.router = router;
        var s = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(500).subscribe(function (e) {
            s.unsubscribe();
            _this.router.navigate(['/experiences/vancouver']);
        });
    }
    ExperiencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'experiences',
            template: __webpack_require__(/*! ./experiences.component.html */ "./src/app/experiences/components/experiences.component.html"),
            styles: [__webpack_require__(/*! ./experiences.component.css */ "./src/app/experiences/components/experiences.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ExperiencesComponent);
    return ExperiencesComponent;
}());



/***/ }),

/***/ "./src/app/experiences/experiences-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/experiences/experiences-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: experiencesRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiencesRouting", function() { return experiencesRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_experiences_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/experiences.component */ "./src/app/experiences/components/experiences.component.ts");


var routes = [
    { path: 'experiences', component: _components_experiences_component__WEBPACK_IMPORTED_MODULE_1__["ExperiencesComponent"] }
];
var experiencesRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/experiences/experiences.module.ts":
/*!***************************************************!*\
  !*** ./src/app/experiences/experiences.module.ts ***!
  \***************************************************/
/*! exports provided: ExperiencesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesModule", function() { return ExperiencesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_experiences_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/experiences.component */ "./src/app/experiences/components/experiences.component.ts");
/* harmony import */ var _experiences_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experiences-routing.module */ "./src/app/experiences/experiences-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modules_ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ui/ui.module */ "./src/app/experiences/modules/ui/ui.module.ts");
/* harmony import */ var _modules_experience_experience_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/experience/experience.module */ "./src/app/experiences/modules/experience/experience.module.ts");







var ExperiencesModule = /** @class */ (function () {
    function ExperiencesModule() {
    }
    ExperiencesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_experiences_component__WEBPACK_IMPORTED_MODULE_2__["ExperiencesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _modules_experience_experience_module__WEBPACK_IMPORTED_MODULE_6__["ExperienceModule"],
                _experiences_routing_module__WEBPACK_IMPORTED_MODULE_3__["experiencesRouting"],
                _modules_ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"]
            ],
        })
    ], ExperiencesModule);
    return ExperiencesModule;
}());



/***/ }),

/***/ "./src/app/experiences/modules/experience/components/experience.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/experiences/modules/experience/components/experience.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2VzL21vZHVsZXMvZXhwZXJpZW5jZS9jb21wb25lbnRzL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/experiences/modules/experience/components/experience.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/experiences/modules/experience/components/experience.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fs-pres #fspres></fs-pres>"

/***/ }),

/***/ "./src/app/experiences/modules/experience/components/experience.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/experiences/modules/experience/components/experience.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/network.service */ "./src/app/experiences/modules/experience/services/network.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(aRoute, networkService) {
        var _this = this;
        this.aRoute = aRoute;
        this.networkService = networkService;
        this.expName = this.aRoute.snapshot.params['experienceName'];
        this.networkService.getExperience('vancouver')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (resp) {
            _this.fsPres.setContent(resp);
        });
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fspres'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExperienceComponent.prototype, "fsPres", void 0);
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "experience",
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experiences/modules/experience/components/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experiences/modules/experience/components/experience.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/experiences/modules/experience/experience.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/experiences/modules/experience/experience.module.ts ***!
  \*********************************************************************/
/*! exports provided: ExperienceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceModule", function() { return ExperienceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/experience.component */ "./src/app/experiences/modules/experience/components/experience.component.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/ui.module */ "./src/app/experiences/modules/ui/ui.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/network.service */ "./src/app/experiences/modules/experience/services/network.service.ts");






var ExperienceModule = /** @class */ (function () {
    function ExperienceModule() {
    }
    ExperienceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_experience_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceComponent"]
            ],
            imports: [
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: 'experiences/:experienceName', component: _components_experience_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceComponent"] }
                ])
            ],
            exports: [
                _components_experience_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceComponent"]
            ],
            providers: [
                _services_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]
            ]
        })
    ], ExperienceModule);
    return ExperienceModule;
}());



/***/ }),

/***/ "./src/app/experiences/modules/experience/services/network.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/experiences/modules/experience/services/network.service.ts ***!
  \****************************************************************************/
/*! exports provided: NetworkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkService", function() { return NetworkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NetworkService = /** @class */ (function () {
    function NetworkService(httpClient) {
        this.httpClient = httpClient;
    }
    NetworkService.prototype.getExperience = function (expName) {
        return this.httpClient.get("http://localhost:8080/experience/" + expName, {
            withCredentials: true
        });
    };
    NetworkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NetworkService);
    return NetworkService;
}());



/***/ }),

/***/ "./src/app/experiences/modules/ui/fs-pres/fs-pres.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/experiences/modules/ui/fs-pres/fs-pres.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".s-container {\n  display: block;\n}\n\n.s-featured-img {\n  width: 100vw;\n}\n\n.ns-container {\n  display: none;\n}\n\n.vlog-player {\n  width: 100vw;\n  height: 75vw;\n}\n\n@media screen and (min-width: 400px) {\n  .s-container {\n    display: none;\n  }\n\n  .ns-container {\n    display: block;\n    overflow: hidden;\n    height: 100vh;\n  }\n\n  .ns-featured-img {\n    width: 100vw;\n  }\n\n  .content {\n    position: absolute;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZXMvbW9kdWxlcy91aS9mcy1wcmVzL2ZzLXByZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsYUFBYTtDQUNkOztBQUVEO0VBQ0U7SUFDRSxjQUFjO0dBQ2Y7O0VBRUQ7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7R0FDZjs7RUFFRDtJQUNFLGFBQWE7R0FDZDs7RUFFRDtJQUNFLG1CQUFtQjtHQUNwQjtDQUNGOztBQUVEOztDQUVDIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZXMvbW9kdWxlcy91aS9mcy1wcmVzL2ZzLXByZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucy1mZWF0dXJlZC1pbWcge1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udmxvZy1wbGF5ZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogNzV2dztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgLnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm5zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG5cbiAgLm5zLWZlYXR1cmVkLWltZyB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/experiences/modules/ui/fs-pres/fs-pres.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/experiences/modules/ui/fs-pres/fs-pres.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"ns-container\">\n  <div class=\"content tc\" [style.bottom]=\"posBottom\" [style.right]=\"posRight\">\n      <h2 class=\"f1 b\">{{ exp.title ? exp.title : \"\" }}</h2>\n      <p class=\"tc f3\">{{ exp.caption ? exp.caption : \"\" }}</p>\n  </div>\n  <img class=\"ns-featured-img\" [src]=\"exp.momentList[0].imgSrc\">\n</section>\n\n<section class=\"s-container pv2\">\n  <div class=\"tc mv5\" [style.bottom]=\"posBottom\" [style.right]=\"posRight\">\n      <h2 class=\"f2 b\">{{ exp.title ? exp.title : \"\" }}</h2>\n      <p class=\"tc f4\">{{ exp.caption ? exp.caption : \"\" }}</p>\n  </div>\n  <div *ngFor=\"let p of exp.momentList\">\n      <img class=\"s-featured-img mt3 mb2\" [src]=\"p.imgSrc\">\n      <p class=\"f4 ml3 mr5 mv3\">{{ (!p.caption || p.caption === \"\") ? \"\" : p.caption }}</p>\n  </div>\n  <div class=\"flex justify-center f2\">\n      <button class=\"\"></button>\n  </div>\n</section>\n\n<iframe allowfullscreen class=\"vlog-player\" src=\"https://drive.google.com/file/d/10STNa3jzFNDdK5AJgNvKFcQ80nY1ANTy/preview\"></iframe>"

/***/ }),

/***/ "./src/app/experiences/modules/ui/fs-pres/fs-pres.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/experiences/modules/ui/fs-pres/fs-pres.component.ts ***!
  \*********************************************************************/
/*! exports provided: FSPresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSPresComponent", function() { return FSPresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FSPresComponent = /** @class */ (function () {
    function FSPresComponent() {
        this.posBottom = 30 + "px";
        this.posRight = 150 + "px";
        this.exp = {
            name: "", title: "", caption: "", momentList: []
        };
    }
    FSPresComponent.prototype.setContent = function (resp) {
        console.log(resp.exp);
        this.exp = resp.exp;
        console.log("Moment list", this.exp.momentList);
    };
    FSPresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fs-pres',
            template: __webpack_require__(/*! ./fs-pres.component.html */ "./src/app/experiences/modules/ui/fs-pres/fs-pres.component.html"),
            styles: [__webpack_require__(/*! ./fs-pres.component.css */ "./src/app/experiences/modules/ui/fs-pres/fs-pres.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FSPresComponent);
    return FSPresComponent;
}());



/***/ }),

/***/ "./src/app/experiences/modules/ui/ui.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/experiences/modules/ui/ui.module.ts ***!
  \*****************************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fs_pres_fs_pres_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fs-pres/fs-pres.component */ "./src/app/experiences/modules/ui/fs-pres/fs-pres.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _fs_pres_fs_pres_component__WEBPACK_IMPORTED_MODULE_2__["FSPresComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            exports: [
                _fs_pres_fs_pres_component__WEBPACK_IMPORTED_MODULE_2__["FSPresComponent"]
            ]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/app/featured/featured.component.css":
/*!*************************************************!*\
  !*** ./src/app/featured/featured.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n.featured {\n\tbackground: #009688;\n}\n\n.piky-title {\n\tcolor: #00675b;\n\tbackground-color: #52c7b8;\n\tborder-radius: 5px;\n}\n\n.piky-title:hover {\n\tbackground-color: #fff;\n\tcolor: #009688;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZWQvZmVhdHVyZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7Q0FDQyxvQkFBb0I7Q0FDcEI7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQjs7QUFFRDtDQUNDLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlZC9mZWF0dXJlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG4uZmVhdHVyZWQge1xuXHRiYWNrZ3JvdW5kOiAjMDA5Njg4O1xufVxuXG4ucGlreS10aXRsZSB7XG5cdGNvbG9yOiAjMDA2NzViO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTJjN2I4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5waWt5LXRpdGxlOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0Y29sb3I6ICMwMDk2ODg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/featured/featured.component.html":
/*!**************************************************!*\
  !*** ./src/app/featured/featured.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"featured pt3 pb4\">\n\t<!-- <iframe class=\"featured-video\" src=\"https://www.youtube.com/embed/rLzZ3Bor5eU?rel=0&amp;controls=0&amp;showinfo=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe> -->\n\t<div class=\"f2 b white ph3 pv3 tc\">Featured Project</div>\n\t<a href=\"https://www.piky.me\">\n\t<div class=\"flex justify-center pv5 mv5\">\n\t\t<div class=\"f3 underline white pv3 tc\">https://www.</div>\n\t\t<div class=\"piky-title bg-white f3 underline pa3 tc\">Piky</div>\n\t\t<div class=\"f3 underline white pv3 tc\">.me</div>\n\t</div>\n\t</a>\n</div>\n"

/***/ }),

/***/ "./src/app/featured/featured.component.ts":
/*!************************************************!*\
  !*** ./src/app/featured/featured.component.ts ***!
  \************************************************/
/*! exports provided: FeaturedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedComponent", function() { return FeaturedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeaturedComponent = /** @class */ (function () {
    function FeaturedComponent() {
    }
    FeaturedComponent.prototype.ngOnInit = function () {
    };
    FeaturedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'featured',
            template: __webpack_require__(/*! ./featured.component.html */ "./src/app/featured/featured.component.html"),
            styles: [__webpack_require__(/*! ./featured.component.css */ "./src/app/featured/featured.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeaturedComponent);
    return FeaturedComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".featured-exp-title {\n\tposition: absolute;\n\tright: 5%;\n\ttop: 50%;\n}\n\nimg {\n\twidth: 100vw;\n}\n\n.f-exp-container img {\n\tdisplay: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLFNBQVM7Q0FDVDs7QUFFRDtDQUNDLGFBQWE7Q0FDYjs7QUFFRDtDQUNDLGVBQWU7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlYXR1cmVkLWV4cC10aXRsZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDUlO1xuXHR0b3A6IDUwJTtcbn1cblxuaW1nIHtcblx0d2lkdGg6IDEwMHZ3O1xufVxuXG4uZi1leHAtY29udGFpbmVyIGltZyB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<intro id=\"intro\"></intro>\n<a class=\"no-underline white\" href=\"/experiences/vancouver\">\n<div class=\"f-exp-container\">\n  <img src=\"https://lh3.googleusercontent.com/yW08haBAP1C6OV-ozYPKGs5M58Hf7OysylcuamuoFFjsAAGeS0HimSe73pE2FKaiSu6P_o-4C7LrDYeyrP5bwd0Hc9cbqL95iC47kXJ9wxj_XlkvypSW5lVZnl_fbk-dpURp_cr5MKhdMBA9wruh9Yy51qPh7ucE10LRe7jrIZNa-YFqvz2wOO18B_Y-OYrzo3MaifdCJ-jqdo38e4Qapht4EvokvoCa5lIWGS3KyyyjmZgnh6Nc9du_RlKiOh-f3uBgO1d0OjQC_BpP0DX9Foa965Sf3cfWpKfgY6fKUpVcrhQNANzj_hjy8sgZ2KMuyLYCPvre26LAzU0rg2qkzDpTv4LY4zoTBKhNE4ccwxlJ9kcsI6z6wNmqLJC3cKIF5BTlcbI2FK3Hd8gCI-o5GIMox-IvJjkqgZyt0RMUjDe5gBIFafOpPfy8K9nLWGuXL7eVGx2SCuOuT0T02mZsOGmMzR-5Dl2BoiTdPEmFIyAXJAGwr6pPKrZ8m6vLQNDKAUg9gEoO4klMMQXN0tTROffwKnAdCPEf-Xi3HlLnJb9KTyNO0RWRbBr9K_OXXOHDk76RrB0s1198fCvLPGSwE4OXUvkx2qoqipjCj_ThDjPCNXDNbpF0DsbcIWrUR7RpAXw5gjRyP4n05eT1uRrqbaoGLOeBaCWRTyuwTqm0H7s3Axk-Wlq91XfjpnsqCsIr0W5kwJHnVuemjrHmniPBYCI0cQ=w2166-h1626-no\">\n  <div class=\"featured-exp-title white f3 tc underline\">Vancouver 2k19\n  </div>\n</div>\n</a>\n<featured id=\"featured\"></featured>\n<projects id=\"projects\"></projects>\n<contactme id=\"contactme\"></contactme>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/intro/intro.component.css":
/*!*******************************************!*\
  !*** ./src/app/intro/intro.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\np {\n\tmargin: 0px;\n}\n\n\n.intro {\n\tcolor: #263238;\n\tbackground: #eceff1;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtDQUNDLFlBQVk7Q0FDWjs7O0FBR0Q7Q0FDQyxlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbnAge1xuXHRtYXJnaW46IDBweDtcbn1cblxuXG4uaW50cm8ge1xuXHRjb2xvcjogIzI2MzIzODtcblx0YmFja2dyb3VuZDogI2VjZWZmMTtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/intro/intro.component.html":
/*!********************************************!*\
  !*** ./src/app/intro/intro.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"intro\">\n\t<div class=\"pv5\">\n\t\t<div class=\"tc\">\n\t\t\t<div class=\"f1 pv3\" style=\"font-weight: bold;\">Hi, I'm Vinit.</div>\n\t\t\t<div class=\"f3 pv2\">Explore through some of my</div>\n\t\t\t<div class=\"f3 pv2\">work and experiences.</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/intro/intro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.intro-box {\n\tbackground: url('https://placeimg.com/1000/1000/nature') fixed;\n\topacity: 0.3;\n}\n\np {\n\tmargin: 0px;\n}\n\n.projects {\n\theight: 750px; /* TEMPORARY */\n\tbackground: #263238;\n\n}\n\n.subtitle {\n\tcolor: #eceff1;\n\tmargin: 0px;\n\tpadding-left: 2%;\n\tpadding-top: 2%;\n}\n\n.empty-placeholder {\n\tcolor: #eceff1;\n}\n\n.project-list {\n\tpadding-top: 4%;\n\tpadding-bottom: 5%;\n\tpadding-left: 5%;\n    overflow-x: scroll;\n    width: auto;\n    white-space: nowrap;\n}\n\n.project-item {\n\tdisplay: inline-block;\n\twidth: 350px;\n\tmargin-left: 2%;\n\tmargin-right: 2%;\n\tbox-shadow: 0px 0px 25px #000000;\n    z-index: 2;\n    -webkit-transition: all 100ms ease-in;\n    -webkit-transform: scale(1);\n    -ms-transition: all 100ms ease-in;\n    -ms-transform: scale(1);   \n    -moz-transition: all 100ms ease-in;\n    -moz-transform: scale(1);\n    transition: all 100ms ease-in;\n    transform: scale(1);\n}\n\n.project-item:hover {\n\tdisplay: inline-block;\n\twidth: 350px;\n\tbox-shadow: 0px 0px 25px #000000;\n    z-index: 2;\n    -webkit-transition: all 100ms ease-in;\n    -webkit-transform: scale(1.01);\n    -ms-transition: all 100ms ease-in;\n    -ms-transform: scale(1.01);   \n    -moz-transition: all 100ms ease-in;\n    -moz-transform: scale(1.01);\n    transition: all 100ms ease-in;\n    transform: scale(1.01);\n}\n\n.display-holder {\n\t  height: 250px;\n    background-color: #eceff1;\n    display: block;\n}\n\n.display-image {\n    max-height: 100%;\n    max-width: 40%;\n\t  display: table;\n    margin: auto;\n}\n\n.img-center {\n    height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLCtEQUErRDtDQUMvRCxhQUFhO0NBQ2I7O0FBRUQ7Q0FDQyxZQUFZO0NBQ1o7O0FBR0Q7Q0FDQyxjQUFjLENBQUMsZUFBZTtDQUM5QixvQkFBb0I7O0NBRXBCOztBQUVEO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCOztBQUVEO0NBQ0MsZUFBZTtDQUNmOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixpQkFBaUI7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG9CQUFvQjtDQUN2Qjs7QUFFRDtDQUNDLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixpQ0FBaUM7SUFDOUIsV0FBVztJQUNYLHNDQUFzQztJQUN0Qyw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixvQkFBb0I7Q0FDdkI7O0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLGlDQUFpQztJQUM5QixXQUFXO0lBQ1gsc0NBQXNDO0lBQ3RDLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLG1DQUFtQztJQUNuQyw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLHVCQUF1QjtDQUMxQjs7QUFFRDtHQUNHLGNBQWM7SUFDYiwwQkFBMEI7SUFDMUIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0dBQ2hCLGVBQWU7SUFDZCxhQUFhO0NBQ2hCOztBQUdEO0lBQ0ksYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuaW50cm8tYm94IHtcblx0YmFja2dyb3VuZDogdXJsKCdodHRwczovL3BsYWNlaW1nLmNvbS8xMDAwLzEwMDAvbmF0dXJlJykgZml4ZWQ7XG5cdG9wYWNpdHk6IDAuMztcbn1cblxucCB7XG5cdG1hcmdpbjogMHB4O1xufVxuXG5cbi5wcm9qZWN0cyB7XG5cdGhlaWdodDogNzUwcHg7IC8qIFRFTVBPUkFSWSAqL1xuXHRiYWNrZ3JvdW5kOiAjMjYzMjM4O1xuXG59XG5cbi5zdWJ0aXRsZSB7XG5cdGNvbG9yOiAjZWNlZmYxO1xuXHRtYXJnaW46IDBweDtcblx0cGFkZGluZy1sZWZ0OiAyJTtcblx0cGFkZGluZy10b3A6IDIlO1xufVxuXG4uZW1wdHktcGxhY2Vob2xkZXIge1xuXHRjb2xvcjogI2VjZWZmMTtcbn1cblxuLnByb2plY3QtbGlzdCB7XG5cdHBhZGRpbmctdG9wOiA0JTtcblx0cGFkZGluZy1ib3R0b206IDUlO1xuXHRwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucHJvamVjdC1pdGVtIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR3aWR0aDogMzUwcHg7XG5cdG1hcmdpbi1sZWZ0OiAyJTtcblx0bWFyZ2luLXJpZ2h0OiAyJTtcblx0Ym94LXNoYWRvdzogMHB4IDBweCAyNXB4ICMwMDAwMDA7XG4gICAgei1pbmRleDogMjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7ICAgXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnByb2plY3QtaXRlbTpob3ZlciB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0d2lkdGg6IDM1MHB4O1xuXHRib3gtc2hhZG93OiAwcHggMHB4IDI1cHggIzAwMDAwMDtcbiAgICB6LWluZGV4OiAyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTsgICBcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xufVxuXG4uZGlzcGxheS1ob2xkZXIge1xuXHQgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRpc3BsYXktaW1hZ2Uge1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0MCU7XG5cdCAgZGlzcGxheTogdGFibGU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG5cbi5pbWctY2VudGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"projects\">\n\t<div class=\"f3 pv3 white tc\">Previous Projects</div>\n<!-- \t<br><br><br><br><br><br><br><br><br><br><br><br>\n\t<h5 class=\"center-align empty-placeholder\">coming soon...</h5> -->\n\t<div class=\"project-list\">\n\t\t<a href=\"{{project.githubUrl}}\" class=\"project-item\" *ngFor=\"let project of projectList\">\n\t\t<mat-card class=\"project-item\">\n\t\t\t<mat-card-title>{{project.title}}</mat-card-title>\n\t\t\t<mat-card-subtitle><span *ngFor=\"let techItem of project.techStack\">{{techItem + (project.techStack[project.techStack.length - 1] !== techItem ? \",\" : \"\")}} \n\t\t\t</span></mat-card-subtitle>\n\t\t\t<div mat-card-image class=\"display-holder\">\n\t\t\t\t<div class=\"center-align img-center\">\n\t\t\t\t\t<img class=\"display-image\" src={{project.imgSrc}} alt=\"petly display picture\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<mat-card-content style=\"width: 100%\">\n\t\t\t\t<p style=\"white-space: pre-wrap;\">{{project.description}}</p>\n\t\t\t\t<br/>\n\t\t\t\t<button style=\"background-color: #eceff1;\" mat-button >github</button>\n\t\t\t</mat-card-content>\n\t\t</mat-card></a>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// Models 
var Project = /** @class */ (function () {
    function Project(projectInfo) {
        this.title = projectInfo.title ? projectInfo.title : "No Title Given...";
        this.description = projectInfo.title ? projectInfo.description : "No description given...";
        this.imgSrc = projectInfo.imgSrc ? projectInfo.imgSrc : "";
        this.techStack = projectInfo.techStack ? projectInfo.techStack : [];
        this.githubUrl = projectInfo.githubUrl ? projectInfo.githubUrl : "https://github.com/cybervinit";
    }
    return Project;
}());
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.projectList = [];
        this.projectListStyle = {
            'overflow-x': 'scroll', 'white-space': 'nowrap', 'width': 'auto'
        };
        this.projectList.push(new Project({
            title: "Petly",
            description: "An android application with a newsfeed, friendship network, areas of interest, and other features to connect pet owners of Toronto.",
            techStack: ["Android", "IBM Cloudant"],
            imgSrc: "assets/petly_display.png",
            githubUrl: "https://github.com/cybervinit/Petly_final"
        }));
        this.projectList.push(new Project({
            title: "EchoMe",
            description: "A realtime Question-based social platform aimed at bringing friends together by answering each other's questions and forming connections",
            techStack: ["Android", "NodeJS", "StdLib"],
            imgSrc: "assets/echome_display.png",
            githubUrl: "https://github.com/cybervinit/echome"
        }));
        this.projectList.push(new Project({
            title: "ShipIt",
            description: "A decentralized P2P crowd-sourced delivery platform designed for a public blockchain network.",
            techStack: ["Solidity", "React", "MetaMask"],
            imgSrc: "assets/shipit_display.png",
            githubUrl: "https://github.com/shipinit/shipit"
        }));
    }
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vinitsoni/main/personal_website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map