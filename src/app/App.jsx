"use strict";

import Router from './model/Router';

class App extends React.Component {
	
	constructor(props) {
		
		super(props);

		this.state = {
			router: React.PropTypes.instanceOf(Router).isRequired
		};
	}

	render() {
		return (
			<div id="application">
			</div>
		);
	}
}

export default App;