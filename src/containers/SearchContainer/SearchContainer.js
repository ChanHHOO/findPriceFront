import React from 'react';
import {useSelector} from 'react-redux';
import SearchComponent from '../../components/SearchComponent/SearchComponent'
import {connect} from 'react-redux';
import * as searchActions from '../../store/modules/search';

const SearchContainer = (props) => {
    console.log(props)
    const handleSuccessSearch = (searchedData)=>{
        console.log(searchedData);
        props.successSearch(searchedData[searchedData.length - 1]);
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
        isSearched:state.search.isSearched,
    }),
    (dispatch) => ({
        successSearch:(searchedData)=>dispatch(searchActions.successSearch(searchedData)),
        failSearch:() => dispatch(searchActions.failSearch())
    })
)(SearchContainer);