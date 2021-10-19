import React, {useState, useEffect} from "react";
import { Button } from 'semantic-ui-react'
import styled from "styled-components"
import axios from "axios";

const UpdateButton = styled.div`
    margin-left:1em;
`

const initialState = {
    isCompleteSearch:false,       
}
    


const UpdateButtonComponent = (props) => {

    const onClickUpdateButton = ()=>{
        axios.post('http://localhost:8080/api/updateDaangnData',{
            searchItem:props.article_title,
            searchCategory:"update",
        })
        .then((res) => {
            // response value mapping code
            console.log(res.data)
            props.onSuccessUpdate(res.data)
            // --------------------------
        })
        .catch((err) => {
            console.log(err);
        })
    }


    return(
        <Button onClick={onClickUpdateButton} inverted color={"purple"}>
            업데이트
        </Button>
    )
}
export default UpdateButtonComponent;