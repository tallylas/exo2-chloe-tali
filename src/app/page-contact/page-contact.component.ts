import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ServiceGestionService} from "../service-gestion.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit {

  public emailAffiche:boolean=true;

  public profileForm = this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    age:[''],
    email:['',[Validators.required,Validators.email]],
    hide:[''],
    commentaire:['',Validators.required]
  })

  constructor(
    private fb : FormBuilder,
    private sg: ServiceGestionService,
    private router : Router
  ) { }


ngOnInit(): void {}

  public hideClique() {

    this.emailAffiche=!this.emailAffiche;
    if (this.emailAffiche!==true){
      this.profileForm.removeControl('email');
    }
    else{
      this.profileForm.addControl('email',new FormControl('', [Validators.required, Validators.email]));
    }
  }

  public onSubmit(form : FormGroup){
    alert("Le formulaire est valide");

    const firstName = form.value['firstName'];
    const lastName = form.value['lastName'];
    const age = form.value['age'];
    const email = form.value['email'];
    const commentaire = form.value['commentaire'];

    this.sg.recupererInfos(firstName, lastName, age, email, commentaire);
    this.router.navigate(['/accueil']);
  }

}
