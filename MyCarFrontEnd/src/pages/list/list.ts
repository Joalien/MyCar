import {Component, Injectable} from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import {DescriptionPage} from "../description/description";
import {Car} from "../../components/car/car";
import {HttpClient} from "@angular/common/http";
import {Globals} from "../../app/global";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

@Injectable()
export class ListPage{

  descending: boolean = true;
  property: string = 'prix';

  order: number;
  selectedItem: any;
  cars$: Array<Car> = [];

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public global:Globals) {
    // If we navigated to this page, we will have an item available as a nav param
    this.http.post(this.global.urlBackEnd+"cars", navParams.get("requirement"), this.global.httpOptions).subscribe(
      (data:Array<Car>) => this.cars$=data);

  }

  printDescription(event, car) {
    // That's right, we're pushing to ourselves!
    let descriptionModal = this.modalCtrl.create(DescriptionPage, {car:car});
    return descriptionModal.present();
  }

  sort(property){
    this.descending = this.property != property ? true : !this.descending;
    this.property = property;
    this.order = this.descending ? 1 : -1;
  }

}
