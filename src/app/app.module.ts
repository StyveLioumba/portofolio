import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { CompetenceComponent } from './components/competence/competence.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { CompetenceItemComponent } from './components/competence-item/competence-item.component';
import {FilterPipe} from "./services/filter.pipe";
import { ProjetItemComponent } from './components/projet-item/projet-item.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {NgxTypedJsModule} from "ngx-typed-js";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent,
    MainComponent,
    HeaderComponent,
    CompetenceComponent,
    ProjectComponent,
    ContactComponent,
    CompetenceItemComponent,
    FilterPipe,
    ProjetItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        NgxTypedJsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
