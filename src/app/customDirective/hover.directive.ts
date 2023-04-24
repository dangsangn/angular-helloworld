import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  @HostListener('mouseover') onmouseover() {
    this.render.setStyle(this.element.nativeElement, 'padding', '20px');
    this.render.setStyle(this.element.nativeElement, 'transition', '0.4s');
  }

  @HostListener('mouseout') onmouseout() {
    this.render.setStyle(this.element.nativeElement, 'padding', '12px');
  }
}
