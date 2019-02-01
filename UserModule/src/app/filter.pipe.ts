import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchUser: string): any[] {
    if(!items) return [];
    if(!searchUser) return items;
searchUser = searchUser.toLowerCase();
return items.filter( it => {
      return it.userName.toLowerCase().includes(searchUser);
    });
   }
}