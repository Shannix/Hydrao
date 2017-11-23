import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Http, Headers, RequestOptions} from '@angular/http';



@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

 constructor(private router:Router, private http: Http  ) { }

results: string[];


ngOnInit() {
}





}
