import React, { useEffect, useState, useLayoutEffect } from "react";
import styled from "styled-components"
import ReactLoading from "react-loading";

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

const LoadingComponent = (props) =>{

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
      <Loading bodyWidth={bodyWidth} bodyHeight={bodyHeight}>
        <ReactLoading type={"spin"} color={"#E37084"} />
        <span>Loading...</span>
      </Loading>
    );
}