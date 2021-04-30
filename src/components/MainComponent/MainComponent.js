import React from "react";
//https://velog.io/@velopert/react-redux-hooks
import { Search, Grid, Segment } from 'semantic-ui-react'
import styled from "styled-components"

import SearchComponent from "../SearchComponent/SearchComponent"
import ResultBodyComponent from "../ResultComponent/ResultBodyComponent"

const Main = styled.div`
    padding-top:5em;
    .description{
        font-size:3em;
    
    }

`
const MainComponent = (props) => {

    return(
        <Main>
            <Grid
                centered
                
            >
                <Grid.Row>
                    <span className={"description"}>
                        팔고싶은 당신의 물건. 과연 얼마일까?
                    </span>
                </Grid.Row>
                
                <Grid.Row className={"searceComponent"}>
                    <SearchComponent />
                </Grid.Row>
                <Grid.Row className={"resultComponent"}>
                    <ResultBodyComponent />
                </Grid.Row>
            </Grid>
            
            
        </Main>
    )

    
}
export default MainComponent;