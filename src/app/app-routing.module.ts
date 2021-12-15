import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAccueilComponent} from "./page-accueil/page-accueil.component";
import {PageListeComponent} from "./page-liste/page-liste.component";
import {PageGestionComponent} from "./page-gestion/page-gestion.component";
import {Film1Component} from "./film1/film1.component";
import {Film2Component} from "./film2/film2.component";
import {Film3Component} from "./film3/film3.component";
import {Film4Component} from "./film4/film4.component";
import {Film5Component} from "./film5/film5.component";
import {PageContactComponent} from "./page-contact/page-contact.component";

const routes : Routes = [
  {path : 'accueil', component : PageAccueilComponent},
  {path : 'liste', component : PageListeComponent,
    children : [
      {path : 'film1', component : Film1Component},
      {path : 'film2', component : Film2Component},
      {path : 'film3', component : Film3Component},
      {path : 'film4', component : Film4Component},
      {path : 'film5', component : Film5Component}
]
},
  {path : 'gestion', component : PageGestionComponent},
  {path : 'contact', component : PageContactComponent},
  {path : '', component : PageAccueilComponent},
  {path : '**', component : PageAccueilComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
