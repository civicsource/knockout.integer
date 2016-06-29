# Knockout Integer Extender

> A simple knockout extender which coerces values to integers.

## Installation

```
npm install knockout-integer
```

Then add `knockout-integer.js` to your project.

## Usage

`require` the script in your bundle. Then:

```js
var myNumber = ko.observable().extend({integer: 0 /* optional default value if it cannot be coerced to integer */});
myNumber("17000");

console.log(myNumber()); //17000
console.log(myNumber.formatted()); //17,000
```