import React, {useState, useEffect} from "react";
import { Search, Grid, Segment, Card, Image } from 'semantic-ui-react'
import styled from "styled-components"
import exampleItem from "../../images/exampleItem.jpg"
const InitialBody = styled.div`
    min-width:70em;
`


const initialState = {
    searchedItem : {
        itemName:"삼성 에어컨",
        
    },
    highestItem:{
        itemName:"삼성 무풍 에어컨",
        price:"300000000",
        img:exampleItem,
    },
    lowestItem:{
        itemName:"삼성 싸구려 에어컨",
        price:"3000",
        img:exampleItem,
    },
    graphData:[5000000, 10000, 450000, 900000, 1124000, 1505000, 4000]
}
    

const InitialResultComponent = (props) => {
    console.log(props);
    
    return(
        <InitialBody>
            <Segment.Group>
                <Segment className={"noneSection"}>
                    
                    
                </Segment>
            </Segment.Group>
            
        </InitialBody>
        
    )
}
export default InitialResultComponent;