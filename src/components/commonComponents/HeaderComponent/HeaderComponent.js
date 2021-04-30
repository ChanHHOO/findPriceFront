import React, {useState} from "react";
import { Search, Grid, Segment } from 'semantic-ui-react'
import logo from "../../../images/logo2.jpg"
import styled from "styled-components"

const Header = styled.div`
    
    font-size: 30px;
    .logo{
        height:3em;
    }
    border-bottom: solid 3px rgba(188,188,188,9);

`


const initialState = {

}
                // <Grid.Row>
                //     <span className={"description"}>
                //         팔고싶은 당신의 물건. 과연 얼마일까?
                //     </span>
                // </Grid.Row>

const HeaderComponent = () => {
    
    return(
        <Header>
            <Grid 
                centered
                columns={2}
            >
                <Grid.Row>
                    <img className={"logo"}src={logo}></img>
                    
                </Grid.Row>

            </Grid>
        </Header>
    )

    
}
export default HeaderComponent;