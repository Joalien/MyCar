import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ListPage} from "../list/list";
import {HttpClient} from "@angular/common/http";
import {Globals} from "../../app/global";


@Component({
  selector: 'page-selection',
  templateUrl: 'selection.html'
})

export class SelectionPage{

  placeholder:string="Indifférent";
  numberOfResults:number=0;
  prix:any={lower:1000, upper:50000};

  requirement: Requirement;


  remainingCars: Array<Map<string, number>>;

  // categories : Map<string, number>[] = [];
  // portes: Map<string, number>[] = [];
  // places: Map<string, number>[] = [];
  // boites: Map<string, number>[] = [];
  // carburants: Map<string, number>[] = [];
  //
  // origines: Map<string, number>[] = [];
  // anciennetes: Map<string, number>[] = [];// années
  // consommations: Map<string, number>[] = [];// L/100km
  // co2s: Map<string, number>[] = [];// g/L


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public global:Globals) {
    // If we navigated to this page, we will have an item available as a nav param
    this.requirement = new Requirement();

    this.onChange();
  }

  submit(){
    this.updatePrix(this.requirement);
    this.navCtrl.push(ListPage, {requirement:this.requirement});
  }

  onChange(){
    this.updatePrix(this.requirement);
    this.http.post<number>(this.global.urlBackEnd+"numberofcars", this.requirement, this.global.httpOptions).subscribe((data: number) => this.numberOfResults = data);
    this.http.post(this.global.urlBackEnd+"numberofrequirement", this.requirement, this.global.httpOptions).subscribe((data: any) => {
      this.remainingCars = data;
      console.log(this.remainingCars);
    });
    console.log(this.requirement);
  }

  updatePrix(c:Requirement){
    c.prix[0] = this.prix.lower;
    c.prix[1] = this.prix.upper;
    if(c.marque[0]=="") c.marque=[];
  }

}


export class Requirement {

  categorie:string[];
  portes: string[];
  places: string[];
  boite: string[];
  carburant: string[];

  marque: string[];
  origine:string[];
  anciennete:number[];
  consommation:number[];
  co2:number[];

  prix : number[];

  constructor(){
    this.categorie = [];
    this.portes = [];
    this.places = [];
    this.boite = [];
    this.carburant = [];

    this.marque = [];
    this.origine = [];
    this.anciennete = [];
    this.consommation = [];
    this.co2 = [];
    this.prix = []
  }

}
