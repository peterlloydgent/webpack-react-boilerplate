"use strict";

// Import the 3 key elements of the applications
import Router from './model/Router'; // Controlling all entry points via URL and routing
import Viewport from './view/Viewport'; // Controls theme, layout engine and environment
import App from './App'; // The application controller
import './stylesheets/main.scss';

// Create the router for the application
let router = new Router();

// Create the app with router to pass as child to viewport
let app = <App router={router} />;

// Render the viewport with the application as child
ReactDOM.render(
	<Viewport child={app} />,
	document.getElementById('viewport')
);

// Set things in motion....
Backbone.history.start();