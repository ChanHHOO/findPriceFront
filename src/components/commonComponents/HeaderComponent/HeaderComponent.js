import React, {useState} from "react";
import { Search, Grid, Segment } from 'semantic-ui-react'
import logo from "../../../images/logo2.jpg"
import styled from "styled-components"

import SearchComponent from "../../SearchComponent/SearchComponent";
import SearchContainer from "../../../containers/SearchContainer/SearchContainer";

const Header = styled.div`
    position: fixed;
    width:100%;
    z-index:99;
    background-color:white;
    font-size: 30px;
    .logoImg{
        height:3em;
    }
    border-bottom: solid 1.5px rgba(188,188,188,9);
    .searchForm{{
        margin-left:13em;
    }}
`


const initialState = {

}
                // <Grid.Row>
                //     <span className={"description"}>
                //         팔고싶은 당신의 물건. 과연 얼마일까?
                //     </span>
                // </Grid.Row>

const HeaderComponent = () => {
    //const SearchContainer = props;
    return(
        <Header>
            <Grid 
                columns={5}
            >
                <Grid.Column className={"logo"}>
                    <img className={"logoImg"}src={logo}></img>
                </Grid.Column>
                <Grid.Column className={"searchForm"} verticalAlign={"middle"}>
                    <SearchContainer />
                </Grid.Column>
            </Grid>
        </Header>
    )
}
export default HeaderComponent;