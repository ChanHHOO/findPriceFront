import React from "react";
//https://velog.io/@velopert/react-redux-hooks
import { Search, Grid, Segment } from 'semantic-ui-react'
import styled from "styled-components"
import tradeImage from "../../images/tradeImage3.png"
import { Redirect } from "react-router-dom";

const Main = styled.div`
    background-color:#FBF7F2;
    padding-top:10em;
    .mainComponent{{
        min-height:50em;
        padding-top:10em;
    }}
    .textSection{{
        margin-top:10em;
    }}
    .description{
        font-size:3em;
        margin-left:7em;
    },
    .tradeImage{
        
    }
`
const MainComponent = (props) => {

    return(
        <Main>
            <Grid className={"mainComponent"}>
                <Grid.Column 
                    width={8}
                    className={"textSection"}
                    >
                    <span className={"description"}>
                        팔고싶은 당신의 물건 과연 얼마일까?
                    </span>
                </Grid.Column>
                <Grid.Column>
                    <img className={"tradeImage"} src={tradeImage}></img>
                </Grid.Column>

                
                
            </Grid>
            
            {true && <Redirect to="/search" />}
        </Main>
    )

    
}
export default MainComponent;