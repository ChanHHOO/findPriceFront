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

const initialData = {
    chartDomain_firstX : "0 ~ 0",
    chartDomain_secondX : "0 ~ 0",
    chartDomain_thirdX : "0 ~ 0",
    chartDomain_fourthX : "0 ~ 0",
    chartData_firstY : 0,
    chartData_secondY : 0,
    chartData_thirdY : 0,
    chartData_fourthY : 0,
}

const mappingGraphData = (domain, data)=>{
    var li = []
    for(var i = 0 ; i < 4 ; i++){
        var tmp = {}
        tmp["x"] = domain[i];
        tmp['y'] = data[i];
        li.push(tmp)
    }
    return li
}

const ChartSectionComponent = (props) => {
    const {
        chartDomain_firstX,
        chartDomain_secondX,
        chartDomain_thirdX,
        chartDomain_fourthX,
        chartData_firstY,
        chartData_secondY,
        chartData_thirdY,
        chartData_fourthY,
    } = (props.searchedData.chartDomain_firstX == "" || props.searchedData.chartDomain_firstX == undefined) ?  initialData : props.searchedData;

    console.log(chartDomain_firstX);
    const {unit, chartDomain} = getDomainString([chartDomain_firstX, chartDomain_secondX, chartDomain_thirdX, chartDomain_fourthX]);
    const chartDatas = [chartData_firstY, chartData_secondY, chartData_thirdY, chartData_fourthY];
    const mappedData = mappingGraphData(chartDomain, chartDatas);

    return( 
        <Segment className={"chartSection"} textAlign={"center"}>
            <span className={"cautionDescription"}>판매 금액 구간별 그래프</span>
            <VictoryChart
                className={"chartContent"}
                domainPadding={{ x: 20 }}
            >
                <VictoryAxis
                    padding={100}
                    label={"판매 금액 /" + " 단위 : " +unit}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={chartDatas}
                />
                <VictoryBar
                    style={{ data: { fill: "#F7B9C9" }}}
                    data={mappedData}
                    x="x"
                    y="y"
                />
            </VictoryChart>
        </Segment>
    )
}
export default ChartSectionComponent;