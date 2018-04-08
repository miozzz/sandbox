webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-rows: 10mm auto;\n        grid-template-rows: 10mm auto;\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n        grid-template-areas: 'form' 'map';\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:host > form{\n    -ms-grid-row:1;\n    -ms-grid-column:1;\n    grid-area:form;\n    padding:2mm;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: auto 52mm 50mm 8mm;\n        grid-template-columns: auto 52mm 50mm 8mm;\n}\n\n:host > form > h3{\n    margin:0;\n    \n}\n\n:host > form > div {\n    margin:auto;\n    font-size:12px;\n}\n\n:host > form > div > *{\n    vertical-align: middle;\n    display: inline-block;\n}\n\n:host > form > button {\n   padding:0;\n   background:transparent;\n   border:none;\n   cursor:pointer;\n   margin-left:1mm;\n   width:7mm;\n}\n\n:host > form > button > img{\n    width:6mm;\n    height:100%;\n}\n\n:host > div{\n    -ms-grid-row:2;\n    -ms-grid-column:1;\n    grid-area:map;\n    background:whitesmoke;\n}\n\n@media screen and (max-width: 750px) {\n    :host{\n        display: -ms-grid;\n        display: grid;\n        -ms-grid-rows: 20mm auto;\n            grid-template-rows: 20mm auto;\n    }\n    :host > form{\n        -ms-grid-rows: 1fr 1fr;\n            grid-template-rows: 1fr 1fr;\n        -ms-grid-columns: 52mm 60mm auto 20mm;\n            grid-template-columns: 52mm 60mm auto 20mm;\n            grid-template-areas: 'title title title button' 'start end none button';\n\n    }\n    :host > form > h3{\n        -ms-grid-row: 1;\n        -ms-grid-column: 1;\n        -ms-grid-column-span: 3;\n        grid-area: title;\n\n    }\n    :host > form > div[name=\"start\"] {\n        -ms-grid-row: 2;\n        -ms-grid-column: 1;\n        grid-area: start;\n    }\n    :host > form > div[name=\"end\"] {\n        -ms-grid-row: 2;\n        -ms-grid-column: 2;\n        grid-area: end;\n    }\n    :host > form > button {\n        -ms-grid-row: 1;\n        -ms-grid-row-span: 2;\n        -ms-grid-column: 4;\n        grid-area: button;\n       width:75%;\n    }\n    :host > form > button > img {\n   \n       width:100%;\n    }\n  }\n\n@media screen and (max-width: 500px) {\n    :host{\n        display: -ms-grid;\n        display: grid;\n        -ms-grid-rows: 30mm auto;\n            grid-template-rows: 30mm auto;\n    }\n    :host > form{\n        -ms-grid-rows: 1fr 1fr 1fr;\n            grid-template-rows: 1fr 1fr 1fr;\n        -ms-grid-columns: auto 20mm;\n            grid-template-columns: auto 20mm;\n            grid-template-areas: 'title title' 'start button' 'end button';\n\n    }\n    :host > form > h3{\n        -ms-grid-row: 1;\n        -ms-grid-column: 1;\n        -ms-grid-column-span: 2;\n        grid-area: title;\n\n    }\n    :host > form > div{\n        margin-left:2mm;\n    }\n    :host > form > div[name=\"start\"] {\n        -ms-grid-row: 2;\n        -ms-grid-column: 1;\n        grid-area: start;\n    }\n    :host > form > div[name=\"end\"] {\n        -ms-grid-row: 3;\n        -ms-grid-column: 1;\n        grid-area: end;\n    }\n    :host > form > button {\n        -ms-grid-row: 2;\n        -ms-grid-row-span: 2;\n        -ms-grid-column: 2;\n        grid-area: button;\n       width:75%;\n    }\n    :host > form > button > img {\n   \n       width:100%;\n    }\n  }\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form #mapForm=\"ngForm\">\n    <h3>Map of Philippine Earthquakes</h3>\n    <div name=\"start\">\n        <label for=\"name\">Start Date</label>\n        <input type=\"date\" required name=\"startdate\" [(ngModel)]=\"startdate\">\n    </div>\n    <div name=\"end\">\n        <label for=\"name\">End Date</label>\n        <input type=\"date\" required name=\"enddate\" [(ngModel)]=\"enddate\">\n    </div>\n    <button type=\"submit\" (click)=\"plotQuakes()\">\n        <img src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM0LjY1MiAzNC42NTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM0LjY1MiAzNC42NTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTUuNTI5LDMyLjg1NUM2Ljk2NiwzMi44NTUsMCwyNS44ODksMCwxNy4zMjZDMCw4Ljc2Myw2Ljk2NiwxLjc5NywxNS41MjksMS43OTcgICAgYzguNTYzLDAsMTUuNTI5LDYuOTY3LDE1LjUyOSwxNS41MjljMCwwLjQ5LTAuMzk3LDAuODg4LTAuODg4LDAuODg4Yy0wLjQ5LDAtMC44ODgtMC4zOTctMC44ODgtMC44ODggICAgYzAtNy41ODQtNi4xNy0xMy43NTUtMTMuNzU0LTEzLjc1NWMtNy41ODUsMC0xMy43NTUsNi4xNzEtMTMuNzU1LDEzLjc1NWMwLDcuNTg0LDYuMTcsMTMuNzU0LDEzLjc1NSwxMy43NTQgICAgYzQuODUyLDAsOS4zOTctMi42MDEsMTEuODYyLTYuNzg3YzAuMjQ5LTAuNDIzLDAuNzkzLTAuNTYyLDEuMjE1LTAuMzE0YzAuNDIyLDAuMjQ4LDAuNTYyLDAuNzkyLDAuMzE1LDEuMjE1ICAgIEMyNi4xMzksMjkuOTE5LDIxLjAwNywzMi44NTUsMTUuNTI5LDMyLjg1NXoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGQ9Ik0zMC4xNywxOC4yMTRjLTAuMTUzLDAtMC4zMDktMC4wNC0wLjQ1LTAuMTIzbC01LjU2MS0zLjI4NGMtMC40MjItMC4yNDktMC41NjItMC43OTMtMC4zMTMtMS4yMTUgICAgYzAuMjUtMC40MjIsMC43OTQtMC41NjIsMS4yMTYtMC4zMTJsNC44NTIsMi44NjVsMy4xMjMtNC40NzNjMC4yODEtMC40MDIsMC44MzQtMC41LDEuMjM1LTAuMjJjMC40MDIsMC4yOCwwLjUsMC44MzMsMC4yMiwxLjIzNSAgICBsLTMuNTk0LDUuMTQ2QzMwLjcyNiwxOC4wOCwzMC40NTEsMTguMjE0LDMwLjE3LDE4LjIxNHoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K\"\n        />\n    </button>\n</form>\n<div id=\"phMap\" style=\"height: 100%;\"></div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_chart_obj__ = __webpack_require__("./src/modules/chart-obj.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_geo_json__ = __webpack_require__("./src/modules/geo-json.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(http, geojson, geoparser) {
        this.http = http;
        this.geojson = geojson;
        this.geoparser = geoparser;
        this.AmCharts = window['AmCharts'];
        this.startdate = "2014-01-01";
        this.enddate = "2014-02-01";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.chart = this.makeChart();
    };
    AppComponent.prototype.plotQuakes = function () {
        var _this = this;
        this.geojson.getData(this.startdate, this.enddate).subscribe(function (data) {
            var newData = _this.geoparser.toAmChart(data);
            _this.chart.dataProvider.images = newData;
            _this.chart.validateData();
        });
    };
    AppComponent.prototype.openTab = function () {
        console.log('a');
    };
    AppComponent.prototype.makeChart = function () {
        return this.AmCharts.makeChart("phMap", __WEBPACK_IMPORTED_MODULE_2__modules_chart_obj__["a" /* chartobj */]);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__modules_geo_json__["a" /* GeoJson */], __WEBPACK_IMPORTED_MODULE_3__modules_geo_json__["b" /* GeoParser */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__modules_geo_json__["a" /* GeoJson */], __WEBPACK_IMPORTED_MODULE_3__modules_geo_json__["b" /* GeoParser */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/modules/chart-obj.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chartobj; });
var chartobj = {
    type: "map",
    pathToImages: "http://www.amcharts.com/lib/3/images/",
    addClassNames: true,
    fontSize: 15,
    color: "#000000",
    projection: "mercator",
    backgroundAlpha: 1,
    backgroundColor: "rgba(92,124,153,0)",
    dataProvider: {
        map: "philippinesLow",
        getAreasFromMap: true,
        images: []
    },
    balloon: {
        enabled: false
    },
    areasSettings: {
        color: "rgba(70,70,70,1)",
        outlineColor: "#282828",
        rollOverOutlineColor: "#282828",
        outlineThickness: 0.2
    },
    imagesSettings: {
        color: "#e42a2abb",
        selectedColor: "#e42a2a",
        fixedSize: false,
        rollOverBrightness: 20,
        selectedOutlineColor: "#181818",
        bringForwardOnHover: true,
        descriptionWindowBottom: 15,
        descriptionWindowLeft: 10
    },
    zoomControl: {
        zoomControlEnabled: true,
        homeButtonEnabled: true,
        panControlEnabled: false,
        right: 15,
        bottom: 15,
        minZoomLevel: 0.25,
        maxZoomLevel: 32,
        gridHeight: 100,
        gridAlpha: 0.1,
        gridBackgroundAlpha: 0,
        gridColor: "#FFFFFF",
        draggerAlpha: 1,
        buttonCornerRadius: 2,
        buttonSize: 20,
        zoomFactor: 1.5
    }
};


/***/ }),

/***/ "./src/modules/geo-json.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GeoParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeoJson = /** @class */ (function () {
    function GeoJson(http) {
        this.http = http;
    }
    GeoJson.prototype.generateUrl = function (start, end) {
        var coordinates = [13, 124];
        var radius = '900';
        var format = "geojson";
        var starttime = start;
        var endtime = end;
        var baseUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?";
        var ret = baseUrl + "format=" + format + "&starttime=" + starttime +
            ("&endtime=" + endtime + "&latitude=" + coordinates[0]) +
            ("&longitude=" + coordinates[1] + "&maxradiuskm=" + radius);
        return ret;
    };
    GeoJson.prototype.getData = function (start, end) {
        var url = this.generateUrl(start, end);
        return this.http.get(url);
    };
    GeoJson = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GeoJson);
    return GeoJson;
}());

var GeoParser = /** @class */ (function () {
    function GeoParser() {
    }
    GeoParser.prototype.getItemFromFeature = function (_a) {
        var geometry = _a.geometry, properties = _a.properties;
        return {
            latitude: geometry.coordinates[1],
            longitude: geometry.coordinates[0],
            height: this.magnitudeToRadius(properties.mag),
            width: this.magnitudeToRadius(properties.mag),
            title: "",
            description: this.formatDescription(properties),
            type: "circle"
        };
    };
    GeoParser.prototype.magnitudeToRadius = function (magnitude) {
        return 20 * (magnitude - this.minMag);
    };
    GeoParser.prototype.formatDescription = function (properties) {
        var date = new Date(properties.time);
        var dateStr = date.toString().split('(')[0];
        var description = "\n        <div class=\"infoBox\">\n            <h3>" + properties.title + "</h3>\n            <label><span>Magnitude: </span><span>" + properties.mag + "</span></label>\n            <label><span>Date: </span><span>" + dateStr + "</span></label>\n        </div>\n        ";
        return description;
    };
    GeoParser.prototype.toAmChart = function (data) {
        var _this = this;
        console.log(JSON.stringify(data.features[0]));
        var stack = [];
        this.minMag = 5;
        data.features.forEach(function (feature) {
            var mag = parseInt(feature.properties.mag);
            if (mag < _this.minMag)
                _this.minMag = mag;
            stack.push(_this.getItemFromFeature(feature));
        });
        console.log('minMag', this.minMag);
        return stack;
    };
    return GeoParser;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map