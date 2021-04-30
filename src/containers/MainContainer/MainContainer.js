import React from 'react';
import {useSelector} from 'react-redux';

import MainComponent from '../../components/MainComponent/MainComponent';
import HeaderComponent from "../../components/commonComponents/HeaderComponent/HeaderComponent"
const MainContainer = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <MainComponent></MainComponent>
        </div>
        
    )
}

export default MainContainer;