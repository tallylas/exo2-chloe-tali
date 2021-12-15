import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceGestionService {

  constructor() { }

  private getInfos: Object={ Prenom: '', Nom: '', Age: '', Email: '', Commentaire: '' };

  public emitSubject(){
    return this.getInfos;
  }

  recupererInfos(firstName: string, lastName: string, age: number, email: string, commentaire: string) {

    let myObject = new InfosForm(firstName, lastName, age, email, commentaire);

    this.getInfos = myObject;
    this.emitSubject();
  }

}



export class InfosForm {
  private readonly Prenom: string;
  private readonly Nom: string;
  private readonly Age: number;
  private Email: string = '';
  private readonly Commentaire: string;

  constructor(firstName: string, lastName: string, age: number, email: string, commentaire: string)
  {
    this.Prenom = firstName;
    this.Nom = lastName;
    this.Age = age;
    this.Email = email;
    this.Commentaire = commentaire;
  }

  public get firstName(): string {
    return this.Prenom;
  }

  get lastName(): string {
    return this.Nom;
  }

  get age(): number {
    return this.Age;
  }

  get email(): string {
    return this.Email;
  }

  get commentaire(): string {
    return this.Commentaire;
  }

  set email(e:string){
    this.Email = e;
  }
}
