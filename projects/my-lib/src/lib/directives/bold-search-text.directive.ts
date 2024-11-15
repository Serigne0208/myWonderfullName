import {
    Directive,
    ElementRef,
    Input,
    OnChanges,
    SimpleChanges,
    inject,
    input,
  } from '@angular/core';
  
  @Directive({
    selector: '[libBoldSearchText]',
    standalone: true,
  })
  export class BoldSearchTextDirective implements OnChanges {
    searchText = input<string>('', {
      alias: 'libBoldSearchText',
    });
  
    private el = inject(ElementRef);
  
    ngOnChanges(change: SimpleChanges) {
      const content = this.el.nativeElement.innerText;
      if (!content || !this.searchText()) return;
      const highlightedContent = content.replace(
        new RegExp(change['searchText'].currentValue, 'gi'),
        (match: string) => `<strong>${match}</strong>`
      );
      this.el.nativeElement.innerHTML = highlightedContent;
    }
  }