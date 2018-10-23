import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ListPage} from "../list/list";


@Component({
  selector: 'page-selection',
  templateUrl: 'selection.html'
})

export class SelectionPage{

  prix: any={
    lower: 1000,
    upper: 30000
  };

  voitures: Voitures;

  categories : string[] = ["Citadine", "Berline", "SUV / 4x4", "Monospace", "Break", "Coupé / Cabriolet"];
  couleurs: string[] = ['Jaune', 'Gris', 'Rouge', 'Noir', 'Bleu', 'Vert'];
  portes: string[] = ["2/3 portes", "4/5 portes"];
  boites: string[] = ["Manuelle", "Électrique"];
  carburants: string[] = ["Essence", "diesel", "Electrique"];
  places: number[] = [2, 3, 4, 5, 6];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.voitures = new Voitures();
  }

  submit(){
      console.log(this.voitures);
      this.navCtrl.push(ListPage);
    }


}


class Voitures {

  chosen_categories:string[];
  chosen_couleurs: string[];
  chosen_portes: string[];
  chosen_boites: string[];
  chosen_carburants: string[];
  chosen_places: string[];
  chosen_marques: string;

  constructor(){
    this.chosen_categories=[];
    this.chosen_couleurs=[];
    this.chosen_portes=[];
    this.chosen_boites=[];
    this.chosen_carburants=[];
    this.chosen_places=[];
    this.chosen_marques="";
  }

}
