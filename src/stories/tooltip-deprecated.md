# Tooltip

Use our handy tooltip directive wherever you want to provide additional information to the user.

Our tooltip is an attribute directive that uses the library
<a href="https://atomiks.github.io/tippyjs/">Tippy.js</a> under the hood.


## Import the module

~~~js
import { TkTooltipModule } from '@scholastica/tools/tooltip'

@NgModule({
  imports: [
    TkTooltipModule,
  ],
  ...
~~~

## Import Tippy styles from the CDN in your js_app's stylesheet
```scss
@import url("https://cdnjs.cloudflare.com/ajax/libs/tippy.js/3.3.0/tippy.css");
```

You need to import both the module in your .js file as well as the stylesheet in your .scss file for the tooltip directive to work.

To use the module, simply append the directive to the element which you would like to display the tooltip and add a string with the text you'd like it to display. Like this:

`<span tk-tooltip contents="Here is the text"></span>`

Because it is a directive, you can drop it on anything, like a span, or a button,
etc. Simply apply the directive selector to your target element, and pass in a
message in the "contents" input to achieve tip-top results.

If you're going to apply the tooltip to a block element like a paragraph, I
recommend adding the tooltip directive to a span within the paragraph, because the
tooltip displays in the center otherwise.

You can add a tooltip to a button.

```html
  <button tk-tooltip contents="I'm some helpful text"> I'm an informative button</button>
```

This is a paragraph containing a tooltip on

```html
  <span tk-tooltip contents="I have a different message!">a span</span>.
```
