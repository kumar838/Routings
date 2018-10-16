import { Component, OnInit,ViewChild } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import{ MenuComponent } from '../menu/menu.component';
// import { Location } from '@angular/common';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  @ViewChild('loginForm')

  public username:string;

  public password:string;

  loginForm:FormGroup;

  constructor(public formBuilder:FormBuilder, public router:Router) { 
    this.isloggedinchk();

   MenuComponent.updateUserStatus.next(true); //for update menu bar after logout

this.loginForm=formBuilder.group(
  { 
username:new FormControl("",[Validators.required]),
password:new FormControl("",[Validators.required])
}
)
  }

  ngOnInit() {
   
  }

  isloggedinchk(){
    console.log( "value:::::" + localStorage.getItem('username'));

   if(localStorage.getItem('username')!=null){
      this.router.navigateByUrl('/admin/23');
    }
  }

  postdata(data){
    console.log(data)
    if( (data.username="kumar838") && (data.password="12345") ){
      localStorage.setItem('username',data.username);
      localStorage.setItem('password', data.password);

       // https://angular.io/api/router/NavigationExtras  (Navigation Extras)

      // this.router.navigate(['user', {data: data.username}]);    // o/p: http://localhost:4201/user;data=kumar838
      // this.router.navigate(['user', data]);    // o/p:  http://localhost:4201/user;username=kumar838;password=12345
      // this.router.navigate(['admin/30/' + JSON.stringify(data)]);  // http://localhost:4201/admin/30/%7B%22username%22:%22kumar838%22,%22password%22:%2212345%22%7D
      // this.router.navigateByUrl('/admin/'+ data.username);  //http://localhost:4202/admin/kumar838
      // this.router.navigate(['/admin/23'], { skipLocationChange: true });  //http://localhost:4202/login and admin component loaded
      // this.router.navigate(['/admin/23'], {preserveFragment: true});   // Preserve fragment from /results#top to /view#top
      // this.router.navigate(['/admin/23'], { replaceUrl: true });  //Navigate to /login
      // this.router.navigate(['/admin/23'], { queryParams: { page: 1 } }); //http://localhost:4202/admin/23?page=1
      // this.router.navigate(['/admin/23'], { fragment: 'top' });  //http://localhost:4202/admin/23#top
      // this.router.navigate(['/admin/23'], { fragment: data.username });  //http://localhost:4202/admin/23#kumar838
      // this.router.navigate(['/admin/23'], { preserveQueryParams: true }); //  http://localhost:4202/login?page1= (to) http://localhost:4202/admin/23?page1=

      this.router.navigateByUrl('/admin/23');

      // location.reload();
     }
  }


}
