import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService} from './user.service';
import { PersistenceService } from 'angular-persistence';
import {BrowserModule} from '@angular/platform-browser'
import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ng2-webstorage';


@Component({

  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UserService ]

})



export class AppComponent {

  constructor( private localSt:LocalStorageService   ) {



}



}




