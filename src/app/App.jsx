"use strict";

import Router from './model/Router';
import DummyComponent from './component/DummyComponent';

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
				<DummyComponent
					className="dummy"
				/>
			</div>
		);
	}
}

export default App;
