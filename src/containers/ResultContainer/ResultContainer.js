import React from 'react';
import {useSelector, connect} from 'react-redux';
import ResultBodyComponent from '../../components/ResultComponent/ResultBodyComponent';
import * as searchActions from '../../store/modules/search';

const ResultContainer = (props) => {
    return (
        <div>
            <ResultBodyComponent searchedData={props.searchedData}/>
        </div>
        
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