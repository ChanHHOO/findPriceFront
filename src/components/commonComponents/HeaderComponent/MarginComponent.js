import React, {useState, useEffect} from "react";
import styled from "styled-components"

const Margin = styled.div`
    min-height:${props=>props.headerHeight}
`

const MarginComponent = (props) => {

    const [headerHeight, setHeaderHeight] = useState("");

    useEffect(()=>{
        const headerHeightElement = document.getElementById("header");
        setHeaderHeight(getComputedStyle(headerHeightElement).height)
        
    })
    return(
        <Margin headerHeight={headerHeight}></Margin>
    )
}
export default MarginComponent;