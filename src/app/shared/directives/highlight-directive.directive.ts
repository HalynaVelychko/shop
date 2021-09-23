import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {
  private backgroundColor: string = 'transparent'

  @HostBinding('style.backgroundColor') get background() {
    return this.backgroundColor
  }

  @HostListener('mouseenter') onMouseEnter(){
    return this.backgroundColor = "rgba(125,180,66,255)"
  }

  @HostListener('mouseleave') onMouseLeave() {
    return this.backgroundColor = 'transparent'
  }
  constructor() { }

}
