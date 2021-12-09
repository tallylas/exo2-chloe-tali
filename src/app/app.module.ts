import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageListeComponent } from './page-liste/page-liste.component';
import { PageGestionComponent } from './page-gestion/page-gestion.component';
import { ListeComponent } from './liste/liste.component';
import { Film1Component } from './film1/film1.component';
import { Film2Component } from './film2/film2.component';
import { Film3Component } from './film3/film3.component';
import { Film4Component } from './film4/film4.component';
import { Film5Component } from './film5/film5.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    PageAccueilComponent,
    PageListeComponent,
    PageGestionComponent,
    ListeComponent,
    Film1Component,
    Film2Component,
    Film3Component,
    Film4Component,
    Film5Component,
    PageContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
