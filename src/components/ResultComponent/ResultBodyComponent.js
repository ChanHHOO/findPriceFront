import React, {useState, useEffect, useCallback} from "react";
import { Search, Grid, Segment, Card, Image } from 'semantic-ui-react'
import styled from "styled-components"
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import exampleItem from "../../images/exampleItem.jpg"


import UpdateButtonComponent from "./UpdateButtonComponent";
import ChartSectionComponent from "./ChartSection";
import {getDomainString, getLastUpdateTimeString} from "../../module/stringProccessing";

const ResultBody = styled.div`
    display:flex;
    justify-content:center;
    padding-top:2em;
    padding-bottom:5em;
    background-color:#FBF7F2;
    min-width:70em;
    font-size:1em;
    .priceDescription{
        font-size:2.5em;
    };
    .lowAndHigh{
        margin-top:1em;
        margin-bottom:2em;
    }
    .cautionDescription{
        font-size:1.5em;
    }
    .orangeColor{
        font-color:#FF7E36;
    }

    .priceSection{
        padding-top:2em;
    }
    .itemTitle{
        font-size:2em;
        margin-right:1em;
    }
`
const ResultBodyComponent = (props) => {
    console.log("resultBody" + props.searchedData);

    return(
        <ResultBody>
            <Segment.Group>
                <Segment>
                    <div>
                        <span className={"itemTitle"}> 
                            {props.searchedData.article_title}
                        </span>
                        <UpdateButtonComponent article_title={props.searchedData.article_title} onSuccessUpdate={props.onSuccessSearch}/>
                    </div>
                    <span style={{color:"grey"}}>
                        최근 업데이트 : {getLastUpdateTimeString(props.searchedData.article_updateTime)}
                    </span>
                    
                </Segment>
                <Segment className={"priceSection"}>
                    <span className={"priceDescription"}> 평균 가격 : {props.searchedData.article_avrPrice}원</span>
                    
                    <Grid columns={2} className={"lowAndHigh"}>
                        <Grid.Column>                   
                            <Card>
                                최소가 상품 : {props.searchedData.article_minArticleTitle}
                                <Image src={props.searchedData.article_minImgStr}/>
                                <Card.Content>
                                    
                                    
                                    <Card.Description>{props.searchedData.article_minPrice}원</Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>                   
                            <Card>
                                최대가 상품 : {props.searchedData.article_maxArticleTitle}
                                <Image src={ props.searchedData.article_maxImgStr}/>
                                <Card.Content>
                                    
                                    <Card.Description>{props.searchedData.article_maxPrice}원</Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid>
                    <span className={"cautionDescription"}>※ 평균 가격은 <span style={{color:"#FF7E36"}} >당근마켓</span>에서 판매중인 상품 {props.searchedData.article_count}개에 대한 가격 입니다.</span>        
                </Segment>
                
                <ChartSectionComponent searchedData={props.searchedData}/>
            </Segment.Group>
            
        </ResultBody>
        
    )
}
export default ResultBodyComponent;