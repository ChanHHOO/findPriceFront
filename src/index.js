import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import 'semantic-ui-css/semantic.min.css'

import './index.css'
const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <App />  
    </Provider>,
  document.getElementById('root')
);