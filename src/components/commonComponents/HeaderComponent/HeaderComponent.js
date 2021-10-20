import React, {useState, useEffect} from "react";
import { Search, Grid, Segment } from 'semantic-ui-react'
import logo from "../../../images/logo2.jpg"
import styled from "styled-components"
import { Redirect } from "react-router";

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
    margin-bottom:100px;
`


const HeaderComponent = (props) => {

    const [headerHeight, setHeaderHeight] = useState("");
    const [isClickedLogo, setIsClickedLogo] = useState(false);
    
    const onClickLogo = ()=>{

        window.location.href = "/"
    }

    useEffect(()=>{
        
    })

    return (

        <>
            <Header className={"header"} id={"header"}>

                <Grid
                    columns={5}
                >
                    <Grid.Column className={"logo"}>
                        <img onClick={onClickLogo} className={"logoImg"} src={logo}></img>
                    </Grid.Column>
                    <Grid.Column className={"searchForm"} verticalAlign={"middle"}>
                        <SearchContainer />
                    </Grid.Column>
                </Grid>
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