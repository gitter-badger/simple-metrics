/*
 * Counter
 */
var events = require('events'),
    util = require('util');

exports = module.exports = new events.EventEmitter();


exports.SimpleMetrics = function(params) {
    /*
     * Constructor
     */
    this.counters = {}
    this.counters.pps = 0;
	this.counters.ppm = 0;
    this.counters.lpps = 0;
	this.counters.lppm = 0;	
	  
    /*
     * Config, default values
     */
    this.config = {};
    this.config.debug = true;
    this.config.verbs = ['GET', 'POST'];

    var that = this
    exports.on('__var_pps_metrics', function (obj) {
	  if(that.config.debug) console.log(that.counters);
      // TODO
	});

    // reset counter of the seconds
	setInterval(function(){
		that.counters.lpps = that.counters.pps;
		that.counters.pps = 0;
	}, 1000)

	// reset counter of the minutes.
	setInterval(function(){
		that.counters.lppm = that.counters.ppm;
		that.counters.ppm = 0;
		console.log('1 m')
	}, 60000)

    /*
     * Metods
     */
	return {
        
        /*
         * Return configs
         */
		getconfig: function() {
			console.log(that.config)
		},

		/*
         * adding values to counters. It can be used like a middleware in the routes
         */
		count: function (obj) {
			that.counters.pps ++;
			that.counters.ppm ++;
			exports.emit('__var_pps_metrics',null)
		}

		// TODO....
	}
}