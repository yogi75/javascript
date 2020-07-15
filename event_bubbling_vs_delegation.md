### JavaScript: Event bubbling and delegation

### Event bubbling

Event bubbling is the propagation of an event from its origin towards the root element. In other words, 
if an event occurs on a given element, it will be triggered on its parent as well and on its parent’s 
parent and all the way up, until the html element.

### Event delegation

Event delegation makes it possible to handle events triggered by many elements in a single place.

In simple words, it leverages the bubbling effect to extract the handling logic of an event to a common 
ancestor of the elements where this event is triggered. Instead of adding listeners to the 150 li‘s, we 
would add only a single listener to the #ul element. This way, every time the user clicks on a li, the 
bubbling effect causes the event to propagate to the #ul element, triggering the execution of its listener.
