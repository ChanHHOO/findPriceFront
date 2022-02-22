import React, {useState, useEffect} from "react";
import { Search, Grid, Header, Form, Button } from 'semantic-ui-react'
import styled from "styled-components"
import axios from "axios";
import LoadingComponent from "../commonComponents/LoadingComponent";
const _Search = styled.div`


`
const SearchComponent = (props) => {
    const [itemName, setItemName] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [startSearch, setStartSearch] = useState(false);
    const {onSuccessSearch, onFailSearch, isSearched} = props;
    const onChangeInput = (e) => {
        setItemName(e.target.value)
    }
    const onSubmit = (e) => {
        if(e.code.includes("Enter")){
            if(!isSearched){
                props.startSearch();
            }
            setStartSearch(true)
            axios.post('http://13.124.147.122:8081/api/getDaangnData',{
                article_title:itemName,
                searchCategory:"get",
            })
            .then((res) => {
                // response value mapping code
                onSuccessSearch(res.data);
                // --------------------------
                localStorage.setItem('currentSearchedItem', itemName)
                setIsSuccess(true);
                setItemName("");
                setStartSearch(false);
                
            })
            .catch((err) => {
                if (err.request.status === 500){
                    setStartSearch(false);
                    alert("찾는 물건이 없습니다.");
                    setItemName("");
                    
                }
                console.log(err)
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