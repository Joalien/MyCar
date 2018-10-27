import {Component, Injectable} from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import {DescriptionPage} from "../description/description";
import {Car} from "../../components/car/car";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

@Injectable()
export class ListPage{

  urlBackEnd: string = "http://127.0.0.1:8001/v2/voiture";
  descending: boolean = true;

  order: number;
  selectedItem: any;
  cars$: Array<Car> = [];
  carTable: Array<Array<any>>;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    // If we navigated to this page, we will have an item available as a nav param
    // this.cars$ = navParams.get("cars");

    this.http.get<Array<Car>>(this.urlBackEnd, {responseType : 'json', }).subscribe((data: Array<Car>) => this.cars$=data);
  }

  printDescription(event, car) {
    // That's right, we're pushing to ourselves!
    let descriptionModal = this.modalCtrl.create(DescriptionPage, {car:car});
    return descriptionModal.present();
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}
