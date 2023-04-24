import {
  Directive,
  ElementRef,
  Renderer2,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective {
  constructor(private element: ElementRef, render: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.border') border: string = 'none';

  @HostListener('mouseover') onmouseover() {
    this.backgroundColor = '#123450';
    this.border = '2px solid #34567';
  }

  @HostListener('mouseleave') onmouseleave() {
    this.backgroundColor = 'transparent';
    this.border = 'none';
  }
}
