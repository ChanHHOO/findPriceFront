import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import MainContainer from './containers/MainContainer/MainContainer'
import HeaderComponent from './components/commonComponents/HeaderComponent/HeaderComponent';
import ResultPage from "./pages/Result"
class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <HeaderComponent />
        <Route exact path='/' component={MainContainer} />
        <Route exact path='/search' component={ResultPage} />
      </Provider>
    );
  }
}

export default App;