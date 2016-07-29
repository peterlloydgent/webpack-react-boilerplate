"use strict";

import injectTapEventPlugin from 'react-tap-event-plugin';
import Router from './controller/Router';
import App from './App';

var i_router = new Router();

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <App router={i_router} />,
  jQuery('#viewport').get(0)
);

Backbone.history.start();