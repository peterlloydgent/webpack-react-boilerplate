"use strict";

import Viewport from './view/Viewport'; // Controls theme, layout engine and environment
import App from './App'; // The application controller
import './stylesheets/main.scss';

// Create the app with router to pass as child to viewport
let app = <App />;

// Render the viewport with the application as child
ReactDOM.render(
	<Viewport child={app} />,
	document.getElementById('viewport')
);
