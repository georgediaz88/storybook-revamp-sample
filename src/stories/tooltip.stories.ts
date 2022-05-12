import { CommonModule } from '@angular/common'
import { storiesOf, moduleMetadata } from '@storybook/angular'
import { Story, Meta } from '@storybook/angular/types-6-0';

import { TkTooltipDirective } from '../../src/app/tooltip.directive'

export default {
  title: 'Example/TkTooltip',
  component: TkTooltipDirective,
  argTypes: {
    trigger: {
      control: {
        type: 'select',
        options: ['click', 'mouseenter']
      }
    }
  }
} as Meta;

// template1
const Template: Story<TkTooltipDirective> = (args: TkTooltipDirective) => ({
  props: args,
  component: TkTooltipDirective,
  template: `<button tk-tooltip [contents]="contents" [trigger]="trigger"> I'm an informative button</button>`
});
export const Button = Template.bind({});
Button.args = {
  contents: "foo boo",
  trigger: "mouseenter"
}
// Default.args = {
//   contents: "I'm some helpful text dude",
//   trigger: "mouseover"
// }
