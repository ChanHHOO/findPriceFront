import React, { useEffect } from "react";
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
        display:flex;
        justify-content:center;
    }}
    .textSection{{
        margin-right:10em;
        margin-top:10em;
        
    }}
    .description{
        font-size:3em;


    },
    .firstTitle{
        margin-bottom:1em;
    },
`

const MainComponent = (props) => {



    return(

        <Main>


            <div className={"mainComponent"}>
                <div className={"textSection"}>
                    <div className={"firstTitle"}>
                        <span className={"description"}>
                            팔고싶은 당신의 물건
                        </span>
                    </div>
                    <div>
                        <span className={"description"} >
                            과연 얼마일까?
                        </span>
                    </div>
                </div>

                <div className={"imageSection"} >
                    <img src={tradeImage}></img>
                </div>
            </div>

            {false && <Redirect to="/search" />}
        </Main>
    )

    
}
export default MainComponent;