import { createAction, handleActions } from 'redux-actions';

// action type define
const GET_HEADER_HEIGHT = 'search/GET_HEADER_HEIGHT';

// action create function define
export const getHeaderHeight = createAction(GET_HEADER_HEIGHT);

const initialState = {
    loading:false,
    results:[],
    value:'',
    headerHeight:"",
}

export default handleActions({
    [GET_HEADER_HEIGHT]:(state, action)=>{
        console.log(state, action.payload)
        return {headerHeight:action.payload};
    },
}, initialState);