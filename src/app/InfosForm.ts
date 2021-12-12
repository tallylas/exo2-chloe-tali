import { Injectable } from '@angular/core';

//CLASSE INUTILE

@Injectable({
  providedIn: 'root'
})
export class ServiceGestionService {

  infos: ServiceGestionService | undefined;

  constructor() {
  }

  public saveInfos(dataSg : ServiceGestionService){
    this.infos = dataSg;
  }

}

export class InfosForm {
  private _firstName: string;
  private _lastName: string;
  private _age: number;
  private _email: string = '';
  private _commentaire: string;

  constructor(firstName: string, lastName: string, age: number, email: string, commentaire: string)
  {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._email = email;
    this._commentaire = commentaire;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get commentaire(): string {
    return this._commentaire;
  }

  set commentaire(value: string) {
    this._commentaire = value;
  }

}
