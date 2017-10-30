


import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchProductComponent } from './search-product/search-product.component';

import {AuthguardGuard} from './authguard.Guard';
import { UserService} from './user.service';
import { PersistenceModule } from 'angular-persistence';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    DashboardComponent,
    SearchProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersistenceModule,
    RouterModule.forRoot([
{
path: '',
component : LoginFormComponent
},
{
path: 'dashboard',
canActivate : [AuthguardGuard],
component : DashboardComponent
},
{
path: 'search',
canActivate : [AuthguardGuard],
component : SearchProductComponent
},
{ path: '**', redirectTo: '' }

])
  ],
  //providers: [UserService, AuthguardGuard ],
providers: [UserService, AuthguardGuard ],
  bootstrap: [AppComponent]
})
export class AppModule {




}
