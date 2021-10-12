import { combineReducers } from "redux";
import search from "./search";
import header from "./header"
const rootReducer = combineReducers({
    search,
    header,
});
export default rootReducer;