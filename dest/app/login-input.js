var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/// <reference path="./../../typings/angular2/angular2.d.ts" />
var core_1 = require('angular2/core');
var wedding_1 = require('./wedding');
var LoginInput = (function () {
    function LoginInput() {
        this.data = new wedding_1.Login("prasanna", "pavan");
    }
    LoginInput.prototype.submitData = function () {
        console.log(this.data.username);
    };
    LoginInput = __decorate([
        core_1.Component({
            selector: 'login-input',
            templateUrl: 'src/app/html/login-form.html'
        })
    ], LoginInput);
    return LoginInput;
})();
exports.LoginInput = LoginInput;
