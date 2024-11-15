import { Directive, ElementRef, EventEmitter, HostListener, Output, inject } from '@angular/core';

@Directive({
  selector: '[libClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  @Output()
  libClickOutside = new EventEmitter<void>();

  private el = inject(ElementRef);

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.el.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.libClickOutside.emit();
    }
  }
}