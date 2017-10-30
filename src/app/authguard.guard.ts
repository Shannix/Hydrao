import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {UserService} from './user.service';
import { PersistenceService } from 'angular-persistence';

@Injectable()
export class AuthguardGuard implements CanActivate {

constructor ( private user: UserService , private router:Router , private persistenceService: PersistenceService ){}


 canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
return true;
//if ( this.persistenceService.get('session') == 'true' ) { return true; }else{
 //if(this.user.getUserLoggedIn()){ return true; }else{
   //   this.router.navigate(['']);
     // return false; }



  }
}
