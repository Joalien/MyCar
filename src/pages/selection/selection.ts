import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ListPage} from "../list/list";
import {Car} from "../../components/car/car";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'page-selection',
  templateUrl: 'selection.html'
})

export class SelectionPage{

  urlBackEnd: string = "http://127.0.0.1:8001/v2/voiture";
  placeholder:string="Indifférent";
  numberOfResults:number=0;

  prix: any={
    lower: 1000,
    upper: 30000
  };

  criteres: Criteres;

  categories : string[] = ["Citadine", "Berline", "SUV / 4x4", "Monospace", "Break", "Coupé / Cabriolet"];
  portes: string[] = ["2/3 portes", "4/5 portes"];
  places: number[] = [2, 3, 4, 5, 6];
  boites: string[] = ["Manuelle", "Électrique"];
  carburants: string[] = ["Essence", "diesel", "Electrique"];

  marque:string;
  origines:string[] = ["France", "Allemagne", "Japon"];
  anciennetes:number[] = [0, 1, 2, 3, 4];// années
  consommations:number[] = [0, 1, 2, 3, 4];// L/100km
  rejetsCO2:number[] = [10, 20, 30, 40, 50];// g/L


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    // If we navigated to this page, we will have an item available as a nav param
    this.criteres = new Criteres();

    this.onChange();
  }

  submit(){
    console.log(this.criteres);
    this.navCtrl.push(ListPage, {
      cars : [{couleur: "Bleu", marque: "Toyota", prix: 9500}, {couleur: "Rouge", marque: "Citroën", prix: 18500}]
    });
  }

  onChange(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };


    this.http.post(this.urlBackEnd, this.criteres).subscribe(data => console.log(data));


    this.http.get<Array<Car>>(this.urlBackEnd, {responseType : 'json', }).subscribe((data: Array<Car>) => this.numberOfResults = data.length);
  }

}


export class Criteres {

  chosen_categories:string[];
  chosen_portes: string[];
  chosen_places: string[];
  chosen_boites: string[];
  chosen_carburants: string[];

  chosen_marque: string;
  chosen_origines:string[];
  chosen_anciennetes:number[];
  chosen_consommations:number[];
  chosen_rejetsCO2:number[];

  constructor(){
    this.chosen_categories = [];
    this.chosen_portes = [];
    this.chosen_places = [];
    this.chosen_boites = [];
    this.chosen_carburants = [];

    this.chosen_marque = "";
    this.chosen_origines = [];
    this.chosen_anciennetes = [];
    this.chosen_consommations = [];
    this.chosen_rejetsCO2 = [];
  }

}
