import { Component, OnInit } from '@angular/core';
import {ServiceGestionService} from "../service-gestion.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-page-gestion',
  templateUrl: './page-gestion.component.html',
  styleUrls: ['./page-gestion.component.scss']
})
export class PageGestionComponent implements OnInit {

  //constructor(private sg : ServiceGestionService){}
  constructor(){}

  ngOnInit(): void {
    //alert(this.sg.emitSubject());
  }

}
