import React, {useState, useEffect} from "react";
import { Search, Grid, Segment } from 'semantic-ui-react'
import logo from "../../../images/logo2.jpg"
import styled from "styled-components"
import { Redirect } from "react-router";

import SearchContainer from "../../../containers/SearchContainer/SearchContainer";

const Header = styled.div`
    display:flex;
    justify-content:center;
    position: fixed;
    width:100%;
    z-index:99;
    background-color:white;
    font-size: 30px;
    margin-bottom:100px;
    .logoImg{
        height:3em;
    }
    border-bottom: solid 1.5px rgba(188,188,188,9);
    .searchForm{{
        margin-left:10em;
        margin-top:0.5em;
    }}
    
    .headerContents{
        display:flex;
    }
`


const HeaderComponent = (props) => {

    const [headerHeight, setHeaderHeight] = useState("");
    const [isClickedLogo, setIsClickedLogo] = useState(false);
    
    return (

        <>
            <Header className={"header"} id={"header"}>
                <div className={"headerContents"}>
                    <div className={"logo"}>
                        <a href={"/"}>
                            <img className={"logoImg"} src={logo}></img>
                        </a>
                    </div>

                    <div className={"searchForm"}>
                        <SearchContainer />
                    </div>
                </div>
            </Header>
            {
                props.isSearched ?
                    <Redirect to={{ pathname: '/search' }}/>
                :
                <></>
            }
        </>




    )
}
export default HeaderComponent;