import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject'; //for update menu bar after login and logout(1)
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  id:any=30;
  login:any;
  public static updateUserStatus: Subject<boolean> = new Subject(); //for update menu bar after login and logout(2)
  constructor() {
     
    //  for update menu bar after login and logout (3). and import menu component in login and admin components
       MenuComponent.updateUserStatus.subscribe(res => {
           this.login=localStorage.getItem('username');
        })
    //
     }

  ngOnInit() {
       this.islogeedin();
  }

islogeedin(){
       this.login=localStorage.getItem('username');
       
    }

 }


 // https://stackoverflow.com/questions/44069004/angular-2-after-successful-login-change-my-login-component-in-header-to-user
