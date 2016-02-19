/// <reference path="./../../typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var login_input_1 = require('./login-input');
// Annotation section
var MyAppComponent = (function () {
    function MyAppComponent() {
        this.name = 'Ashish Singh';
    }
    MyAppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>Greetings from !!!</h1><login-input></login-input>',
            directives: [login_input_1.LoginInput]
        })
    ], MyAppComponent);
    return MyAppComponent;
})();
browser_1.bootstrap(MyAppComponent);
