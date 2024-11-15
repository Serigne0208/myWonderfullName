import { Component } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-custom-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomInputComponent,
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  private _val?: string;

  protected get val() {
    return this._val??'';
  }

  protected set val(val: string) {
    this._val = val;
    this.onTouched();
    this.onChange(val);
  }

  private onTouched = () => {};
  private onChange = (val: any) => {};

  writeValue(obj?: string): void {
    this._val = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  protected reset(): void {
    delete this._val;
    this.onTouched();
    this.onChange(this._val);
  }

}