
import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PersistenceService } from 'angular-persistence';
import { UserService} from '../user.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']

})



export class LoginFormComponent implements OnInit {




  constructor(private router:Router , private user:UserService ,private persistenceService: PersistenceService) {

  this.persistenceService.set('session', 'false');

  }

  ngOnInit() { }



loginUser(e){

e.preventDefault();

console.log(e);

  	let username = e.target.elements[0].value;
  	let password = e.target.elements[1].value;

    if(username == 'admin' && password == 'admin') {
this.persistenceService.set('session', 'true');
this.user.setUserLoggedIn();
this.router.navigate(['dashboard']);
this.user.setUsername("haha");
console.log(this.user.getUsername());

  this.persistenceService.set('myName', 'scott');
  console.log(this.persistenceService.get('myName'));
      	}


}




}
