import {React} from "react";
import ResultContainer from "../containers/ResultContainer/ResultContainer"
const Result = (props) => {
    const {params} = props.match;
    return(
        <ResultContainer searchedItem={params.searchedItem}/>
    )
}

export default Result;