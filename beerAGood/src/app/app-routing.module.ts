import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BierListComponent} from "./bier-list/bier-list.component";
import {LoginComponent} from "./login/login.component";
import {UserFormComponent} from "./user-form/user-form.component";

const routes: Routes = [
  {path: 'bier', component: BierListComponent},
  {path: '', component: LoginComponent},
  {path: 'registreren', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
