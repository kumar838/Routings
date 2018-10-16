import { Component, OnInit } from '@angular/core';
import {Routes,RouterModule,Router} from "@angular/router";


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {

    this.logout();
  }

  logout() {
      console.log('You logedout out successfully');
      localStorage.removeItem('username')
      this.router.navigate(['/login'])
      }

}
