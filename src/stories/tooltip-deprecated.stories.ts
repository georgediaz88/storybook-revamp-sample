import { CommonModule } from '@angular/common'
import { storiesOf, moduleMetadata } from '@storybook/angular'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { Story, Meta } from '@storybook/angular/types-6-0';

import { TkTooltipDirective } from '../app/tooltip.directive'

import * as readme from './tooltip-deprecated.md'

const options = {
  mouseenter: 'mouseenter',
  click: 'click'
}

storiesOf('TooltipDeprecated', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule],
      declarations: [TkTooltipDirective]
    })
  )
  .addDecorator(
    withKnobs({
      escapeHTML: false
    })
  )
  .add(
    'on a button',
    () => ({
      template: `
      <button tk-tooltip contents="I'm some helpful text"> I'm an informative button</button>
    `
    }),
    { notes: { markdown: readme } }
  )
  .add(
    'within a paragraph',
    () => ({
      template: `
      This is a paragraph containing a tooltip on
      <span tk-tooltip contents="I have a different message!">this span</span>.
    `
    }),
    { notes: { markdown: readme } }
  )
  .add(
    'using pluginOptions',
    () => ({
      template: `
        This is a paragraph containing a tooltip on
        <span style="text-decoration: underline;" tk-tooltip [trigger]="trigger" [contents]="contents">this span</span>.
      `,
      props: {
        trigger: select('trigger', options, 'mouseenter'),
        contents: text('contents', "Look at me <em>I'm a tooltip</em>!")
      }
    }),
    { notes: { markdown: readme } }
  )
