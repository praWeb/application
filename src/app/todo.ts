/// <reference path="./../../typings/angular2/angular2.d.ts" />

import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {LoginInput} from './login-input';

// Annotation section
@Component({
    selector: 'my-app',
    template: '<h1>Greetings from !!!</h1><login-input></login-input>',
    directives : [LoginInput]
})


// Component controller
class MyAppComponent {
  name: string;
  constructor() {
    this.name = 'Ashish Singh';
  }
}

bootstrap(MyAppComponent);
