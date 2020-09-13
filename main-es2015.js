(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const on_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](on_r1.platform.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", on_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", on_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", on_r1.platform, " ");
} }
class AppComponent {
    constructor() {
        this.meOn = [
            {
                platform: 'Xing',
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faXing"],
                url: 'https://www.xing.com/profile/Daniel_Weiss48/cv',
            },
            {
                platform: 'LinkedIn',
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedin"],
                url: 'https://www.linkedin.com/in/wanieldeiss/',
            },
            {
                platform: 'GitHub',
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"],
                url: 'https://github.com/WanielDeiss',
            },
            {
                platform: 'BoardGameGeek',
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faDice"],
                url: 'https://boardgamegeek.com/user/WanielDeiss',
            },
            {
                platform: 'Instagram',
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"],
                url: 'https://www.instagram.com/wanieldeiss/',
            },
            {
                platform: 'Etsy',
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEtsy"],
                url: 'https://www.etsy.com/de/shop/DanielDice',
            },
            {
                platform: 'Twitter',
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"],
                url: 'https://twitter.com/WanielDeiss',
            },
        ];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 17, vars: 1, consts: [["src", "/assets/sircode-text-white.svg"], ["class", "on", 4, "ngFor", "ngForOf"], [1, "on"], [3, "href"], [3, "icon"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 4, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Imprint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Daniel L. Wei\u00DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Josef-G\u00F6tz-Str. 16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 84034 Landshut ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " GERMANY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meOn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  max-width: 20rem;\n  margin: 0 auto;\n}\n\nheader[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\nheader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.on[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 0.75rem;\n}\n\n.on[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: calc(100% - 2rem);\n  text-decoration: none;\n  border-radius: 0.25rem;\n  padding: 0.5rem 1rem;\n  color: white;\n}\n\n.on[_ngcontent-%COMP%]   .xing[_ngcontent-%COMP%]:hover {\n  background: #126567;\n  color: white;\n}\n\n.on[_ngcontent-%COMP%]   .linkedin[_ngcontent-%COMP%]:hover {\n  background: #0e76a8;\n  color: white;\n}\n\n.on[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover {\n  background: #24292e;\n  color: white;\n}\n\n.on[_ngcontent-%COMP%]   .boardgamegeek[_ngcontent-%COMP%]:hover {\n  background: #3f3a60;\n  color: white;\n}\n\n.on[_ngcontent-%COMP%]   .instagram[_ngcontent-%COMP%]:hover {\n  background: #e1306c;\n  color: white;\n}\n\n.on[_ngcontent-%COMP%]   .etsy[_ngcontent-%COMP%]:hover {\n  background: #f1641e;\n  color: white;\n}\n\n.on[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]:hover {\n  background: #1da1f2;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3NpcmNvZGUtd2Vic2l0ZS9zaXJjb2RlLXdlYnNpdGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ1RGOztBRFlBO0VBQ0UsbUJBQUE7QUNURjs7QURVRTtFQUNFLFdBQUE7QUNSSjs7QURZQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7QUNURjs7QURXRTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDVEo7O0FEYUk7RUFDRSxtQkFyQ1U7RUFzQ1YsWUFBQTtBQ1hOOztBRFNJO0VBQ0UsbUJBckNVO0VBc0NWLFlBQUE7QUNQTjs7QURLSTtFQUNFLG1CQXJDVTtFQXNDVixZQUFBO0FDSE47O0FEQ0k7RUFDRSxtQkFyQ1U7RUFzQ1YsWUFBQTtBQ0NOOztBREhJO0VBQ0UsbUJBckNVO0VBc0NWLFlBQUE7QUNLTjs7QURQSTtFQUNFLG1CQXJDVTtFQXNDVixZQUFBO0FDU047O0FEWEk7RUFDRSxtQkFyQ1U7RUFzQ1YsWUFBQTtBQ2FOIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJyYW5kLXBhbGV0dGU6IChcbiAgeGluZzogIzEyNjU2NyxcbiAgbGlua2VkaW46ICMwZTc2YTgsXG4gIGdpdGh1YjogIzI0MjkyZSxcbiAgYm9hcmRnYW1lZ2VlazogIzNmM2E2MCxcbiAgaW5zdGFncmFtOiAjZTEzMDZjLFxuICBldHN5OiAjZjE2NDFlLFxuICB0d2l0dGVyOiAjMWRhMWYyLFxuKTtcblxubWFpbiB7XG4gIG1heC13aWR0aDogMjByZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5vbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuXG4gIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgQGVhY2ggJGJyYW5kLW5hbWUsICRicmFuZC1jb2xvciBpbiAkYnJhbmQtcGFsZXR0ZSB7XG4gICAgLiN7JGJyYW5kLW5hbWV9OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICRicmFuZC1jb2xvcjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cbiIsIm1haW4ge1xuICBtYXgtd2lkdGg6IDIwcmVtO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbmhlYWRlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm9uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG4ub24gYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG4ub24gLnhpbmc6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTI2NTY3O1xuICBjb2xvcjogd2hpdGU7XG59XG4ub24gLmxpbmtlZGluOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzBlNzZhODtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm9uIC5naXRodWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjQyOTJlO1xuICBjb2xvcjogd2hpdGU7XG59XG4ub24gLmJvYXJkZ2FtZWdlZWs6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2YzYTYwO1xuICBjb2xvcjogd2hpdGU7XG59XG4ub24gLmluc3RhZ3JhbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlMTMwNmM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5vbiAuZXRzeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmMTY0MWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5vbiAudHdpdHRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxZGExZjI7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/sircode-website/sircode-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map