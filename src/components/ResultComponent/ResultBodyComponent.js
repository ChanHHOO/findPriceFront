import React, {useState, useEffect} from "react";
import { Search, Grid, Segment, Card, Image } from 'semantic-ui-react'
import styled from "styled-components"
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import exampleItem from "../../images/exampleItem.jpg"
const ResultBody = styled.div`
    min-width:70em;
    font-size:1em;
    .priceDescription{
        font-size:2.5em;
    };
    .lowAndHigh{
        margin-top:1em;
        margin-left:8em;
        margin-bottom:2em;
    }
    .cautionDescription{
        font-size:2.5em;
    }
    .orangeColor{
        font-color:#FF7E36;
    }
    .chartSection{
        padding-top:3em;
        max-width:50em;

    }
    .VictoryContainer{
        margin-left:10em;
    }
    .priceSection{
        padding-top:2em;
    }
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

const handleGraphData = (clowlingData)=>{

    
    var sumPrice = 0;
    clowlingData.sort();
    var axisVal = clowlingData[clowlingData.length - 1] / 5
    var xDomain = [axisVal*2, axisVal*3, axisVal*4, axisVal*5] // x축 값
    // graphData 선언부
    var gd = [
        {x:xDomain[0], y:0},
        {x:xDomain[1], y:0},
        {x:xDomain[2], y:0},
        {x:xDomain[3], y:0}
    ];
    
    for(var i=0; i < clowlingData.length; i++){
        for (var j=0; j<xDomain.length-1; j++){
            if (clowlingData[i] > xDomain[j] && clowlingData[i] < xDomain[j+1]){
                gd[j].y += 1;
                break;
            }
            if (clowlingData[i] >= xDomain[3]){
                gd[3].y += 1;
                break;
            }
        }
    }    
    
    // y축 값
    
    var maxY = 0
    for(var i = 0; i < 4; i++){
        if (maxY < gd[i].y) maxY = gd[i].y;
    }
    const yList = [Math.floor(maxY / 4), Math.floor(maxY / 3), Math.floor(maxY / 2), maxY];
    
    return {xList:xDomain, yList: yList, graphData: gd};

}

const ResultBodyComponent = (props) => {
    
    const totalItemCount = props.totalItemCount || 865;
    const averagePrice = props.averagePrice || 35053351 ;
    
    const [state, setState] = useState(initialState);
    
    var handledGraphData = handleGraphData(state.graphData);

    return(
        <ResultBody>
            <Segment.Group>
                <Segment className={"priceSection"}>
                    <span className={"priceDescription"}>{state.searchedItem.itemName}의 평균 가격은 {averagePrice}원 입니다.</span>
                    
                    <Grid columns={2} className={"lowAndHigh"}>
                        <Grid.Column>                   
                            <Card>
                                최소가 상품
                                <Image src={state.lowestItem.img}/>
                                <Card.Content>
                                    
                                    <Card.Header>{state.lowestItem.itemName}</Card.Header>
                                    <Card.Description>{state.lowestItem.price}원</Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>                   
                            <Card>
                                최대가 상품
                                <Image src={state.highestItem.img}/>
                                <Card.Content>
                                    <Card.Header>{state.highestItem.itemName}</Card.Header>
                                    <Card.Description>{state.highestItem.price}원</Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid>
                    <span className={"cautionDescription"}>※ 평균 가격은 <span style={{color:"#FF7E36"}} >당근마켓</span>에서 판매중인 상품 {totalItemCount}개에 대한 가격 입니다.</span>
                    
                    
                </Segment>
                
                <Segment className={"chartSection"}>
                    <span className={"cautionDescription"} style={{marginLeft:"8em"}}>판매 금액 구간별 그래프</span>
                    <VictoryChart 
                        className={"chartContent"}
                        domainPadding={{x:20}}
                    >
                        <VictoryAxis
                            label={"판매 금액"}
                            tickFormat={handledGraphData.xList}
                        />
                        <VictoryAxis
                            label={"물량 갯수"}
                            dependentAxis
                            tickFormat={handledGraphData.yList}
                        />
                        <VictoryBar
                            data = {handledGraphData.graphData}
                            x = "x"
                            y = "y"
                        />
                        
                    </VictoryChart>
                </Segment>
            </Segment.Group>
            
        </ResultBody>
        
    )
}
export default ResultBodyComponent;