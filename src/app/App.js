"use strict";

import Router from './controller/Router';

import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import OmniBar from './component/OmniBar';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';

const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500
	},
});

class App extends React.Component {
	constructor(props) {
		
		super(props);

		this.state = {
			router: React.PropTypes.instanceOf(Router).isRequired
		};
	}

	drawerToggle() {
		let drawer = this.refs.drawer;
		drawer.setState({
			open: drawer.state.open ? false : true
		});
	}

	render() {

		let OmniSearch = <TextField />;

		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div id="app">
					<OmniBar
						ref="omniBar"
						onLeftIconButtonTouchTap={() => this.drawerToggle()}
						children={OmniSearch}
					/>
					<Drawer
						ref="drawer"
						open={false}
					/>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;