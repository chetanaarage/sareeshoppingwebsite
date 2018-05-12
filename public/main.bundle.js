webpackJsonp([1,4],{

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartService = (function () {
    function CartService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    CartService.prototype.addToCart = function (saree) {
        return this.http.post('http://localhost:3000/cart/selectedsarees', JSON.stringify(saree), this.options);
    };
    CartService.prototype.getSelectedSarees = function () {
        return this.http.get('http://localhost:3000/cart/selectedsarees').map(function (res) { return res.json(); });
    };
    CartService.prototype.deleteSaree = function (saree) {
        console.log("product in cart CartService delete", saree);
        return this.http.post("http://localhost:3000/cart/deleteselectedsarees", JSON.stringify(saree), this.options);
    };
    CartService.prototype.updateSaree = function (saree) {
        return this.http.post("http://localhost:3000/cart/updateselectedsarees", JSON.stringify(saree), this.options);
    };
    CartService.prototype.getTotal = function () {
        return this.http.get("http://localhost:3000/cart/guidePrice").map(function (res) { return res.json(); });
    };
    CartService.prototype.paymentcheckout = function (basketDetails) {
        console.log("amount need to be paid", basketDetails);
        return this.http.post("http://localhost:3000/paypal/buy", JSON.stringify(basketDetails), this.options).map(function (res) { return res.json(); });
        // console.log("res",res.json());
    };
    CartService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], CartService);
    return CartService;
    var _a;
}());
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/cart.service.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SareeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SareeService = (function () {
    function SareeService(http) {
        this.http = http;
    }
    SareeService.prototype.getSarees = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', "image/jpeg");
        // headers.append('Content-Type',"image/png")
        return this.http.get('http://localhost:3000/sarees/getSarees', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SareeService.prototype.getCategories = function () {
        console.log("inside getCategories");
        return this.http.get('http://localhost:3000/sarees/getCategories')
            .map(function (res) { return res.json(); });
    };
    SareeService.prototype.addnewSaree = function (saree) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //headers.append('Content-Type',"image/jpeg")
        // headers.append('Content-Type',"image/png")
        return this.http.post('http://localhost:3000/sarees/addSaree', saree, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SareeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], SareeService);
    return SareeService;
    var _a;
}());
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/saree.service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/validate.service.js.map

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 402;


/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(520);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/main.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = "Wearing a saree was never my choice.. \n  \t\tBut his eyes were looking for traditional girl..! \n  \t\tAnd then ethnic became my favorite..!!";
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(720),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/app.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_forgotten_password_forgotten_password_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_category_category_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_admin_dashboard_admin_dashboard_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_customer_dashboard_customer_dashboard_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_saree_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_cart_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_add_new_saree_add_new_saree_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_shopping_cart_shopping_cart_component__ = __webpack_require__(531);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'forgotten-password', component: __WEBPACK_IMPORTED_MODULE_13__components_forgotten_password_forgotten_password_component__["a" /* ForgottenPasswordComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_14__components_category_category_component__["a" /* CategoryComponent */] },
    { path: 'admin-dashboard', component: __WEBPACK_IMPORTED_MODULE_15__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */] },
    { path: 'customer-dashboard', component: __WEBPACK_IMPORTED_MODULE_16__components_customer_dashboard_customer_dashboard_component__["a" /* CustomerDashboardComponent */] },
    { path: 'addnewsaree', component: __WEBPACK_IMPORTED_MODULE_21__components_add_new_saree_add_new_saree_component__["a" /* AddNewSareeComponent */] },
    { path: 'shopping-cart', component: __WEBPACK_IMPORTED_MODULE_22__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_forgotten_password_forgotten_password_component__["a" /* ForgottenPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_customer_dashboard_customer_dashboard_component__["a" /* CustomerDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_add_new_saree_add_new_saree_component__["a" /* AddNewSareeComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_bs3_modal_ng2_bs3_modal__["Ng2Bs3ModalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__services_saree_service__["a" /* SareeService */], __WEBPACK_IMPORTED_MODULE_20__services_cart_service__["a" /* CartService */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/app.module.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_saree_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewSareeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNewSareeComponent = (function () {
    function AddNewSareeComponent(flashMessage, sareeService, router) {
        this.flashMessage = flashMessage;
        this.sareeService = sareeService;
        this.router = router;
        this.arr = [];
        this.categories = [];
        this.filesToUpload = [];
    }
    AddNewSareeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sareeService.getCategories().subscribe(function (data) {
            //console.log("this.categories",data.category[0]);
            _this.categories = data.category;
        });
    };
    AddNewSareeComponent.prototype.onchange = function (val) {
        this.cat = val;
    };
    AddNewSareeComponent.prototype.onSareeSubmit = function () {
        var _this = this;
        // const image={
        //   data:this.data,
        //   contentType:this.contentType
        // }
        var saree = {
            name: this.sareename,
            description: this.descr,
            category: this.cat,
            image: this.image,
            price: this.price
        };
        console.log("onSareeSubmit", saree);
        //Register User
        this.sareeService.addnewSaree(saree).subscribe(function (data) {
            console.log("onsareesubmit", data);
            if (data.success) {
                _this.flashMessage.show("Saree added successfully,,!! ", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/admin-dashboard']);
            }
            else {
                _this.flashMessage.show("Something went wrong..!!", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/addnewsaree']);
            }
        });
    };
    AddNewSareeComponent.prototype.upload = function () {
        var _this = this;
        this.makeFileRequest("http://localhost:3000/upload", [], this.filesToUpload).then(function (result) {
            //console.log("uploded image",result[0]);
            _this.path = result[0].path;
            _this.arr = _this.path.split('public/');
            _this.image = _this.arr[1];
            console.log("uploded path", _this.path);
            console.log("uploded image", _this.arr);
            console.log("uploded image", _this.image);
            //this.image='uploads/' + result[0].originalname;
            //this.image=result[0].path;
            //console.log("uploded image",this.image);
            //this.data=result[0].path;
            //product.img1.data = fs.readFileSync(imgPath);
            //this.contentType = result[0].mimetype;
        }, function (error) {
            console.error(error);
        });
    };
    AddNewSareeComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    AddNewSareeComponent.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    AddNewSareeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-new-saree',
            template: __webpack_require__(721),
            styles: [__webpack_require__(709)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_saree_service__["a" /* SareeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_saree_service__["a" /* SareeService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], AddNewSareeComponent);
    return AddNewSareeComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/add-new-saree.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(722),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/admin-dashboard.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryComponent = (function () {
    function CategoryComponent() {
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(723),
            styles: [__webpack_require__(711)]
        }), 
        __metadata('design:paramtypes', [])
    ], CategoryComponent);
    return CategoryComponent;
}());
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/category.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_saree_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerDashboardComponent = (function () {
    function CustomerDashboardComponent(sareeService, router, cartService, flashMessage) {
        this.sareeService = sareeService;
        this.router = router;
        this.cartService = cartService;
        this.flashMessage = flashMessage;
        this.selectedsaree = {};
        this.sareeQty = 1;
    }
    CustomerDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sareeService.getSarees().subscribe(function (data) {
            //console.log(data);
            _this.sarees = data.saree;
            //console.log(this.sarees);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    CustomerDashboardComponent.prototype.addToCart = function (saree) {
        var _this = this;
        this.selectedsaree = { id: saree._id, qty: this.sareeQty, price: saree.price };
        this.cartService.addToCart(this.selectedsaree).subscribe(function (data) {
            _this.sareeQty = 1;
            _this.flashMessage.show("Sraee added to cart", { cssClass: 'alert-success', timeout: 3000 });
        }, function (error) { return console.log(error); });
    };
    CustomerDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer-dashboard',
            template: __webpack_require__(724),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_saree_service__["a" /* SareeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_saree_service__["a" /* SareeService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], CustomerDashboardComponent);
    return CustomerDashboardComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/customer-dashboard.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 5000 });
        this.router.navigate(['/login']);
        return false;
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(725),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgottenPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgottenPasswordComponent = (function () {
    function ForgottenPasswordComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ForgottenPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgottenPasswordComponent.prototype.onResetLinkSubmit = function () {
        var _this = this;
        var user = {
            email: this.email
        };
        this.authService.forgottenPasswordUser(user).subscribe(function (data) {
            console.log("data in forgotten-password", data);
            if (data.success) {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-success',
                    timeout: 1000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Unable to send  reset link', {
                    cssClass: 'alert-danger',
                    timeout: 1000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    ForgottenPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgotten-password',
            template: __webpack_require__(726),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], ForgottenPasswordComponent);
    return ForgottenPasswordComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/forgotten-password.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(727),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/home.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                console.log(data.user);
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Logged in successfully', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                if (data.user.type == "admin") {
                    _this.router.navigate(['/admin-dashboard']);
                }
                else {
                    _this.router.navigate(['/customer-dashboard']);
                }
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(728),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/login.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(729),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileComponent);
    return ProfileComponent;
}());
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/profile.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        //Required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("Please enter a valid email", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("Registered successfully,,!! You can login now..", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show("Something went wrong..!!", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(730),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/register.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cart_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bootstrap__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bootstrap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ShoppingCartComponent = (function () {
    //amount:Number;
    function ShoppingCartComponent(http, cartService, flashMessage, router, location) {
        this.http = http;
        this.cartService = cartService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.location = location;
        this.selectedsarees = [];
        this.isDataLoading = true;
        this.isLoading = true;
        this.selectedsaree = {};
        this.sareeQty = 1;
        this.amount = {};
        // private totalamt;
        this.saree = {};
        this.name = "";
        this.image = "";
        this.price = "";
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.isDataLoading = true;
        this.selectedsarees = [];
        this.getSelectedSarees();
        this.getTotalAmount();
    };
    ShoppingCartComponent.prototype.getSelectedSarees = function () {
        var _this = this;
        this.cartService.getSelectedSarees().subscribe(function (data) {
            _this.selectedsarees = data;
            _this.getTotalAmount();
        }, function (error) { return console.log(error); }, function () { return _this.isDataLoading = false; });
    };
    ShoppingCartComponent.prototype.deleteSaree = function (saree) {
        var _this = this;
        if (window.confirm("Are you sure you want to permanently delete this item?")) {
            this.selectedsaree = { id: saree.id, qty: saree.qty };
            this.cartService.deleteSaree(this.selectedsaree).subscribe(function (res) {
                _this.flashMessage.show("Item deleted Suceesfully", { cssClass: 'alert-success', timeout: 3000 });
                _this.getSelectedSarees();
                _this.getTotalAmount();
            }, function (error) { return console.log(error); });
        }
    };
    ShoppingCartComponent.prototype.loadSaree = function (saree) {
        this.qty = saree.qty;
        this.name = saree.info.name;
        this.image = saree.info.image;
        this.price = saree.info.price;
        this.saree = saree;
    };
    ShoppingCartComponent.prototype.updateSaree = function (saree) {
        var _this = this;
        console.log("product in updateProduct", saree);
        this.selectedsaree = { id: saree.id, oldqty: saree.qty, newqty: this.qty };
        console.log("product in updateProduct selectedproduct", this.selectedsaree);
        this.cartService.updateSaree(this.selectedsaree).subscribe(function (res) {
            _this.flashMessage.show("Item Edited Suceesfully", { cssClass: 'alert-success', timeout: 3000 });
            _this.getSelectedSarees();
            _this.getTotalAmount();
        }, function (error) { return console.log(error); });
    };
    ShoppingCartComponent.prototype.getTotalAmount = function () {
        var _this = this;
        this.cartService.getTotal().subscribe(function (data) { return _this.amount = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    ShoppingCartComponent.prototype.onCheckout = function (selectedsarees, amount) {
        var _this = this;
        var basketDetails = {
            amount: this.amount,
            items: this.selectedsarees
        };
        //console.log("onCheckout method selectedsarees",selectedsarees);
        console.log("onCheckout method", basketDetails);
        this.cartService.paymentcheckout(basketDetails).subscribe(function (data) {
            console.log("data paymentcheckout", data.href);
            _this.redirectURL = data.href;
            //console.log("data paymentcheckout href",data[0].href);
            window.location.href = _this.redirectURL;
            //this.flashMessage.show("payment done Suceesfully",{cssClass:'alert-success',timeout:3000});
            //console.log("payment done Suceesfully");
        }, function (error) { return console.log(error); });
    };
    ShoppingCartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(731),
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_cart_service__["a" /* CartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_cart_service__["a" /* CartService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === 'function' && _e) || Object])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/shopping-cart.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/environment.js.map

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "#bs-example-navbar-collapse-1 ul li {\n  float: left;\n}\n\n#bs-example-navbar-collapse-1 ul li ul li {\n  float: none !important;\n}"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n<div class=\"container\">\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n\t\n</div>\n\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Add Saree</h2>\n<form (submit)=\"onSareeSubmit()\"> \n\t<div class=\"form-group\" >\n\t\t<label>Name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"sareename\" name=\"sareename\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Description</label>\n\t\t<input type=\"text\" [(ngModel)]=\"descr\" name=\"descr\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Category</label>\n\t\t<select class=\"dropdown\" (change)=\"onchange($event.target.value)\">\n\t\t\t<option selected value=\"select\"> --Select an option--</option>\n\t\t\t<option  *ngFor=\"let category of categories\"> \n\t\t\t\t{{category.name}}\n\t\t    </option>\n\t\t</select>\n\t\t<br/>\n\t\t<br/>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Images</label>\n\t\t<input type=\"file\" name=\"image\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload saree over here...\" />\n\t\t<br/>\n\t\t\n\t\t<button type=\"button\" (click)=\"upload()\">Upload Saree Image</button>\n\t</div>\t\n\t<div class=\"form-group\">\n\t\t<label>Pricing</label>\n\t\t<input type=\"text\" [(ngModel)]=\"price\" name=\"price\" class=\"form-control\">\n\t</div>\n\t<br/>\n\t<br/>\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Save Saree\">\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Cancel\">\n</form>\n"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<!-- <form id=\"frmUploader\" enctype=\"multipart/form-data\"  (submit)=\"onuploadSubmit()\">\n    <input type=\"file\" name=\"imgUploader\" multiple />\n    <br/>\n    <input type=\"submit\" name=\"submit\" id=\"btnSubmit\" class=\"btn btn-primary\" value=\"Upload new Sarees\" /> \n</form> -->\n\n<!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Upload new Sarees\" > -->\n\n\n<!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" /> -->\n\n\n\n<button type=\"button\">\n\t<a [routerLinkActive]=\"['active']\" \n       [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/addnewsaree']\">\n\n\tAdd New Saree\n\t</a>\n</button>\n\n\n\n"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "<p>\n  category works!\n</p>\n"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 rowCover\" *ngFor=\"let saree of sarees\">\n  <div class=\"row rowBorder\">\n  <!-- <div class=\"col-md-3\"><img src= \"{{saree.image}}\" style=\"width : 150px; height: 125pt;\" /></div> -->\n\n  <div class=\"col-md-3\">\n  \t<img src=\"../../../../{{saree.image}}\" style=\"width : 150px; height: 125pt;\" /></div>\n  \t<!-- {{saree.image}} -->\n  <div class=\"col-md-2\"><h3> {{saree.name}}</h3></div>\n  <div class=\"col-md-3\"><h5> {{saree.description}}</h5></div>\n  <div class=\"col-md-2\"><h3> {{saree.price}}</h3></div>\n  <div class=\"col-md-2\"><button class=\"btn btn-primary\" (click)=\"addToCart(saree)\">\n        Add to Cart </button></div>\n  </div>\n</div>\n"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default\">\n\t<div class=\"container\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n\t\t\t\t\t<span class=\"sr-only\">Toggle Navigation</span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t</button>\n\t\t\t<a class=\"navbar-brand\" href='#'>Sarees</a>\n\t\t\n\t    </div>\n\t    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\t\t\t<ul class=\"nav navbar-nav navbar-left\">\n      \t\t    <li><a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" \n      \t\t    \t[routerLink]=\"['/']\">Home </a></li>\n                \n               <li class=\"dropdown\"><a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/categories']\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Categories </a>\n                <ul class=\"dropdown-menu\">\n                        <li><a href=\"\">Banarasi Saree</a></li>\n                        <li><a href=\"\">Paithani</a></li>\n                        <li><a href=\"\">Kanchipuram Silk</a></li>\n                        <li><a href=\"\">Ilkal Saree</a></li>\n                        <li><a href=\"\">Lehenga Style Saree</a></li>\n                        <li><a href=\"\">Chanderi saree</a></li>\n                </ul>\n              </li>         \n      \t\t</ul>\n          \n      \t\t<ul class=\"nav navbar-nav navbar-right\">\n            <!-- <li><a >Dashboard </a></li> -->\n            <li><a *ngIf=\"authService.loggedIn()\"[routerLinkActive]=\"['active']\" \n              [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/profile']\">Profile </a></li>\n            <li><a *ngIf=\"authService.loggedIn()\"[routerLinkActive]=\"['active']\" \n              [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/shopping-cart']\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i> Shopping Cart </a></li> \n      \t    <li><a *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" \n              [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/login']\">Login </a></li>\n      \t\t\t<li><a *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" \n              [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/register']\">Register </a></li>\n              <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout </a></li>\n      \t\t</ul>\n      \t</div>\n      \n \t</div>\n </nav>\n \n"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Forgotten Password</h2>\n<p>Enter the email address you use to sign in to your Tesco.com account and we'll send you a link to reset your password.</p>\n<form (submit)=\"onResetLinkSubmit()\"> \n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" \n\t\tplaceholder=\"ename@example.com\">\n\t</div>\n\t\n\t\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Get reset link\"/>\n</form>"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n\t<h1> Shop your Sarees here</h1>\n\t<p class=\"lead\">`Wearing a saree was never my choice.. \n  \t\tBut his eyes were looking for traditional girl..! \n  \t\tAnd then ethnic became my favorite..!!`</p>\n\t<div>\n\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/register']\"> Register </a>\n\t\t<a class=\"btn btn-default\" [routerLink]=\"['/login']\"> Login </a>\n\t</div>\n</div>\t\n\n<div class=\"jumbotron text-center\">\n\t<img src=\"saree.jpg\"/>\n\t<img src=\"saree.jpg\" alt=\"Smiley face\" height=\"42\" width=\"42\">\n</div>\t\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\"> \n\t<div class=\"form-group\" >\n\t\t<label>Username</label>\n\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t</div>\n\t<a [routerLink]=\"['/forgotten-password']\">\n\t\t<span>I've forgotten my password</span>\n\t</a>\t\n\t<br/>\n\t<br/>\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n<div>\n\n</div>"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<h2 class=\"page-header\">{{user.name}}</h2>\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\"> Username: {{user.username}}</li>\n\t\t<li class=\"list-group-item\"> Email : {{user.email}}</li>\n\n\t</ul>\n</div>"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\"> \n\t<div class=\"form-group\">\n\t\t<label>Name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>UserName</label>\n\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t</div>\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isDataLoading==true\">\n    <h4 class=\"card-header\">Loading...</h4>\n    <div class=\"card-block text-xs-center\">\n        <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n    </div>\n</div>\n\n<div class=\"row hidden-xs-down\">\n    <h1 class=\"shopping-head\"> Your Items in Cart </h1>\n</div>\n\n<div *ngIf=\"isDataLoading==false && selectedsarees.length==0\" class=\"row center prod-name\" style=\"text-align:center\"> You have no item in your Bag. Please select sarees from the \n\t<a [routerLinkActive]=\"['active']\" [routerLink]=\"['/customer-dashboard']\" > dashboard</a></div>\n\n<div class=\"row vspace\" *ngIf=\"isDataLoading==false && selectedsarees.length>0\">\n\n\t<div class=\"col-md-12 col-xs-12 header-border hidden-xs-down\">\n\t\t<div class=\" row\">\n            <div class=\"col-md-3\"> {{selectedsarees.length}} ITEMS</div>\n            <div class=\"col-md-9\">\n            \t<div class=\"col-md-6\"> </div>\n                <!-- <div class=\"col-md-2 cell-size\"> SIZE </div> -->\n                <div class=\"col-md-3 cell-qty\"> QTY </div>\n                <div class=\"col-md-3\"> PRICE </div>\n            </div>\n         </div> \n\t</div>\n\t<div class=\"col-md-12 col-xs-12 rowCover\" *ngFor=\"let saree of selectedsarees; let index=index; let odd=odd; let even=even;\" [ngClass]=\"{ odd: odd, even: even }\">\n\t\t<div class=\"row rowBorder hidden-xs-down\" *ngIf=\"saree.info\">\n\t\t\t<div class=\"col-md-3\">\n\t\t\t\t<img src=\"{{saree.info.image}}\" style=\"width : 150px; height: 125pt;\" />\n\t\t\t</div>\n\t\t\t<div class=\"col-md-9\">\n                <div class=\"row\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 prod-name\">  {{saree.info.name | uppercase}} </div>\n                        <div class=\"col-md-4 prod-name\">  {{saree.qty }} </div>\n                        \n\n                        <div class=\"col-md-2 price-text\"> \n                        \t<span class=\"price-value\">{{saree.info.price}}</span>\n              \t\t\t</div>\n              \t\t\t\n              \t\t\t\n                    </div>\n                \n                    \n                </div>\n\n            </div>\n            <div class=\"row\">\n            <!-- <a [routerLinkActive]=\"['active']\" \n                [routerLink]=\"['/edit-product',product.info._id]\" (click)=\"modal.open();\">Edit</a> -->\n            <a (click)=\"modal.open();loadSaree(saree)\">Edit</a>\n                <!-- <a  (click)=\"modal.open();\">EditP</a> -->\n                | <a  (click)=\"deleteSaree(saree)\">Remove</a> \n            </div>        \n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"row\" *ngIf=\"isDataLoading==false && selectedsarees.length>0\">\n\t<div class=\"row price-row\">\n            <div class=\"col-md-7 col-xs-7 bold-text\"> SUBTOTAL </div>\n            <div class=\"col-md-5 col-xs-5  lbl-amount price-text\">\n                <span class=\"prod-currency\">Rs </span>\n                <span class=\"price-value price-margin\">{{amount.Total}}</span>\n            </div>\n    </div>\n   \n    <div class=\"row price-row-2\">\n            <div class=\"col-md-7 col-xs-7\">\n                <span class=\"bold-text\">Delivery Charge </span><br />\n                <span class=\"light-text\" *ngIf=\"amount.enableFreeDelivery\">\n                    You qualify for free shipping <br />\n                    because your order is over 2000 Rs\n                </span>\n            </div>\n            <div class=\"col-md-5 col-xs-5 lbl-amount price-text\" *ngIf=\"!amount.enableFreeDelivery\">\n                <span class=\"prod-currency\">Rs </span>\n                <span class=\"price-value price-margin\">{{amount.shippingPrice}}</span>\n            </div>\n            <div class=\"col-md-5 col-xs-5 free\" *ngIf=\"amount.enableFreeDelivery\">\n                <span class=\"bold-text\">FREE</span>\n            </div>\n    </div>\n    <div class=\"row price-row-3\">\n            <div class=\"col-md-7 col-xs-7\">\n                <span class=\"bolder-text\">Total Amount to Pay </span> <br />\n            </div>\n            <div class=\"col-md-5 col-xs-5 lbl-amount price-text-bold\">\n                <span class=\"prod-currency\">Rs </span>\n                <span class=\"price-value price-margin\">{{amount.amount}}</span>\n            </div>\n    </div> \n\t<!-- <div class=\"col-md-5 col-xs-5 lbl-amount price-text-bold\">\n                <span class=\"prod-currency\">$</span>\n                <span class=\"price-value price-margin\">{{amount.amount}}</span>\n    </div> -->\n\n    <div class=\"row price-row-2 row-swap\">\n        <div class=\"col-md-10 continue-shopping col-xs-12 centered top-margin\"> \n        \t<a [routerLinkActive]=\"['active']\" [routerLink]=\"['/customer-dashboard']\" > CONTINUE SHOPPING</a> </div>\n        <div class=\"col-md-2 col-xs-12 centered\"> \n            <!-- amount.amount -->\n        \t<button class=\"btn-primary btn broad\" (click)=\"onCheckout(selectedsarees,amount.amount)\"> CHECKOUT</button> \n        </div>\n\t</div>\n\n</div>\n\n\n\n\n<modal #modal>\n    <modal-header></modal-header>\n    <modal-body>\n\n        <table class=\"modal-table\">\n            <tr>\n                <td>                        \n                <div class=\"modal-prod-name\"> \n                    <span class=\"modal-name\">{{ name | uppercase }}\n                </span>\n                </div>\n                           \n                <div class=\"modal-price-text\">\n                    <span class=\"modal-prod-currency\"> Rs</span> \n                    <span class=\"modal-price-value\"> {{ price }}</span> \n                </div>\n            \n                <div class=\"modal-center\">\n                    Quantity:\n                        <select [(ngModel)]=\"qty\">\n                            <option *ngFor=\"let qty of [1,2,3,4,5]\" value={{qty}}>{{qty}}</option>\n                        </select>\n                </div>\n                <div class=\"modal-center\">\n                    <button class=\"btn btn-primary\" type=\"button\" \n                    (click)=\"modal.close();updateSaree(saree)\">Edit</button>\n                </div>\n                            \n                         <!-- [disabled]=\"!isEditing\"       \n -->\n                </td>\n            </tr>\n        </table>\n        \n    </modal-body>\n\n\n</modal>\n\n"

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(403);


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.forgottenPasswordUser = function (user) {
        console.log('in AuthService forgotten forgottenPassword', user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/forgottenPassword', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // resetUser(token){
    //   //console.log('in AuthService frsetuser',token);
    //   let headers=new Headers();
    //   headers.append('Content-Type','application/json');
    //   return this.http.get('http://localhost:3000/reset/:token',{headers:headers});
    //               .map(res=>res.json());
    // }
    AuthService.prototype.resetPassword = function (user) {
        console.log("in resetPassword service ", user.token);
        // let token=user.token;
        // console.log("user.token",token);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        //let body = JSON.stringify(user);
        //console.log("body.token",body.token);
        return this.http.post('http://localhost:3000/reset/' + user.token, user, options)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.uploadItem = function (img) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/photo', img, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getItems = function () {
        return this.http.get('http://localhost:3000/users/getitems')
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/home/vagrant/projects/saree-shoppingmain/angular-src/src/auth.service.js.map

/***/ })

},[771]);
//# sourceMappingURL=main.bundle.map