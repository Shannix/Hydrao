import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Headers, RequestOptions} from '@angular/http';


import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

 constructor(private router:Router, private http: Http ) { }


results: string[];

 ngOnInit(): void {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-api-key', `L1jyBhWpjl114hlrBTvFV8EAoy4zSnWZ8X8BZpYB`);
        const options = new RequestOptions({headers: headers});

this.http.get("https://api.hydrao.com/devices/0b473633-38383031-00450020/events?rangeMinId=00000000000001&rangeMaxId=00020000000000&type=shower",options).subscribe(data => {
      console.log("Got Data");
      this.results = data['results'];
    });

    }


}
