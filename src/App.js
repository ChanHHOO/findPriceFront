import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import MainContainer from './containers/MainContainer/MainContainer'
import HeaderComponent from './components/commonComponents/HeaderComponent/HeaderComponent';
import ResultComponent from './components/ResultComponent/ResultComponent';

class App extends Component{
  render(){
    return (
      <div>
        <HeaderComponent />
        <Route exact path='/' component={MainContainer} />
      </div>
    );
  }
}

export default App;