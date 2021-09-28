import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Root from "./client/Root"
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/modules';
import 'semantic-ui-css/semantic.min.css'
import './index.css'
const store = createStore(rootReducer);


ReactDOM.render(<Root />, document.getElementById('root'));