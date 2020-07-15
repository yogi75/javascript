### Understanding offsetWidth, clientWidth, scrollWidth and -Height, respectively

The CSS box model is rather complicated, particularly when it comes to scrolling content. While the browser uses the values from your CSS to draw boxes, determining all the dimensions using JS is not straight-forward if you only have the CSS.

That's why each element has six DOM properties for your convenience: offsetWidth, offsetHeight, clientWidth, clientHeight, scrollWidth and scrollHeight. These are read-only attributes representing the current visual layout, and all of them are integers (thus possibly subject to rounding errors).

### Let's go through them in detail:

### offsetWidth, offsetHeight: 
   The size of the visual box incuding all borders. Can be calculated by adding width/height and paddings and borders, if the element has display: block
### clientWidth, clientHeight: 
  The visual portion of the box content, not including borders or scroll bars , but includes padding . Can not be calculated directly from CSS, depends on the system's scroll bar size.
### scrollWidth, scrollHeight: 
   The size of all of the box's content, including the parts that are currently hidden outside the scrolling area. Can not be calculated directly from CSS, depends on the content.

### CSS2 Box Model
http://jsfiddle.net/y8Y32/25/

Since offsetWidth takes the scroll bar width into account, we can use it to calculate the scroll bar width via the formula

*scrollbarWidth = offsetWidth - clientWidth - getComputedStyle().borderLeftWidth - getComputedStyle().borderRightWidth*

Unfortunately, we may get rounding errors, since offsetWidth and clientWidth are always integers, while the actual sizes may be fractional with zoom levels other than 1.

Note that this

*scrollbarWidth = getComputedStyle().width + getComputedStyle().paddingLeft + getComputedStyle().paddingRight - clientWidth*

does not work reliably in Chrome, since Chrome returns width with scrollbar already substracted. (Also, Chrome renders paddingBottom to the bottom of the scroll content, while other browsers don't)
