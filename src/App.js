import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import MarginComponent from './components/commonComponents/HeaderComponent/MarginComponent';
import MainContainer from './containers/MainContainer/MainContainer'
import HeaderContainer from './containers/HeaderContainer/HeaderContainer';
import ResultPage from "./pages/Result"

class App extends Component{
  render(){

    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = "find price";

    return (
      <Provider store={store}>
        <HeaderContainer />
        <MarginComponent />
        <Route exact path='/' component={MainContainer} />
        <Route exact path='/search' component={ResultPage} />
      </Provider>
    );
  }
}

export default App;