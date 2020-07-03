(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n    <app-nav-menu></app-nav-menu>\n\n    <div class=\"container\">\n\n        <router-outlet></router-outlet>\n\n    </div>\n\n</body>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Angajati</h1>\n\n\n<p>Filtrare dupa data</p>\n\n<p>Date start:</p>\n<input type=\"date\" [(ngModel)]=\"data_start\" id=\"date\" />\n<p>{{data_start}} </p> <p style=\"color:red;\"> {{data_startError}}</p>\n\n<p>Data final: </p>\n<input type=\"date\" [(ngModel)]=\"data_stop\" id=\"type\" />\n<p>{{data_stop}}</p><p style=\"color:red;\"> {{data_stopError}} </p>\n\n<a class=\"btn btn-primary\" (click)=\"loadAngajatFilterBy()\"  >Filtreaza!</a>\n\n<p *ngIf=\"!angajats\"><em>Loading...</em></p>\n\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"angajats\">\n    <thead>\n        <tr>\n            <th>Id</th>\n            <th>Nume</th>\n            <th>Data</th>\n            <th>Ora start</th>\n            <th>Ora final</th>\n            <th>Pauza</th>\n            <th>Operatii</th>\n\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let angajat of angajats\">\n            <td>{{ angajat.id_Angajat }}</td>\n            <td>{{ angajat.nume }}</td>\n            <td>{{ angajat.data | date:'yyyy/MM/dd' }}</td>\n            <td>{{ angajat.ora_Start | date:'HH:mm' }}</td>\n            <td>{{ angajat.ora_Stop | date:'HH:mm'}}</td>\n            <td>{{ angajat.pauza | date:'HH:mm' }}</td>\n            <td>\n                <a class=\"btn btn-primary\" [routerLink]=\"['/santier-details', santier.id_Santier]\" routerLinkActive=\"active\">Details</a> |\n                <a class=\"btn btn-info\" (click)=\"edit($event,santier.id_Santier)\">Edit</a> |\n                <a class=\"btn btn-danger\" (click)=\"delete(santier.id_Santier)\">Delete</a>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Gestionarea angajatilor</h1>\r\n<img src=\"http://www.darmatech.ro/wp-content/uploads/2016/10/Construction_background.jpg\"\r\n     alt=\"Imaginea nu a fost gasita\" width=\"1150\" height=\"645\">\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-header>\n        <mat-card-title>Log in</mat-card-title>\n    </mat-card-header>\n\n    <form class=\"example-form\">\n        <mat-card-content>\n            <mat-form-field class=\"example-full-width\">\n                <input type=\"email\" matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"loginModel.email\">\n            </mat-form-field>\n\n            <mat-form-field class=\"example-full-width\">\n                <input type=\"password\" matInput placeholder=\"Password\" name=\"password\" [(ngModel)]=\"loginModel.password\">\n            </mat-form-field>\n        </mat-card-content>\n        <button mat-stroked-button color=\"accent\" class=\"btn-block\" (click)=\"loginUser()\">Log in</button>\n    </form>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\">\n        <div class=\"container\">\n            <a class=\"navbar-brand\" [routerLink]=\"['/']\"> </a>\n            <button class=\"navbar-toggler\"\n                    type=\"button\"\n                    data-toggle=\"collapse\"\n                    data-target=\".navbar-collapse\"\n                    aria-label=\"Toggle navigation\"\n                    [attr.aria-expanded]=\"isExpanded\"\n                    (click)=\"toggle()\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\n                 [ngClass]=\"{ show: isExpanded }\">\n                <ul class=\"navbar-nav flex-grow\">\n\n                    <li class=\"nav-item\"\n                        [routerLinkActive]=\"['link-active']\"\n                        [routerLinkActiveOptions]=\"{ exact: true }\">\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\n                    </li>\n\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/santier']\">Santiere</a>\n                    </li>\n\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\"> Lista angajati</a>\n                    </li>\n\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/utilizatori']\"> Lista utilizatori</a>\n                    </li>\n\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/register']\">Register</a>\n                    </li>\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/login']\">Sign In</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-header>\n        <mat-card-title>Register</mat-card-title>\n    </mat-card-header>\n\n    <form class=\"example-form\">\n\n        <mat-card-content>\n            <mat-form-field class=\"example-full-width\">\n                <input type=\"email\" matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"registerModel.email\">\n            </mat-form-field>\n\n            <mat-form-field class=\"example-full-width\">\n                <input type=\"password\" matInput placeholder=\"Password\" name=\"password\" [(ngModel)]=\"registerModel.password\">\n            </mat-form-field>\n\n        </mat-card-content>\n\n        <button mat-stroked-button color=\"accent\" class=\"btn-block\" (click)=\"registerUser()\">Register</button>\n\n    </form>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/santier-details/santier-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/santier-details/santier-details.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<p *ngIf=\"!santier\"><em>Loading...</em></p>\n\n<a [routerLink]=\"['/santier']\" routerLinkActive=\"active\">Back</a>\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"santier\">\n    <tbody>\n        <tr>\n            <th>Denuimire santier</th>\n            <td>{{ santier.nume_Santier }}</td>\n        </tr>\n\n        <tr>\n            <th>Locatie</th>\n            <td>{{ santier.locatie }}</td>\n        </tr>\n        \n    </tbody>\n</table>\n\n<h2>Angajati</h2>\n<table class='table table-striped' aria-labelledby=\"tableLabel\"  *ngIf=\"santier\">\n    <thead>\n        <tr>\n            <th>Nume</th> \n            <th>Data</th> \n            <th>Ora inceput</th> \n            <th>Ora sfarsit</th> \n            <th>Pauza</th> \n            <th>Ore lucrate</th> \n        </tr>\n    </thead>\n    <tr *ngFor=\"let angajat of santier.angajati\">\n        <td>{{ angajat.nume }}</td>\n        <td>{{ angajat.data | date:'yyyy/MM/dd'}}</td>\n        <td>{{ angajat.ora_Start | date:'HH:mm' }} </td>\n        <td>{{ angajat.ora_Stop | date:'HH:mm'}}</td>\n        <td>{{ angajat.pauza | date:'HH:mm' }}</td>\n        <td>{{ angajat.ore_Lucrate }}</td>\n\n     </tr>\n</table>\n<a [routerLink]=\"['/santier']\" routerLinkActive=\"active\">Back</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/santier/santier.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/santier/santier.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Santiere</h1>\n\n<p>Locatie: </p>\n<input [(ngModel)]=\"fl_locatie\" />\n\n<a class=\"btn btn-primary\" (click)=\"loadSantierFilterBy()\">Filtreaza!</a>\n\n<p *ngIf=\"!santiere\"><em>Loading...</em></p>\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"santiere\">\n    <thead>\n        <tr>\n            <th>Id</th>\n            <th>Locatie</th>\n            <th>Denumire santier</th>\n            <th>Numar de angajati</th>\n\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let santier of santiere\">\n            <td>{{ santier.id_Santier }}</td>\n            <td>{{ santier.locatie }}</td>\n            <td>{{ santier.nume_Santier }}</td>\n            <td>{{ santier.nr_angajati }}</td>\n            <td>\n                <a class=\"btn btn-primary\" [routerLink]=\"['/santier-details', santier.id_Santier]\" routerLinkActive=\"active\">Details</a> |\n                <a class=\"btn btn-info\" (click)=\"edit($event,santier.id_Santier)\">Edit</a> |\n                <a class=\"btn btn-danger\" (click)=\"delete(santier.id_Santier)\">Delete</a>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<p>Adauga un nou santier</p>\n<p>Locatie:</p>\n<input [(ngModel)]=\"create_locatie\"  />\n<p>{{create_locatie}}</p><p style=\"color:red;\">{{create_locatieError}}</p>\n\n<p>Denumire santier:</p>\n<input [(ngModel)]=\"create_numesantier\" />\n<p>{{create_numesantier}}</p><p style=\"color:red;\">{{create_numesantierError}}</p>\n\n<button (click)=\"submit()\">Adauga</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utilizatori/utilizatori.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilizatori/utilizatori.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Utilizatori</h1>\n\n<p>Prenume: </p>\n<input [(ngModel)]=\"fl_prenume\" />\n\n<a class=\"btn btn-primary\" (click)=\"loadUtilizatorsFilterBy()\">Filtreaza!</a>\n\n<p *ngIf=\"!utilizators\"><em>Loading...</em></p>\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"utilizators\">\n    <thead>\n        <tr>\n            <th>Id</th>\n            <th>Nume</th>\n            <th>Prenume</th>\n            <th>User</th>\n            <th>Parola</th>\n\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let utilizator of utilizators\">\n            <td>{{ utilizator.id }}</td>\n            <td>{{ utilizator.nume }}</td>\n            <td>{{ utilizator.prenume }}</td>\n            <td>{{ utilizator.user }}</td>\n            <td>{{ utilizator.parola }}</td>\n            <td>\n                <a (click)=\"edit($event,utilizator.id)\">Edit</a> |\n                <a (click)=\"delete(utilizator.id)\">Delete</a>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<p>Adauga un utilizator nou</p>\n<p>Nume:</p>\n<input [(ngModel)]=\"create_nume\" />\n<p>{{create_nume}}</p><p style=\"color:red;\">{{create_locatieError}}</p>\n\n<p>Prenume:</p>\n<input [(ngModel)]=\"create_prenume\" />\n<p>{{create_prenume}}</p><p style=\"color:red;\">{{create_numesantierError}}</p>\n\n<p>Utilizator:</p>\n<input [(ngModel)]=\"create_user\" />\n<p>{{create_user}}</p><p style=\"color:red;\">{{create_numesantierError}}</p>\n\n<p>Parola:</p>\n<input [(ngModel)]=\"create_parola\" />\n<p>{{create_parola}}</p><p style=\"color:red;\">{{create_numesantierError}}</p>\n\n<button (click)=\"submit()\">Adauga</button>\n\n\n");

/***/ }),

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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/angular-material.module */ "./src/app/shared/angular-material.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _santier_santier_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./santier/santier.component */ "./src/app/santier/santier.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _santier_details_santier_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./santier-details/santier-details.component */ "./src/app/santier-details/santier-details.component.ts");
/* harmony import */ var _utilizatori_utilizatori_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utilizatori/utilizatori.component */ "./src/app/utilizatori/utilizatori.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _santier_santier_component__WEBPACK_IMPORTED_MODULE_10__["SantierComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_11__["FetchDataComponent"],
            _santier_details_santier_details_component__WEBPACK_IMPORTED_MODULE_12__["SantierDetailsComponent"],
            _utilizatori_utilizatori_component__WEBPACK_IMPORTED_MODULE_13__["UtilizatoriComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            _registration_registration_component__WEBPACK_IMPORTED_MODULE_15__["RegistrationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                {
                    path: '',
                    component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], pathMatch: 'full'
                },
                {
                    path: 'santier',
                    component: _santier_santier_component__WEBPACK_IMPORTED_MODULE_10__["SantierComponent"]
                },
                {
                    path: 'santier-details/:id_Santier',
                    component: _santier_details_santier_details_component__WEBPACK_IMPORTED_MODULE_12__["SantierDetailsComponent"]
                },
                {
                    path: 'fetch-data',
                    component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_11__["FetchDataComponent"],
                },
                {
                    path: 'utilizatori',
                    component: _utilizatori_utilizatori_component__WEBPACK_IMPORTED_MODULE_13__["UtilizatoriComponent"],
                },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"] },
                { path: 'register', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_15__["RegistrationComponent"] }
            ]),
            _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        ],
        exports: [_shared_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/authentication.guard */ "./src/app/core/guards/authentication.guard.ts");
/* harmony import */ var _services_http_request_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/http-request-interceptor */ "./src/app/core/services/http-request-interceptor.ts");
/* harmony import */ var _services_security_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/security.service */ "./src/app/core/services/security.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/token.service */ "./src/app/core/services/token.service.ts");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/application.service */ "./src/app/core/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [],
        imports: [],
        providers: [
            _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"],
            _services_security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
            _services_application_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                useClass: _services_http_request_interceptor__WEBPACK_IMPORTED_MODULE_3__["HttpRequestInterceptor"],
                multi: true
            }
        ],
        exports: []
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/guards/authentication.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/guards/authentication.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AuthenticationGuard = class AuthenticationGuard {
    constructor() { }
    canActivate() {
        return true;
    }
};
AuthenticationGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AuthenticationGuard);



/***/ }),

/***/ "./src/app/core/services/application.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/application.service.ts ***!
  \******************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "./src/app/core/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ApplicationService = class ApplicationService {
    constructor(tokenService) {
        this.tokenService = tokenService;
        this.baseUrl = document.getElementsByTagName('base')[0].href;
    }
    isLoggedIn() {
        return this.tokenService.getToken() != null;
    }
    userEmail() {
        var token = this.tokenService.getToken();
        if (token != null)
            return token.email;
        return "";
    }
};
ApplicationService.ctorParameters = () => [
    { type: _token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }
];
ApplicationService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
], ApplicationService);



/***/ }),

/***/ "./src/app/core/services/http-request-interceptor.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/services/http-request-interceptor.ts ***!
  \***********************************************************/
/*! exports provided: HttpRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestInterceptor", function() { return HttpRequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.service */ "./src/app/core/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let HttpRequestInterceptor = class HttpRequestInterceptor {
    constructor(router, tokenService) {
        this.router = router;
        this.tokenService = tokenService;
    }
    intercept(request, next) {
        var token = this.tokenService.getToken();
        request = token ? request.clone({
            headers: request.headers.set("Authorization", "Bearer " + token.value)
        }) : request;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error, caught) => {
            if (error.status === 401) {
                this.router.navigate(['/login']);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            }
            if (error.status === 403) {
                this.router.navigate(['/forbidden']);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
HttpRequestInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }
];
HttpRequestInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
], HttpRequestInterceptor);



/***/ }),

/***/ "./src/app/core/services/security.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/security.service.ts ***!
  \***************************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "./src/app/core/services/token.service.ts");
/* harmony import */ var _application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application.service */ "./src/app/core/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let SecurityService = class SecurityService {
    constructor(httpClient, tokenService, applicationService) {
        this.httpClient = httpClient;
        this.tokenService = tokenService;
        this.applicationService = applicationService;
    }
    register(registerModel) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((obs) => {
            this.httpClient.post(`${this.applicationService.baseUrl}Account/Register`, registerModel).subscribe(token => {
                this.tokenService.saveToken(token);
                obs.next(token);
                obs.complete();
            });
        });
    }
    login(loginModel) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((obs) => {
            this.httpClient.post(`${this.applicationService.baseUrl}Account/Login`, loginModel).subscribe(token => {
                this.tokenService.saveToken(token);
                obs.next(token);
                obs.complete();
            });
        });
    }
    logout() {
        this.tokenService.deleteToken();
    }
};
SecurityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
    { type: _application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"] }
];
SecurityService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
        _application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]])
], SecurityService);



/***/ }),

/***/ "./src/app/core/services/token.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/token.service.ts ***!
  \************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let TokenService = class TokenService {
    constructor() { }
    saveToken(token) {
        localStorage.setItem("token", JSON.stringify(token));
    }
    getToken() {
        return this.validate(JSON.parse(localStorage.getItem("token")));
    }
    validate(token) {
        if (token) {
            if (new Date(token.expiry) > new Date())
                return token;
        }
        return null;
    }
    deleteToken() {
        localStorage.removeItem("token");
    }
};
TokenService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TokenService);



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.loadAngajats();
    }
    loadAngajats() {
        this.http.get(this.baseUrl + 'api/angajats').subscribe(result => {
            this.angajats = result;
            console.log(this.angajats);
        }, error => console.error(error));
    }
    loadAngajatFilterBy() {
        if ((this.data_start > this.data_stop) && (this.data_stop != null)) {
            this.data_startError = "Data de inceput trebuie sa fie mai mica ca data de final!";
        }
        else if ((this.data_start != null) && (this.data_stop != null)) {
            this.http.get(this.baseUrl + 'api/angajats' + '?from=' + this.data_start + '&to=' + this.data_stop)
                .subscribe(result => {
                this.angajats = result;
                console.log(this.angajats);
            }, error => console.error(error));
        }
        else if ((this.data_start != null) && (this.data_stop == null)) {
            this.http.get(this.baseUrl + 'api/angajats' + '?from=' + this.data_start)
                .subscribe(result => {
                this.angajats = result;
                console.log(this.angajats);
            }, error => console.error(error));
        }
        else if ((this.data_start == null) && (this.data_stop != null)) {
            this.http.get(this.baseUrl + 'api/angajats' + '?to=' + this.data_stop)
                .subscribe(result => {
                this.angajats = result;
                console.log(this.angajats);
            }, error => console.error(error));
        }
    }
    delete(angajatId) {
        if (confirm('Are you sure you want to delete the employee with id ' + angajatId + '?')) {
            this.http.delete(this.baseUrl + 'api/angajats/' + angajatId)
                .subscribe(result => {
                alert('employee successfully deleted!');
                this.loadAngajats();
            }, error => alert('Cannot delete employee - maybe it has comments?'));
        }
    }
    edit(e, angajatId) {
        var angajat = {};
    }
    submit() {
        var angajat = {};
        angajat.nume = this.nume;
        angajat.data = this.data;
        angajat.ora_start = this.ora_start;
        angajat.ora_stop = this.ora_stop; //new Date;
        angajat.pauza = this.pauza;
        angajat.adaugatde = this.adaugatde;
        this.http.post(this.baseUrl + 'api/angajats', angajat).subscribe(result => {
            console.log('success!');
            this.loadAngajats();
        }, error => {
            if (error.status == 400) {
                console.log(error.error.errors);
                if (error.error.errors.Sum != "") {
                    // this.sumE = error.error.errors.Sum[0];
                }
                else if (error.error.errors.Description != "") {
                    // this.descriptionE = error.error.errors.Description[0];
                }
                else if (error.error.errors.Type != "") {
                    // this.typeE = error.error.errors.Type[0];
                }
            }
        });
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], FetchDataComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/security.service */ "./src/app/core/services/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let LoginComponent = class LoginComponent {
    constructor(securityService, router) {
        this.securityService = securityService;
        this.router = router;
        this.loginModel = {};
    }
    ngOnInit() {
    }
    loginUser() {
        this.securityService.login(this.loginModel).subscribe(token => {
            this.router.navigate(['/fetch-data']);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _core_services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    }),
    __metadata("design:paramtypes", [_core_services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\n  white-space: normal;\n  text-align: center;\n  word-break: break-all;\n}\n\nhtml {\n  font-size: 14px;\n}\n\n@media (min-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n}\n\n.box-shadow {\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/security.service */ "./src/app/core/services/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let RegistrationComponent = class RegistrationComponent {
    constructor(securityService, router) {
        this.securityService = securityService;
        this.router = router;
        this.registerModel = {};
    }
    ngOnInit() {
    }
    registerUser() {
        this.securityService.register(this.registerModel).subscribe(token => {
            this.router.navigate(['/fetch-data']);
        });
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _core_services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
RegistrationComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-registration',
        template: __importDefault(__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")).default]
    }),
    __metadata("design:paramtypes", [_core_services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], RegistrationComponent);



/***/ }),

/***/ "./src/app/santier-details/santier-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/santier-details/santier-details.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbnRpZXItZGV0YWlscy9zYW50aWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/santier-details/santier-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/santier-details/santier-details.component.ts ***!
  \**************************************************************/
/*! exports provided: SantierDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SantierDetailsComponent", function() { return SantierDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let SantierDetailsComponent = class SantierDetailsComponent {
    constructor(http, baseUrl, route) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.route = route;
    }
    loadSantier(santierId) {
        this.http.get(this.baseUrl + 'api/santiers/' + santierId).subscribe(result => {
            this.santier = result;
            console.log(this.santier);
        }, error => console.error(error));
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.loadSantier(params.get('id_Santier'));
        });
    }
};
SantierDetailsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SantierDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-santier-details',
        template: __importDefault(__webpack_require__(/*! raw-loader!./santier-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/santier-details/santier-details.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./santier-details.component.css */ "./src/app/santier-details/santier-details.component.css")).default]
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], SantierDetailsComponent);



/***/ }),

/***/ "./src/app/santier/santier.component.ts":
/*!**********************************************!*\
  !*** ./src/app/santier/santier.component.ts ***!
  \**********************************************/
/*! exports provided: SantierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SantierComponent", function() { return SantierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let SantierComponent = class SantierComponent {
    constructor(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        //create
        this.create_locatie = ' ';
        this.create_numesantier = ' ';
        this.loadSanteire();
    }
    loadSanteire() {
        this.http.get(this.baseUrl + 'api/santiers').subscribe(result => {
            this.santiere = result;
            console.log(this.santiere);
        }, error => console.error(error));
    }
    loadSantierFilterBy() {
        if (this.fl_locatie != null) {
            this.http.get(this.baseUrl + 'api/santiers' + '?locatie=' + this.fl_locatie).subscribe(result => {
                this.santiere = result;
                console.log(this.santiere);
            }, error => console.error(error));
        }
        else {
            this.http.get(this.baseUrl + 'api/santiers').subscribe(result => {
                this.santiere = result;
                console.log(this.santiere);
            }, error => console.error(error));
        }
    }
    delete(santierId) {
        if (confirm('Are you sure you want to delete the santier with id ' + santierId + '?')) {
            this.http.delete(this.baseUrl + 'api/santiers/' + santierId)
                .subscribe(result => {
                alert('employee successfully deleted!');
                this.loadSanteire();
            }, error => alert('Cannot delete employee - maybe it has comments?'));
        }
    }
    submit() {
        var santier = {};
        santier.locatie = this.create_locatie;
        santier.nume_Santier = this.create_numesantier;
        this.http.post(this.baseUrl + 'api/santiers', santier).subscribe(result => {
            console.log('success!');
            this.loadSanteire();
        }, error => {
            if (error.status == 400) {
                console.log(error.error.errors);
                if (error.error.errors.Sum != "") {
                    // this.sumE = error.error.errors.Sum[0];
                }
                else if (error.error.errors.Description != "") {
                    // this.descriptionE = error.error.errors.Description[0];
                }
                else if (error.error.errors.Type != "") {
                    // this.typeE = error.error.errors.Type[0];
                }
            }
        });
    }
};
SantierComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
SantierComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./santier.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/santier/santier.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], SantierComponent);



/***/ }),

/***/ "./src/app/shared/angular-material.module.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/angular-material.module.ts ***!
  \***************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]
        ],
    })
], AngularMaterialModule);



/***/ }),

/***/ "./src/app/utilizatori/utilizatori.component.css":
/*!*******************************************************!*\
  !*** ./src/app/utilizatori/utilizatori.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWxpemF0b3JpL3V0aWxpemF0b3JpLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/utilizatori/utilizatori.component.ts":
/*!******************************************************!*\
  !*** ./src/app/utilizatori/utilizatori.component.ts ***!
  \******************************************************/
/*! exports provided: UtilizatoriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilizatoriComponent", function() { return UtilizatoriComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let UtilizatoriComponent = class UtilizatoriComponent {
    constructor(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.loadUtilizators();
    }
    loadUtilizators() {
        this.http.get(this.baseUrl + 'api/utilizators').subscribe(result => {
            this.utilizators = result;
            console.log(this.utilizators);
        }, error => console.error(error));
    }
    loadUtilizatorsFilterBy() {
        this.http.get(this.baseUrl + 'api/utilizators' + '?prenume=' + this.fl_prenume).subscribe(result => {
            this.utilizators = result;
            console.log(this.utilizators);
        }, error => console.error(error));
    }
    delete(utilizatorId) {
        if (confirm('Are you sure you want to delete the employee with id ' + utilizatorId + '?')) {
            this.http.delete(this.baseUrl + 'api/utilizators/' + utilizatorId)
                .subscribe(result => {
                alert('employee successfully deleted!');
                this.loadUtilizators();
            }, error => alert('Cannot delete employee - maybe it has comments?'));
        }
    }
    submit() {
        var utilizator = {};
        utilizator.nume = this.create_nume;
        utilizator.prenume = this.create_prenume;
        utilizator.user = this.create_user;
        utilizator.parola = this.create_parola;
        this.http.post(this.baseUrl + 'api/utilizators', utilizator).subscribe(result => {
            console.log('success!');
            this.loadUtilizators();
        }, error => {
            if (error.status == 400) {
                console.log(error.error.errors);
                if (error.error.errors.Sum != "") {
                    // this.sumE = error.error.errors.Sum[0];
                }
                else if (error.error.errors.Description != "") {
                    // this.descriptionE = error.error.errors.Description[0];
                }
                else if (error.error.errors.Type != "") {
                    // this.typeE = error.error.errors.Type[0];
                }
            }
        });
    }
};
UtilizatoriComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
UtilizatoriComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-utilizatori',
        template: __importDefault(__webpack_require__(/*! raw-loader!./utilizatori.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utilizatori/utilizatori.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./utilizatori.component.css */ "./src/app/utilizatori/utilizatori.component.css")).default]
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], UtilizatoriComponent);



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Roxana\source\repos\Project.Net\Project.Net\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map