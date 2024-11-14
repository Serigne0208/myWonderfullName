import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors, Validator, Validators } from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';

export type Address = {
  number?: string;
  street?: string;
  postalCode: string;
  city: string;
  country: string;
}

@Component({
  selector: 'lib-address-input',
  templateUrl: './address-input.component.html',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AddressInputComponent,
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: AddressInputComponent,
      multi: true
    }
  ],
  styles: ['form {display: flex; flex-direction: column;}'],
  imports: [ReactiveFormsModule, MatInput, MatFormField, MatLabel]
})
export class AddressInputComponent implements Validator, ControlValueAccessor, OnInit {
  protected adressForm = new FormGroup({
    number: new FormControl<string | undefined>(undefined, {nonNullable: true}),
    street: new FormControl<string | undefined>(undefined, {nonNullable: true}),
    postalCode: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
    city: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
    country: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]})
  });

  private onChange = (val: Address) => {};
  private onTouched = () => {}; 

  ngOnInit(): void {
      this.adressForm.valueChanges.subscribe(val => {
        this.onChange(this.adressForm.getRawValue());
        this.onTouched();
      });
  }

  writeValue(obj?: Address): void {
    if (obj)
      this.adressForm.patchValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled)
      this.adressForm.disable();
    else
      this.adressForm.enable();
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.adressForm.valid ? null : {address: true};
  }
}