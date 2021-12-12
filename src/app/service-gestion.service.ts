import { Injectable } from '@angular/core';
import {firstValueFrom, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceGestionService {

  constructor(private myObject : Object) { }

  //private getInfos : Object;
  private getInfos: Object={ firstName: '', lastName: '', age: '', email: '', commentaire: '' };

  /*public getInfos(): Object {
    return this.getInfos;
  }

  public setInfos(value: Object) {
    this.getInfos = value;
  }*/

  public emitSubject(){
    //const url : string = "bla";
    return this.getInfos;
  }

  recupererInfos(firstName: string, lastName: string, age: number, email: string, commentaire: string) {
    const myObject = {
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      commentaire: ''
    };
    myObject.firstName = firstName;
    myObject.lastName = lastName;
    myObject.age = age.toString();
    myObject.email = email;
    myObject.commentaire = commentaire;
    this.getInfos = myObject;
    this.emitSubject();
  }

  //public response : any

  /*public async ngOnInit(){
    const obs$ : Observable<any> = this.serviceGestionService.recupererInfos();
    this.response = await firstValueFrom (obs$);
  }*/

}

//on crée une variable service
//on la met dans les champs du formulaire
//comme deezer, dans le constructeur on appelle le service
//on fait la variable.profileForm.get.firstname.value
//et on l'affiche
