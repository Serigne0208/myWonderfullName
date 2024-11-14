import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-reset-input',
  templateUrl: './reset-input.component.html',
  styleUrls: ['./reset-input.component.scss']
})
export class ResetInputComponent {
  @Input() value: string = '';  // Valeur du champ de texte
  @Output() valueChange = new EventEmitter<string>();  // Émet la nouvelle valeur après reset

  resetValue(): void {
    this.value = '';  // Réinitialiser la valeur
    this.valueChange.emit(this.value);  // Émettre la nouvelle valeur
  }
}
