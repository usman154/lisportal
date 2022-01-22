import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter',
    pure: false
})
export class SearchFilterPipe implements PipeTransform {
    transform(items, filter): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        filter = filter.toLowerCase();
        return items.filter(function(obj) {
            return Object.keys(obj).some(function(key) {
              return obj[key].toString().toLowerCase().includes(filter);
            })
          });
    }
}