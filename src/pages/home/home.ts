import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SelectionPage} from "../selection/selection";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  navigate(event) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SelectionPage);
  }

}
