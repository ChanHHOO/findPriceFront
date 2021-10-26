import React, {useState, useEffect, useCallback} from "react";
import { List, Segment} from 'semantic-ui-react'
import styled from "styled-components"
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import exampleItem from "../../images/exampleItem.jpg"

import {getDomainString} from "../../module/stringProccessing";

const ResultBody = styled.div`
    .cautionDescription{
        font-size:1.5em;
    }
    .chartSection{
        padding-top:3em;
        max-width:50em;

    }
    .VictoryContainer{
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
    graphData:[400000, 10000, 450000, 900000, 1124000, 1505000, 4000]
}

const mappingGraphData = (domain, data)=>{
    var li = []
    for(var i = 0 ; i < 4 ; i++){
        var tmp = {}
        tmp["x"] = domain[i];
        tmp['y'] = data[i];
        console.log(domain[i], data[i])
        li.push(tmp)
    }
    return li
}

const ChartSectionComponent = (props) => {
    const [state, setState] = useState(initialState);
    
    const {
        chartDomain_firstX,
        chartDomain_secondX,
        chartDomain_thirdX,
        chartDomain_fourthX,
        chartData_firstY,
        chartData_secondY,
        chartData_thirdY,
        chartData_fourthY,
    } = props.searchedData;
    
    
    const {unit, chartDomain} = getDomainString([chartDomain_firstX, chartDomain_secondX, chartDomain_thirdX, chartDomain_fourthX]);
    const chartDatas = [chartData_firstY, chartData_secondY, chartData_thirdY, chartData_fourthY];
    const mappedData = mappingGraphData(chartDomain, chartDatas);
    console.log(mappedData)

    return( 
        <Segment className={"chartSection"} textAlign={"center"}>
            <span className={"cautionDescription"}>판매 금액 구간별 그래프</span>
            <VictoryChart
                className={"chartContent"}
                domainPadding={{ x: 20 }}
            >
                <VictoryAxis
                    label={"판매 금액 /" + " 단위 : " +unit}
                    tickFormat={chartDomain}
                />
                <VictoryAxis
                    label={"게시글 갯수"}
                    dependentAxis
                    tickFormat={chartDatas}
                />
                <VictoryBar
                    data={mappedData}
                    x="x"
                    y="y"
                />

            </VictoryChart>
        </Segment>
    )
}
export default ChartSectionComponent;