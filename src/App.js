import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import MainContainer from './containers/MainContainer/MainContainer'
import HeaderComponent from './components/commonComponents/HeaderComponent/HeaderComponent';
import ResultComponent from './components/ResultComponent/ResultComponent';

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <HeaderComponent />
        <Route exact path='/' component={MainContainer} />
      </Provider>
    );
  }
}

export default App;