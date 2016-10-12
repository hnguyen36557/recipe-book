import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[app-dropdown]'
})
export class DropdownDirective {
  //Menu dropbox bỏ chuột ra thì mất dropdown
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  };
  @HostListener('click') open() {
    this.isOpen = true;
  };
  @HostListener('mouseleave') close() {
    this.isOpen = false;
  };
  private isOpen = false;

}
