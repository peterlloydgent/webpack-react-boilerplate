"use strict";

class Router extends Backbone.Router {

	constructor(props) {
		
		super(props);

		this.routes = {
			"": "home"
		};
	}
}

export default Router;