import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild ,Router } from '@angular/router';

import {UserComponent}from '../../user/user.component';


@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild  {

  constructor( private router: Router) { }


  // canActivate() {
  //   console.log('i am checking to see if you are logged in');
  //   return true;
  // }


  /* 

Router Guard Types:
1.canActivate
2.CanActivateChild
3.CanDeActivate
4.Resolve
5.CanLoad


  *A CanActivate guard is useful when we want to check on something before a component gets used.

  This is extremely useful for scenarios like:

 1. checking if a user is authenticated
 2. checking if a user has permission 
  

https://github.com/scotch-io/angular2-routing-course/blob/master/app/dashboard/users/dashboard-user-details.component.ts

  */

  canActivate(): boolean {
    console.log('i am checking to see if you are logged in');
    if(localStorage.getItem('username')){
      return true;
  }
  else{
      this.router.navigate(['/login'])
     }
  return false
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }

  

}
