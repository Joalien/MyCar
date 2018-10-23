import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], terms:string[], property:string): any[] {
    if(!items) return [];
    if(terms.length==0) return items;
    for(var term in terms) term = term.toLowerCase();
    return items.filter( it => {
      return it[property].toLowerCase().includes(terms); // only filter country name
    });
  }
}
