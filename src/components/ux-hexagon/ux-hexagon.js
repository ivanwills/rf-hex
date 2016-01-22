/* global Ractive */
Ractive.extend({
	template: Ractive.defaults.templates['ux-hexagon'],
	isolated: true,
	computed: {
		guid: function () {
			return this.get('id') || this._guid;
		}
	},
	onrender: function() {
		console.log('my data', this.get());
	}
});
