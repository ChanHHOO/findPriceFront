import React, { useEffect, useState, useLayoutEffect } from "react";
import styled from "styled-components";
import {BsInstagram, BsFacebook} from "react-icons/bs";

const Footer = styled.div`
    background-color:#485056;
    height:15em;
    display: flex;
    flex-direction:column;
    justify-content:center;
    color:grey;

    .appInfoSection{
        margin-bottom:1em;
    }

    .coInfoSection{
        display:flex;
        flex-direction:column;
        justify-content:start;
    }
    .contract{
        color:white;
        margin-top:1em;
        li{
            margin-right:0.5em;
        }
    }
    .location{
        margin-top:1em;
    }
    .repository{
        margin-top:1em;
    }
    ul{
        margin:0;
        list-style:none;
    }
    li{
        float: left;
    }
    hr{
        border-color:grey;
        width: 95%;
    }
    
`

const FooterComponent = (props) => {

    return (
        <Footer>
            <div className="appInfoSection">
                <ul>
                    ...
                </ul>
            </div>
            <hr />
            <div className="coInfoSection">
                <ul className="repository">
                    <li>
                        프론트엔드 레포지토리 : https://github.com/ChanHHOO/findPriceFront
                    </li>
                    <li>
                        백엔드 레포지토리 : https://github.com/ChanHHOO/findPriceBackend
                    </li>
                </ul>
                <ul className="location">
                    <li>
                        경기도 남양주시 화이팅
                    </li>
                </ul>
                <ul className="contract">
                    <li className="instagram">
                        <BsInstagram />
                    </li>
                    <li className="facebook">
                        <BsFacebook />
                    </li>
                </ul>
            </div>
        </Footer>
    );
}

export default FooterComponent;