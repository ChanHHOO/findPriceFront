import { createAction, handleActions } from 'redux-actions';

// action type define
const SUCCESS_SEARCHE = 'search/SUCCESS_SEARCHE';
const FAIL_SEARCE = 'search/FAIL_SEARCE'
const START_SEARCHE = 'search/START_SEARCHE';


// action create function define
export const successSearch = createAction(SUCCESS_SEARCHE);
export const failSearch = createAction(FAIL_SEARCE);
export const startSearch = createAction(START_SEARCHE);

// initial state
const initialState = {
    isSearched:false,
    searchedData:{
        article_avrPrice:"",
        article_id:"",
        article_maxImgStr:"",
        article_maxPrice:"",
        article_minImgStr:"",
        article_minPrice:"",
        article_title:"",
        article_maxArticleTitle:"",
        article_minArticleTitle:"",
        article_count:"",
        article_updateTime:"",
        chartDomain_firstX:"",
        chartDomain_secondX:"",
        chartDomain_thirdX:"",
        chartDomain_fourthX:"",
        chartData_firstY:0,
        chartData_secondY:0,
        chartData_thirdY:0,
        chartData_fourthY:0,
    },
    startSearch:false,
};

// reducer
export default handleActions({
    [SUCCESS_SEARCHE]:(state, action)=>{
        console.log(state, action)
        return {
            searchedData:action.payload,
            isSearched:true,
            startSearch:false,
        };
    },
    [FAIL_SEARCE]:(state, action) => {
        return {isSearched:false};
    },
    [START_SEARCHE]:(state, action) => {
        return {startSearch:true}
    },
}, initialState);