'use strict';

var Promise = require('promise');

/**
 * Sends message through chosen driver
 * @param {object} driver Damson driver
 * @param {object} options
 * @param {string} options.message Message
 * @return {Promise}
 */
function run(driver, options) {
  return driver.send(options.message);
}

function SendMessage() {

}

SendMessage.prototype.run = run;

module.exports = SendMessage;