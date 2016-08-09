"use strict";

import DummyComponent from './component/DummyComponent';

class App extends React.Component {
	
	constructor(props) {
		
		super(props);
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
