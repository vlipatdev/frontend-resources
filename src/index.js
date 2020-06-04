import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

import './index.css';

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
);

serviceWorker.unregister();
