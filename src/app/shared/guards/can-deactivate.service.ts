import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import {LoginComponent} from '../../login/login.component';

import {RegisterComponent} from '../../register/register.component';

@Injectable()
export class CanDeactivateService  implements CanDeactivate <LoginComponent>{

  constructor() { }

  canDeactivate(component: LoginComponent): boolean {
    if (component.loginForm.dirty)  {
        return confirm('Are you sure you want to discard your changes?');
    }
    return true; 
}

}
