import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ListPage} from "../list/list";
import {HttpClient, HttpHeaders} from "@angular/common/http";
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

  categories : string[] = ["Citadine", "Berline", "4X4 / SUV", "Monospace", "Break", "Coupé / Cabriolet"];
  portes: string[] = ["2/3 portes", "4/5 portes"];
  places: number[] = [2, 3, 4, 5, 6];
  boites: string[] = ["Manuelle", "Électrique"];
  carburants: string[] = ["Essence", "Diesel", "Electrique"];

  origines:string[] = ["France", "Allemagne", "Japon"];
  anciennetes:number[] = [0, 1, 2, 3, 4];// années
  consommations:number[] = [0, 1, 2, 3, 4];// L/100km
  co2s:number[] = [10, 20, 30, 40, 50];// g/L

  numberOfCarsRemaining : any = {};


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public global:Globals) {
    // If we navigated to this page, we will have an item available as a nav param
    this.requirement = new Requirement();

    this.onChange();
  }

  submit(){
    this.updatePrix(this.requirement);
    this.navCtrl.push(ListPage, {criteres:this.requirement});
  }

  onChange(){
    this.updatePrix(this.requirement);
    this.http.post<number>(this.global.urlBackEnd+"numberofcars", this.requirement, this.global.httpOptions).subscribe((data: number) => this.numberOfResults = data);
    this.http.post<any>(this.global.urlBackEnd+"numberofrequirement", this.requirement, this.global.httpOptions).subscribe((data: any) => {

      for(let d in Object.keys(data)) {
        this. = Object.keys(data['categorie'])
      }
    });
    console.log(this.numberOfCarsRemaining);
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
