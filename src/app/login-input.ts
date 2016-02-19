/// <reference path="./../../typings/angular2/angular2.d.ts" />
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {NgForm}    from 'angular2/common';
import {Login} from './wedding';

@Component({
	selector: 'login-input',
	templateUrl : 'src/app/html/login-form.html'
})


export class LoginInput{
	
	data = new Login("prasanna","pavan");
	
	submitData(){
		console.log(this.data.username);
	}

}



