import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.component';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { PersistGate } from 'redux-persist/integration/react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.style.css';

ReactDOM.render(
	<Provider store={store.store}>
		<PersistGate loading={null} persistor={store.persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
