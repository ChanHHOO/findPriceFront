import React from 'react';
import {useSelector, connect} from 'react-redux';
import ResultBodyComponent from '../../components/ResultComponent/ResultBodyComponent';
import * as searchActions from '../../store/modules/search';
import { Redirect } from "react-router";

const ResultContainer = (props) => {
    return (
        true? 
        <ResultBodyComponent searchedData={props.searchedData}></ResultBodyComponent> 
        :
        <Redirect
            to={{
                pathname: '/'
        }}/>    
    )
}


export default connect(
    (state) => ({
        searchedData:state.search.searchedData,
    }),
    (dispatch) => ({
        successSearch:()=>dispatch(searchActions.successSearch()),
        
    })
)(ResultContainer);
