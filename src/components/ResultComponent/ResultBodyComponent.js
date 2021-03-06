import React, {useState, useEffect, useCallback} from "react";
import { Search, Grid, Segment, Card, Image } from 'semantic-ui-react'
import styled from "styled-components"
import axios from "axios";
import UpdateButtonComponent from "./UpdateButtonComponent";
import ChartSectionComponent from "./ChartSection";
import {getDomainString, getLastUpdateTimeString} from "../../module/stringProccessing";
import LoadingComponent from "../commonComponents/LoadingComponent";

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
    
    const [startSearch, setStartSearch] = useState(false);

    const handleStartUpdate= async (bool)=>{
        await setStartSearch(bool)
    }
  if (props.searchedData.article_title === "" || props.searchedData.article_title === undefined) {
    
    axios.post('http://13.124.147.122:8080/api/getDaangnData', {
      searchItem: localStorage.getItem("currentSearchedItem"),
      searchCategory: "get",
    })
      .then((res) => {
        // response value mapping code
        props.onSuccessSearch(res.data[res.data.length - 1]);
        setStartSearch(false);
        // --------------------------
      })
  }

  useEffect(() => {
    },[startSearch])
    return (
      <ResultBody>
        <Segment.Group>
          <Segment>
            <div>
              <span className={"itemTitle"}>
                {props.searchedData.article_title}
              </span>
              <UpdateButtonComponent
                article_title={props.searchedData.article_title}
                onSuccessUpdate={props.onSuccessSearch}
                handleStartUpdate={handleStartUpdate}
              />
            </div>
            <span style={{ color: "grey" }}>
              ?????? ???????????? :{" "}
              {getLastUpdateTimeString(props.searchedData.article_updateTime)}
            </span>
          </Segment>
          <Segment className={"priceSection"}>
            <span className={"priceDescription"}>
              {" "}
              ?????? ?????? : {props.searchedData.article_avrPrice}???
            </span>

            <Grid columns={2} className={"lowAndHigh"}>
              <Grid.Column>
                <Card>
                  ????????? ?????? : {props.searchedData.article_minArticleTitle}
                  <Image src={props.searchedData.article_minImgStr} />
                  <Card.Content>
                    <Card.Description>
                      {props.searchedData.article_minPrice}???
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  ????????? ?????? : {props.searchedData.article_maxArticleTitle}
                  <Image src={props.searchedData.article_maxImgStr} />
                  <Card.Content>
                    <Card.Description>
                      {props.searchedData.article_maxPrice}???
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid>
            <span className={"cautionDescription"}>
              ??? ?????? ????????? <span style={{ color: "#FF7E36" }}>????????????</span>
              ?????? ???????????? ?????? {props.searchedData.article_count}?????? ??????
              ?????? ?????????.
            </span>
          </Segment>

          <ChartSectionComponent searchedData={props.searchedData} />
        </Segment.Group>
        {startSearch ? <LoadingComponent /> : <></>}
      </ResultBody>
    );
}
export default ResultBodyComponent;