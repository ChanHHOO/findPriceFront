import React, { useEffect, useState, useLayoutEffect } from "react";
//https://velog.io/@velopert/react-redux-hooks
import { Search, Grid, Segment } from 'semantic-ui-react'
import styled from "styled-components"
import tradeImage from "../../images/tradeImage3.png"
import { Redirect } from "react-router-dom";
import ReactLoading from "react-loading";

const Main = styled.div`
    position:relative;
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
        min-width:${props=>props.textSectionMinWidth}px;
        
    }}
    .description{
        font-size:3em;
    },
    .firstTitle{
        margin-bottom:1em;
    },
`
const Loading = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position:absolute;
    background: rgba(225, 223, 223, 0.7);
    min-width:400px;
    min-height:200px;
    top:${props=>(props.bodyHeight / 2.3)}px;
    left:${props=>(props.bodyWidth / 2.5)}px;

`



const MainComponent = (props) => {


    const [textSectionMinWidth, setTextSectionMinWidth] = useState("10px")
    useEffect(()=>{
        setTextSectionMinWidth(document.getElementsByClassName("firstTitle")[0].offsetWidth); 
        
    })

    const useWindowSize = () => {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize(){
                setSize([window.innerWidth, window.innerHeight]);

            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return ()=>window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }
    
    const [bodyWidth, bodyHeight] = useWindowSize();

    return (
        <>
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
                {false && <Redirect to="/search" />}
            </Main>
            {props.startSearch ?
                <Loading 
                    bodyWidth={bodyWidth}
                    bodyHeight={bodyHeight}>
                    <ReactLoading type={"spin"} color={"#E37084"} />
                    <span>Loading...</span>
                </Loading>
                :
                <></>
            }
        </>

        
    )

    
}
export default MainComponent;