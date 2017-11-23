


import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {AuthguardGuard} from './authguard.Guard';
import { UserService} from './user.service';
import { PersistenceModule } from 'angular-persistence';
import { ShoppingComponent } from './shopping/shopping.component';

import {Ng2Webstorage} from 'ng2-webstorage';
import { PannelsComponent } from './pannels/pannels.component';
import { RoomsComponent } from './rooms/rooms.component';
import {HttpClientModule} from '@angular/common/http';
import { RoomComponent } from './room/room.component';


import { Http, RequestOptions } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    DashboardComponent,
    PannelsComponent,
    RoomsComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersistenceModule,
    Ng2Webstorage,
    HttpClientModule,
    RouterModule.forRoot([
{
path: 'pannels',
component : PannelsComponent
},
{path: 'room/:id',
component: RoomComponent
},
{
path: 'dashboard',
component : DashboardComponent
},
{
path: '',
component : DashboardComponent
},
{ path: '**', redirectTo: '' }

])
  ],

providers: [UserService, AuthguardGuard ],
  bootstrap: [AppComponent]
})
export class AppModule {




}
