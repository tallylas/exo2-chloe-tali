import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceGestionService {

  constructor() { }

  private getInfos: Object={ firstName: '', lastName: '', age: '', email: '', commentaire: '' };

  public emitSubject(){
    return this.getInfos;
  }

  recupererInfos(firstName: string, lastName: string, age: string, email: string, commentaire: string) {
    const myObject = {
      firstName: firstName,
      lastName: lastName,
      age: age.toString(),
      email: email,
      commentaire: commentaire
    };
    this.getInfos = myObject;
    this.emitSubject();
  }

}
