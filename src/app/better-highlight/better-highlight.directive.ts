import { Directive, ElementRef, Renderer2 , OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  @HostBinding('style.backgroundColor') bgclr:string = 'transparent';

  constructor(private elRef:ElementRef , private renderer:Renderer2) { }

  ngOnInit(){
      // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','blue');
      this.bgclr = 'Dodgerblue';
  } 

  @HostListener('mouseenter') mouseovers(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','red');
    this.bgclr = 'red';
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','yellow');
    this.bgclr = 'yellow';
  }

}
