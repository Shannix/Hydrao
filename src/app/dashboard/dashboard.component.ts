import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { PersistenceService } from 'angular-persistence';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private user:UserService , private persistenceService: PersistenceService) { }


  ngOnInit() {
  }

}
