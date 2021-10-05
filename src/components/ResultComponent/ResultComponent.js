import React, {useState, useEffect} from "react";
import { Search, Grid, Segment, Card, Image } from 'semantic-ui-react'
import styled from "styled-components"
import ResultBodyComponent from "./ResultBodyComponent";
import { Redirect } from "react-router";
const Result = styled.div`

`


const initialState = {
    isCompleteSearch:false,       
}
    

const ResultComponent = (props) => {
    return(
        // props.isSearched
        true? 
            <ResultBodyComponent></ResultBodyComponent> 
            :
            <Redirect
                to={{
                    pathname: '/'
                }} />
    )
}
export default ResultComponent;