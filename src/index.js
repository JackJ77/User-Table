import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';
import App from './components/App';
import {loadUsers} from './store/actions/index';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(loadUsers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);
registerServiceWorker();
