/**
 * SimpleRpiLed is a very simple class to handle a RGB Led with Raspberry PI
 *
 * @author José Vte. Calderón Cabrera <jvcalcab@gmail.com>
 */

var gpio = require("SimpleRpiGpio");

var SimpleRpiLed = function (redPinNumber, greenPinNumber, bluePinNumber) {
    this.__construct(redPinNumber, greenPinNumber, bluePinNumber);
};

/**
 * @param redPinNumber pin number to handle red color
 * @param greenPinNumber pin number to handle green color
 * @param bluePinNumber pin number to handle blue color
 */
SimpleRpiLed.prototype.__construct = function (redPinNumber, greenPinNumber, bluePinNumber) {

    this.redPinNumber = redPinNumber;
    this.greenPinNumber = greenPinNumber;
    this.bluePinNumber = bluePinNumber;

    gpio.open(redPinNumber, 'out');
    gpio.open(greenPinNumber, 'out');
    gpio.open(bluePinNumber, 'out');
};

/**
 * black method activates black color
 *
 * @returns bool true on success
 */
SimpleRpiLed.prototype.black = function () {
    return this.setColor(0, 0, 0);
};

/**
 * black method activates blue color
 *
 * @returns bool true on success
 */
SimpleRpiLed.prototype.blue = function () {
    return this.setColor(0, 0, 1);
};

/**
 * black method activates green color
 *
 * @returns bool true on success
 */
SimpleRpiLed.prototype.green = function () {
    return this.setColor(0, 1, 0);
};

/**
 * black method activates turquoise color
 *
 * @returns bool true on success
 */
SimpleRpiLed.prototype.turquoise = function () {
    return this.setColor(0, 1, 1);
};

/**
 * black method activates red color
 *
 * @returns bool true on success
 */
SimpleRpiLed.prototype.red = function () {
    return this.setColor(1, 0, 0);
};

/**
 * black method activates purple color
 *
 * @returns bool true on success
 */
SimpleRpiLed.prototype.purple = function () {
    return this.setColor(1, 0, 1);
};

/**
 * black method activates greenYellow color
 *
 * @returns bool true on success
 */
SimpleRpiLed.prototype.greenYellow = function () {
    return this.setColor(1, 1, 0);
};

/**
 * black method activates white color
 *
 * @returns bool true on success
 */
SimpleRpiLed.prototype.white = function () {
    return this.setColor(1, 1, 1);
};

SimpleRpiLed.prototype.setColor = function (redAction, greenAction, blueAction) {

    var redResult = gpio.out(this.redPinNumber, redAction);
    var greenResult = gpio.out(this.greenPinNumber, greenAction);
    var blueResult = gpio.out(this.bluePinNumber, blueAction);

    if (redResult === true && greenResult === true && blueResult === true) {
        return true;
    }

    return false;

};

module.exports = SimpleRpiLed;
