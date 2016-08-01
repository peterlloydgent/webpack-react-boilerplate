"use strict";

import injectTapEventPlugin from 'react-tap-event-plugin';

import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500,
	}
});

class Viewport extends React.Component {
	
	constructor(props) {
		
		super(props);
	}

	render() {

		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				{this.props.child}
			</MuiThemeProvider>
		);
	}
}

export default Viewport;