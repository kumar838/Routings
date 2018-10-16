import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, Params} from '@angular/router';

import{ MenuComponent } from '../menu/menu.component'; // for update menu bar after login

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  username;
  password;

  params;

  constructor(public router:Router,public activatedRoute:ActivatedRoute) {

    MenuComponent.updateUserStatus.next(true); //for update menu bar after login

    this.params=this.activatedRoute.snapshot.paramMap.get('id');  // getting parameter /:id

//     url: http://localhost:4201/admin/23


    console.log(this.params);   // 23

    console.log(this.router.url); // /admin/23

    console.log(this.router.routerState.snapshot.url); // /admin/23
    
    console.log(window.location.href);  //http://localhost:4201/admin/23

    console.log(this.activatedRoute.snapshot.url[0].path);  // admin

    console.log(this.activatedRoute.snapshot.url[1].path); // 23

    console.log(this.activatedRoute.snapshot.queryParamMap); //ParamsAsMap {params: {…}}

    console.log(this.activatedRoute.snapshot.params); // {id: "23"}

    console.log(this.activatedRoute.snapshot.params.id); //23


    
    // onSearch(term:string) {
    //   this.router.navigate(['search', {term: term}]);    //  localhost:4200/search;term=U2
    //  this.router.navigate(['search', term]);        //  localhost:4200//search/Foo
 
    // }

    

this.username= localStorage.getItem('username');
this.password= localStorage.getItem('password');

   }

  ngOnInit() {

  }



}
