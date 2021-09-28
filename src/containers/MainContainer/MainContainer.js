import React from 'react';
import {useSelector} from 'react-redux';

import MainComponent from '../../components/MainComponent/MainComponent';
import HeaderComponent from "../../components/commonComponents/HeaderComponent/HeaderComponent"
import SearchContainer from '../SearchContainer/SearchContainer';
const MainContainer = () => {
    console.log("asdasdasd"+SearchContainer);
    return (
        <div>
            <HeaderComponent SearchContainer={SearchContainer}></HeaderComponent>
            <MainComponent></MainComponent>
        </div>
        
    )
}

export default MainContainer;