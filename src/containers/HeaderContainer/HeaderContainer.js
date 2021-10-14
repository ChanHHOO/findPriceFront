import React from 'react';
import {useSelector, connect} from 'react-redux';
import HeaderComponent from "../../components/commonComponents/HeaderComponent/HeaderComponent"
import * as headerActions from '../../store/modules/header';

const HeaderContainer = (props) => {
    console.log(props)
    return (
        <div>
            <HeaderComponent 
                getHeaderHeight={props.getHeaderHeight}
                isSearched={props.isSearched}
            />
        </div>
        
    )
}

export default connect(
    (state) => ({
        isSearched:state.search.isSearched,
    }),
    (dispatch) => ({
        getHeaderHeight:(headerHeight)=>dispatch(headerActions.getHeaderHeight(headerHeight)),
    })
)(HeaderContainer);
