import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-pannels',
  templateUrl: './pannels.component.html',
  styleUrls: ['./pannels.component.css']
})
export class PannelsComponent implements OnInit {

 constructor(private router:Router) { }

  ngOnInit() {
  }



ViewroomDetail = function(index : any ) {

 this.router.navigate(['room' , index ]);

}







}
