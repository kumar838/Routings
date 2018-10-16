
import {Routes,RouterModule} from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { UserComponent } from "./user/user.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist/artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist/artist-album-list/artist-album-list.component';


import {AuthGuardService} from './shared/guards/auth-guard.service';
import {CanDeactivateService} from './shared/guards/can-deactivate.service';

const approuting:Routes=[
   // {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent,canDeactivate: [CanDeactivateService]},
    {path:'admin/:id',component:AdminComponent,canActivate:[AuthGuardService]},
    {path:'user',component:UserComponent,canActivate:[AuthGuardService]},
    {path:'logout',component:LogoutComponent},
    {path:'register',component:RegisterComponent},
    
    { path:'search', component:SearchComponent },
//  Nested Routing
      { 
        path:'artist/:artistId', component:ArtistComponent,    
          children:[
                     {path:'', redirectTo:'tracks', pathMatch:'full'},
                     {path:'tracks', component:ArtistTrackListComponent},
                     {path:'albums', component:ArtistAlbumListComponent}
                    ] 
       },

     { path:'**', component:HomeComponent }
]

export const Routing=RouterModule.forRoot(approuting); 


//export const Routing=RouterModule.forRoot(approuting,{useHash:true}); // to use # in Url


//ASYNC WAIT:
//https://medium.com/@balramchavan/using-async-await-feature-in-angular-587dd56fdc77