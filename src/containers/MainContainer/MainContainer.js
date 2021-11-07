import React from 'react';
import {useSelector, connect} from 'react-redux';

import MainComponent from '../../components/MainComponent/MainComponent';
import HeaderComponent from "../../components/commonComponents/HeaderComponent/HeaderComponent"
import * as headerActions from '../../store/modules/header';

const MainContainer = (props) => {
    return (
        <div>
            <MainComponent startSearch={props.startSearch}></MainComponent>
        </div>
        
    )
}

export default connect(
    (state) => ({
        startSearch:state.search.startSearch,
    }),
    (dispatch) => ({
        getHeaderHeight:(headerHeight)=>dispatch(headerActions.getHeaderHeight(headerHeight)),
    })
)(MainContainer);
