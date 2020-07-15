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

## Understanding the critical rendering path

Optimizing the critical rendering path refers to prioritizing the display of content that relates to the current user action.

Delivering a fast web experience requires a lot of work by the browser. Most of this work is hidden from us as web developers: we write the markup, and a nice looking page comes out on the screen. But how exactly does the browser go from consuming our HTML, CSS, and JavaScript to rendered pixels on the screen?

* *Optimizing for performance is all about understanding what happens in these intermediate steps between receiving the HTML, CSS, and JavaScript bytes and the required processing to turn them into rendered pixels - that's the critical rendering path.*

### How does the browser rendering engine work?
In order to render content the browser has to go through a series of steps:
1. Document Object Model(DOM)
2. CSS object model(CSSOM)
3. Render Tree
4. Layout
5. Paint.

### 1. Document Object Model
To process a html file and get to the document object model event(DOM) the browser has to go through 4 steps:
1. Convert bytes to characters
2. Identify tokens
3. Convert tokens to nodes
4. Build DOM Tree

### 2. CSS Object Model
Just as with HTML, the CSS rules need to be converted into something that the browser understands, so these rules go through the same steps as the document object model.
1. Convert bytes to characters
2. Identify tokens
3. Convert tokens to nodes
4. Build CSSOM

### 3. The Render Tree
This stage is where the browser combines the DOM and CSSOM, this process outputs a final render tree, which contains both the content and the style information of all the visible content on the screen.
### 4. Layout
This stage is where the browser calculates the size and position of each visible element on the page, every time an update to the render tree is made, or the size of the viewport changes, the browser has to run layout again.
### 5. Paint
When we get to the paint stage, the browser has to pick up the layout result, and paint the pixels to the screen, beware in this stage that not all styles have the same paint times, also combinations of styles can have a greater paint time than the sum of their parts. For an instance mixing a border-radius with a box-shadow, can triple the paint time of an element instead of using just one of the latter.

Now Dealing with javascript detailed reference ... https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a
