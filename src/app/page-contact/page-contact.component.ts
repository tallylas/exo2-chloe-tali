import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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

  constructor(private fb : FormBuilder){

  }


ngOnInit(): void {
  }

  public hideClique() {

    this.emailAffiche=!this.emailAffiche;
    if (this.emailAffiche!==true){
      this.profileForm.removeControl('email');
    }
    else{
      this.profileForm.addControl('email',new FormControl('', [Validators.required, Validators.email]));
    }
  }
  public onSubmit(){
    alert("le formulaire est valide");
  }

}
