import React from 'react';
import {useSelector, connect} from 'react-redux';
import ResultBodyComponent from '../../components/ResultComponent/ResultBodyComponent';
import * as searchActions from '../../store/modules/search';
import { Redirect } from "react-router";

const ResultContainer = (props) => {
    const handleSuccessSearch = (updateedData)=>{
        props.successSearch(updateedData)
    }



    return (
        true? 
        <ResultBodyComponent 
            searchedData={props.searchedData}
            onSuccessSearch={handleSuccessSearch}
        ></ResultBodyComponent> 
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
        successSearch:(searchedData)=>dispatch(searchActions.successSearch(searchedData)),
    })
)(ResultContainer);
