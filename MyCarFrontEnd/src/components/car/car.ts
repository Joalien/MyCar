import { Component } from '@angular/core';

/**
 * Generated class for the CarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'car',
  templateUrl: 'car.html'
})
export class Car {

  id: number;
  categorie: string;
  portes: string;
  places: string;
  boite: string;
  carburant: string;

  marque: string;
  origine: string;
  anciennete: string;
  consommation: string;
  co2: string;

  pays: string;
  zone: string;

  prix:number;

  constructor(){

  }
}
