import { Component, OnInit } from '@angular/core';
import {ServiceGestionService} from "../service-gestion.service";

@Component({
  selector: 'app-page-gestion',
  templateUrl: './page-gestion.component.html',
  styleUrls: ['./page-gestion.component.scss']
})
export class PageGestionComponent implements OnInit {

  public recupInfos: Object={ firstName: '', lastName: '', age: '', email: '', commentaire: '' };

  constructor(private sg : ServiceGestionService){}

  ngOnInit(): void {
    this.recupInfos = this.sg.emitSubject();
  }

}
