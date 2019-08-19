import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component"
import { SignupComponent } from './signup/signup.component';
import { WallComponent } from './wall/wall.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"wall",component:WallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
