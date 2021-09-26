import React from 'react';
import {useSelector} from 'react-redux';
import SearchComponent from '../../components/SearchComponent/SearchComponent'
import {connect} from 'react-redux';
import * as searchActions from 'store/modules/search';

const SearchContainer = (props) => {
    handleSuccessSearch = ()=>{
        console.log("asdasd")
        props.successSearch();
    }
    return (
        <SearchComponent  
            onSuccessSearch={handleSuccessSearch}
            test={"11"}
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