import React from 'react';
import {useSelector, connect} from 'react-redux';
import ResultBodyComponent from '../../components/ResultComponent/ResultBodyComponent';
import * as searchActions from '../../store/modules/search';
import { Redirect } from "react-router";

const ResultContainer = (props) => {
    const handleSuccessSearch = (updatedData)=>{
        props.successSearch(updatedData)
        console.log(updatedData);
    }



    return (
        <ResultBodyComponent 
            searchedData={props.searchedData}
            startSearch={props.startSearch}
            onSuccessSearch={handleSuccessSearch}
            handleStartSearch={props.handleStartSearch}
        ></ResultBodyComponent> 
    )
}


export default connect(
    (state) => ({
        searchedData:state.search.searchedData,
        startSearch:state.search.startSearch,
    }),
    (dispatch) => ({
        successSearch:(searchedData)=>dispatch(searchActions.successSearch(searchedData)),
        handleStartSearch:()=>dispatch(searchActions.startSearch()),
    })
)(ResultContainer);
