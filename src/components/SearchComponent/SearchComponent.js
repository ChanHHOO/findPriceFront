import React, {useState, useEffect} from "react";
import { Search, Grid, Header, Form, Button } from 'semantic-ui-react'
import styled from "styled-components"
import axios from "axios";
import { Redirect } from 'react-router-dom';

const _Search = styled.div`


`
const SearchComponent = (props) => {
    const [itemName, setItemName] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const {onSuccessSearch, onFailSearch, isSearched} = props;
    const onChangeInput = (e) => {
        //console.log(test)
        setItemName(e.target.value)
        //console.log(e.target.value)
    }
    const onSubmit = (e) => {
        
        if(e.code.includes("Enter")){
            axios.post('http://localhost:8080/api/updateDaangnData',{
                searchItem:itemName,
                searchCategory:"get",
            })
            .then((res) => {
                // response value mapping code
                console.log(res.data)
                onSuccessSearch(res.data);
                // --------------------------

                

                setIsSuccess(true);
                setItemName("");
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
    useEffect(()=>{}, [isSuccess])

    return(
        isSuccess?
        <Redirect 
            to={{
                pathname:'/search'
            }}/>
        :
        <div>
            <Search 
                value={itemName}
                size={"mini"}
                onSearchChange={onChangeInput} 
                onKeyPress={onSubmit}/>
        </div>


    )
}
export default SearchComponent;