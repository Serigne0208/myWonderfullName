import { Component, input, Input, model, signal } from '@angular/core';

import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { BoldSearchTextDirective } from '../directives/bold-search-text.directive';
import { FilteredListPipe } from '../pipes/filtered-list.pipe';
import { ClickOutsideDirective } from '../directives/click-outside.directive';

@Component({
  selector: 'lib-auto-filter-drop-down',
  standalone: true,
  imports: [
    FormsModule,
    FilteredListPipe,
    BoldSearchTextDirective,
    ClickOutsideDirective,
  ],
  templateUrl: './auto-filter-drop-down.component.html',
  styleUrls: ['./auto-filter-drop-down.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AutoFilterDropDownComponent,
      multi: true,
    },
  ],
})
export class AutoFilterDropDownComponent implements ControlValueAccessor {
  protected searchValue = model<string>('');
  protected openned = signal(false);

  set value(value: string) {
    this.searchValue.set(value);
    this.openned.set(false);
    this.onChange(value);
    this.onTouched();
  }

  options = input<string[]>([]);
  placeholder = input<string>('Search ...');

  private onChange = (value: string) => {};
  private onTouched = () => {};

  writeValue(obj?: string): void {
    if (obj) this.searchValue.set(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onOptionClick(option: string) {
    this.value = option;
  }
}