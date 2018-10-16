import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public firstname:string;
  public lastname:string;
  public mobile:string;


  registerForm:FormGroup;

  constructor(public formBuilder:FormBuilder, public router:Router) { 
this.registerForm=formBuilder.group(
  { 
    firstname:new FormControl("",[Validators.required]),
    lastname:new FormControl("",[Validators.required]),
    mobile:new FormControl("",[Validators.required])
}
)
  }


  ngOnInit() {
  }


  postdata(data){
    console.log(data);
  }

}
