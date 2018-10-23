import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Observable} from "rxjs";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage{
  descending: boolean = true;

  order: number;
  selectedItem: any;
  voitures$: Array<{marque: string, prix: number, couleur: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.voitures$ = [];

    // Observable<voiture[]> voitures$ = this.http.get('mon-back-end').map((res:Response) => res.json() as Voiture[]).catch(this.handleError);

  }

  itemTapped(event, voiture) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      voiture: voiture
    });
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}
