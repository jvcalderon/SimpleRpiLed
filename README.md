SimpleRpiLed
============

Very simple class to handle a RGB Led in Raspberry PI with Node.JS

## Installation

You can install the library with NPM:

<pre><code>$ npm install</code></pre>

## Example

SimpleRpiLed is very easy to use. To understand how it works you only need the example below:
<pre><code>
//First we need to require the library
var SimpleRpiLed = require("SimpleRpiLed");

//Create the object with pin config 
var redPin = 23;
var greenPin = 21;
var bluePin = 19;
var led = new SimpleRpiLed(redPin, greenPin, bluePin);

//Run color in led!
led.black(); //Turn off the led
led.blue(); //For blue
led.green(); //For green
led.turquoise(); //For turquoise ...
led.red();
led.purple();
led.greenYellow();
led.white();

</code></pre>
