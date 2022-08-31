## Clock
Clock component class to render a clock  into a given container.

### Implementation
```html
<!DOCTYPE html>
<html>
    <head>
        <!-- make sure to include the library-->
        <script src="clock.min.js"></script>
    </head>
    <body>
        <!-- you will need a container to hold the clock-->
        <div id="timer"></div>
    </body>
</html>
```
```javascript
// Finally in your javascript file just add initialize the clock.
window.addEventListener('load', function(){
    // Create a new instance of clock
    Clock.make('#timer')
})
```