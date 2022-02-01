import React, { useEffect, useState, useLayoutEffect } from "react";
//https://velog.io/@velopert/react-redux-hooks
import { Search, Grid, Segment } from 'semantic-ui-react'
import styled from "styled-components"
import tradeImage from "../../images/tradeImage3.png"
import { Redirect } from "react-router-dom";
import ExampleChart from "./ExampleChart";

const Main = styled.div`
    position:relative;
    background-color:#FBF7F2;
    padding-top:10em;
    .mainComponent{
        min-height:40em;
        padding-top:6em;
        display:flex;
        justify-content:center;
    }
    .textSection{
        margin-right:10em;
        margin-top:10em;
        min-width:${props => props.textSectionMinWidth}px;
    }
    .description{
        font-size:3em;
    }
    .firstTitle{
        margin-bottom:1em;
    }
    .introduceFunc{
        min-height:90vh;
        display:flex;
        justify-content:center;
        background-color:white;
        .textSection{
            margin-top:30em;
        }
    }


`


const MainComponent = (props) => {


    const [textSectionMinWidth, setTextSectionMinWidth] = useState("10px")
    useEffect(() => {
        setTextSectionMinWidth(document.getElementsByClassName("firstTitle")[0].offsetWidth);

    })

    const useWindowSize = () => {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);

            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    const [bodyWidth, bodyHeight] = useWindowSize();

    return (
        <Main
            textSectionMinWidth={textSectionMinWidth}

        >
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


            <div className="introduceFunc">
                <div className="chartSection" style={{ width: "40%" }}>
                    <ExampleChart />
                </div>
                <div className={"textSection"}>
                    <div className={"firstTitle"}>
                        <span className={"description"}>
                            내 물건의 가격정보를
                        </span>
                    </div>
                    <div>
                        <span className={"description"} >
                            한 눈에 알아보자!
                        </span>
                    </div>
                </div>
                
            </div>
            {false && <Redirect to="/search" />}
        </Main>


    )


}
export default MainComponent;