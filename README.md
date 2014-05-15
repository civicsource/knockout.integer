# Knockout Moment Component

> A simple knockout extender that coerces values to integers.

## Install with [Bower](http://bower.io/)

```
bower install knockout-integer
```

Then add `knockout-integer.js` to your project.

## How to Use

Include the script on your page (either via a normal script tag or via an AMD loader). Then use it like so:

```js
var myNumber = ko.observable().extend({integer: 0 /* optional default value if it cannot be coerced to integer */});
myNumber("17000");

console.log(myNumber()); //17000
console.log(myNumber.formatted()); //17,000
```