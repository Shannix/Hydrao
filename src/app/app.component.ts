import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService} from './user.service';
import { PersistenceService } from 'angular-persistence';


@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})



export class AppComponent {

constructor(private user:UserService , private persistenceService: PersistenceService ) {


}



  title = 'Tour of hero';

   heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];

  myHero = this.heroes[0];

newitem = "";

pushHero = function(){
	if(this.newitem != ""){

   // this.heroes.push(new Hero(33,this.newitem));
    this.newitem="ABC";

	}

}



}


 export class Hero {
  constructor(
    public id: number,
    public name: string) { }
}



export class hero{
	id: number;
	name: string;

}

