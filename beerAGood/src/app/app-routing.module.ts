import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BierListComponent} from "./bier-list/bier-list.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: 'bier', component: BierListComponent},
  {path: '', component: LoginComponent},
  // {path: 'registreren', component: UserFormCompenent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
