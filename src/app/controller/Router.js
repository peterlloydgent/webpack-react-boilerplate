"use strict";

var f_noop = function () {};

class Router extends Backbone.Router {

	constructor(props) {
		
		super(props);

		this.routes = {
			"": "home"
		}
		this.home = f_noop;
	}
}

export default Router;