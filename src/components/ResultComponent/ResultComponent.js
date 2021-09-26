import React, {useState, useEffect} from "react";
import { Search, Grid, Segment, Card, Image } from 'semantic-ui-react'
import styled from "styled-components"
import InitialResultComponent from "./InitialResultComponent";
import ResultBodyComponent from "./ResultBodyComponent";

const Result = styled.div`

`


const initialState = {
    isCompleteSearch:false,       
}
    

const ResultComponent = (props) => {
    const [state, setState] = useState(initialState);

    return(
        state.isCompleteSearch ? 
            <ResultBodyComponent></ResultBodyComponent> 
            : 
            <InitialResultComponent></InitialResultComponent>
        
    )
}
export default ResultComponent;