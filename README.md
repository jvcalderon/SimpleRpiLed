SimpleRpiLed
============

Very simple class to handle a RGB Led in Raspberry PI with Node.JS

## Installation

You can install the library with NPM:

<pre><code>$ npm install</code></pre>

In Raspberry PI, only root can use GPIO pin. You have to install [quick2wire-gpio-admin](https://github.com/quick2wire/quick2wire-gpio-admin) to use the library without sudo. if you haven't yet installed this library, you can do it as follows:

<pre><code>$ git clone git://github.com/quick2wire/quick2wire-gpio-admin.git
$ cd quick2wire-gpio-admin
$ make && sudo make install
$ sudo adduser $USER gpio</code></pre>

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
