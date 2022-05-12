// COMES FROM GENERATOR....
// import { Directive } from '@angular/core';

// @Directive({
//   selector: '[appTooltip]'
// })
// export class TooltipDirective {

//   constructor() { }

// }

import { Directive, ElementRef, Input, SecurityContext } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import tippy from 'tippy.js'

@Directive({
  selector: '[tk-tooltip]',
  // inputs: ['trigger', 'contents']
})
export class TkTooltipDirective {
  /**
   * Explain what the content does here
   */
  @Input()
  contents = 'Please enter a message.'
  /**
   * Explain what mouseenter does here too
   */
  @Input()
  trigger = 'mouseenter'

  el: string
  defaultOptions: {
    content: string
    arrow: boolean
    touch: boolean
    trigger: string
    interactive: any
  }
  domSanitizer: {
    sanitize: any
  }

  constructor(el: ElementRef, domSanitizer: DomSanitizer) {
    this.domSanitizer = domSanitizer
    this.el = el.nativeElement
    this.defaultOptions = {
      content: this.contents,
      arrow: true,
      touch: true,
      trigger: 'mouseenter',
      interactive: 'true'
    }
  }

  ngOnInit() {
    const tooltip: any = tippy(this.el, this.defaultOptions)
    tooltip.targets._tippy.set({
      trigger: this.trigger,
      content: this.domSanitizer.sanitize(SecurityContext.HTML, this.contents)
    })
  }
}

