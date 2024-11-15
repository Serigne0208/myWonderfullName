import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteredList',
  standalone: true
})
export class FilteredListPipe implements PipeTransform {

  transform(list: string[], inputValue?: string): string[] {
    if (!inputValue || inputValue.trim() === '') {
      return list;
    }

    const lowercasedInput = inputValue.toLowerCase();
    return list.filter((value) => value.toLowerCase().includes(lowercasedInput));
  }

}