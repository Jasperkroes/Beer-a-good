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
import { AchievementsComponent } from './achievements/achievements.component';
import { GeschiedenisComponent } from './geschiedenis/geschiedenis.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarBotComponent } from './nav-bar-bot/nav-bar-bot.component';
import { LocatieListComponent } from './locatie-list/locatie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BierListComponent,
    UserFormComponent,
    LoginComponent,
    HomepageComponent,
    RateComponent,
    AchievementsComponent,
    GeschiedenisComponent,
    NavbarComponent,
    NavBarBotComponent,
    LocatieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
