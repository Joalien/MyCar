import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FourchettePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'fourchette',
})
export class FourchettePipe implements PipeTransform {

  transform(items: any[], prix:any): any[] {
    if(!items) return [];
    if(!prix) return items;
    return items.filter( it => {
      return (it.prix >= prix.lower && it.prix <= prix.upper);
    });
  }
}
