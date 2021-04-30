import React, {useState} from "react";
import { Search, Grid, Segment } from 'semantic-ui-react'
import styled from "styled-components"

const ResultBody = styled.div`
    min-width:70em;
    .priceExplanation{
        font-size:2em;
    }

`


const initialState = {
    averagePrice:350515321,
    itemName:"김찬호",
    
}

const ResultBodyComponent = (props) => {
    const [itemName, setItemName] = useState(props.itemName ||"김찬호");
    const [averagePrice, setAveragePrice] = useState(props.averagePrice || 35053351);
    
    
    
    
    return(
        <ResultBody>
            <Segment.Group>
                <Segment className={"priceSection"}>
                    <span className={"priceExplanation"}>{itemName}의 평균 가격은 {averagePrice}원 입니다.</span>
                </Segment>
                
                <Segment className={"chartSection"}>
                
                </Segment>
            </Segment.Group>
            
        </ResultBody>
        
    )

    
}
export default ResultBodyComponent;