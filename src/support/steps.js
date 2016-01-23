/**
 *
 * var steps = require('../../../support/steps.js');
 * steps.call(this);
 *
 */
var _ = require('lodash-compat');
console.log('before helper');
var helper = require('../../node_modules/ractive-foundation/src/support/testHelpers');
console.log('before steps');
var steps = require('../../node_modules/ractive-foundation/src/support/steps');

module.exports = function () {

	steps.call(this);

	// add extra tests here
	this.Then(/^the SVG element "([^"]*)" should have the text "([^"]*)"$/, function (element, text, callback) {
		this.client.waitForExist(this.component[element], this.defaultTimeout).then(function () {
			console.log(arguments);
			return this.client.getText(this.component[element]);
		}.bind(this))
		.then(function (elemText) {
			try {
				// If elem has nested tags, it will return array.
				if (_.isArray(elemText)) {
					this.assert.notEqual(_.indexOf(elemText, text), -1);
				} else {
					this.assert.equal(text, elemText);
				}
				callback();
			} catch (e) {
				callback(e);
			}
		}.bind(this)).catch(callback);
	});

};
