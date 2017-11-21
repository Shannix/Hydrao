


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
import { ShoppingComponent } from './shopping/shopping.component';

import {Ng2Webstorage} from 'ng2-webstorage';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ProfileComponent } from './profile/profile.component';
import { NewProductComponent } from './new-product/new-product.component';
import { OffersComponent } from './offers/offers.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { NewAdComponent } from './new-ad/new-ad.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    DashboardComponent,
    SearchProductComponent,
    ShoppingComponent,
    SubscribeComponent,
    ProfileComponent,
    NewProductComponent,
    OffersComponent,
    MyPurchasesComponent,
    NewAdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersistenceModule,
    Ng2Webstorage,
    RouterModule.forRoot([
{
path: 'newproduct',
canActivate : [AuthguardGuard],
component : NewProductComponent
},
{
path: 'mypurchases',
canActivate : [AuthguardGuard],
component : MyPurchasesComponent
},
{path: 'offers/:id',
canActivate : [AuthguardGuard],
component: OffersComponent
},
{
path: 'shop',
component : ShoppingComponent
},
{
path: 'newad',
component : NewAdComponent
},
{
path: 'login',
component : LoginFormComponent
},
{
path: 'dashboard',
canActivate : [AuthguardGuard],
component : DashboardComponent
},
{
path: '',
component : SearchProductComponent
},
{
path: 'profile',
canActivate : [AuthguardGuard],
component : ProfileComponent
},
{
path: 'subscribe',
component : SubscribeComponent
},
{ path: '**', redirectTo: '' }

])
  ],

providers: [UserService, AuthguardGuard ],
  bootstrap: [AppComponent]
})
export class AppModule {




}
