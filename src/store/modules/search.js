import { createAction, handleActions } from 'redux-actions';

// action type define
const SUCCESS_SEARCHE = 'search/SUCCESS_SEARCHE';
const FAIL_SEARCE = 'search/FAIL_SEARCE'

// action create function define
export const successSearch = createAction(SUCCESS_SEARCHE);
export const failSearch = createAction(FAIL_SEARCE);

// initial state
const initialState = {
    isSearched:false,
    searchedData:{},
};

// reducer
export default handleActions({
    [SUCCESS_SEARCHE]:(state, action)=>{
        console.log(state, action)
        return {searchedData:action.payload};
    },
    [FAIL_SEARCE]:(state, action) => {
        return {isSearched:false};
    }
}, initialState);