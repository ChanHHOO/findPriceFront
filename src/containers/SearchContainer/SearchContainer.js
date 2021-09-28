import React from 'react';
import {useSelector} from 'react-redux';
import SearchComponent from '../../components/SearchComponent/SearchComponent'
import {connect} from 'react-redux';
import * as searchActions from '../../store/modules/search';

const SearchContainer = (props) => {
    console.log(props.isSearched);
    const handleSuccessSearch = ()=>{
        props.successSearch();
    }
    const handleFailSearch = ()=>{
        props.failSearch();
    }
    return (
        <SearchComponent  
            onSuccessSearch={handleSuccessSearch}
            onFailSearch={handleFailSearch}
            isSearched={props.isSearched}
        />
    )
}

export default connect(
    (state) => ({
        isSearched:state.search.isSearched
    }),
    (dispatch) => ({
        successSearch:()=>dispatch(searchActions.successSearch()),
        failSearch:() => dispatch(searchActions.failSearch())
    })
)(SearchContainer);