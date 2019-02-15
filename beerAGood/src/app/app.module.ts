import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BierListComponent } from './bier-list/bier-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {UserFormComponent} from "./user-form/user-form.component";
import { LoginComponent } from './login/login.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import {LocalStorageService} from "./LocalStorageService";
import { HomepageComponent } from './homepage/homepage.component';
import { RateComponent } from './rate/rate.component';
import { GeschiedenisComponent } from './geschiedenis/geschiedenis.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    BierListComponent,
    UserFormComponent,
    LoginComponent,
    HomepageComponent,
    RateComponent,
    GeschiedenisComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
