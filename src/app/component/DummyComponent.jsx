"use strict";

class DummyComponent extends React.Component {
	
	constructor(props) {
		
		super(props);
	}

	render() {

		return (
			<div
				className={this.props.className}
			>
			</div>
		);
	}
}

export default DummyComponent;