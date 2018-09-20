import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './redux/store'

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
    	<AppContainer />
  	</Provider>,
  	document.getElementById('root')
);

registerServiceWorker();
