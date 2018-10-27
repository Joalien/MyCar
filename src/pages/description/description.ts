import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-description',
  templateUrl: 'description.html'
})

export class DescriptionPage{

  car : {marque:string, couleur:string, prix:number};

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.car = this.navParams.get("car");
  }

  dismiss(){
    this.navCtrl.pop();
  }
}
