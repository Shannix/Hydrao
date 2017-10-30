import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService} from '../user.service';
import { PersistenceService } from 'angular-persistence';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {

  constructor( private router:Router , private user:UserService , private persistenceService: PersistenceService ) {   }

  ngOnInit() {

  }

 UserName : string = this.persistenceService.get('myName');


SearchUser(e){
         e.preventDefault();
  	let search = e.target.elements[0].value;
    this.router.navigate(['search']);
}




}
