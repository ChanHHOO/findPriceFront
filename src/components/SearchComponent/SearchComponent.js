import React, {useState, useEffect} from "react";
import { Search, Grid, Header, Form, Button } from 'semantic-ui-react'
import styled from "styled-components"
import axios from "axios";
import { Redirect } from 'react-router-dom';
import LoadingComponent from "../commonComponents/LoadingComponent";
const _Search = styled.div`


`
const SearchComponent = (props) => {
    const [itemName, setItemName] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [startSearch, setStartSearch] = useState(false);
    const {onSuccessSearch, onFailSearch, isSearched} = props;
    const onChangeInput = (e) => {
        //console.log(test)
        setItemName(e.target.value)
        //console.log(e.target.value)
    }
    const onSubmit = (e) => {
        console.log(isSearched)
        if(e.code.includes("Enter")){
            console.log("search")
            if(!isSearched){
                props.startSearch();
            }
            setStartSearch(true)
            axios.post('http://localhost:8080/api/getDaangnData',{
                searchItem:itemName,
                searchCategory:"get",
            })
            .then((res) => {
                // response value mapping code
                onSuccessSearch(res.data);
                // --------------------------
                setIsSuccess(true);
                setItemName("");
                setStartSearch(false);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
    useEffect(()=>{}, [isSuccess])

    return (
      <div>
        <Search
          value={itemName}
          size={"mini"}
          onSearchChange={onChangeInput}
          onKeyPress={onSubmit}
        />
        {
            startSearch ? <LoadingComponent /> : <></>
        }
      </div>
    );
}
export default SearchComponent;