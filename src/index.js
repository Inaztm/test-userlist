import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-react';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
