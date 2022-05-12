import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {
  /**
   * Who be best player on Philly next game?
   */
  @Input()
  george?: 'harden' | 'embiid' | 'maxey' = 'harden';
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * Raquel said background color to use here
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
