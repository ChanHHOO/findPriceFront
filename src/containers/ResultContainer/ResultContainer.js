import React from 'react';
import {useSelector} from 'react-redux';
import ResultComponent from '../../components/ResultComponent/ResultComponent';
import {connect} from 'react-redux';
import * as searchActions from '../../store/modules/search';

const ResultContainer = (props) => {
    return (
        <>
            <ResultComponent searchedItem={props.isSearched}></ResultComponent>
        </>
        
    )
}


export default connect(
    (state) => ({
        isSearched:state.search.isSearched
    })
)(ResultContainer);
