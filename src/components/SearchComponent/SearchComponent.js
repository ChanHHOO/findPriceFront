import React, {useState} from "react";
import { Search, Grid, Header, Segment, Button } from 'semantic-ui-react'
import styled from "styled-components"
import axios from "axios";

const _Search = styled.div`


`


const HeaderComponent = () => {
    const [itemName, setItemName] = useState("");
    
    const onChangeInput = (e, data) => {
        setItemName(data.value)
    }
    const onSubmit = () => {
        console.log(itemName)
        axios.post("http://localhost:8080/api/getDaangnData",
            {
                searchItem: itemName,
            })
            .then((resonse) => { console.log(resonse) })
            .catch(err => { console.log(err) })
    }

    
    return(
        <_Search>
            <Grid 
                centered
                style={{paddingTop:"2em"}}
                className={"searchSection"}
            >
                <Grid.Row>
                    <Search 
                        onSearchChange={onChangeInput}/>
                    <Button 
                        style={{marginLeft:"1em"}} 
                        id={"submitBtn"} 
                        basic 
                        color="blue"
                        onClick={()=>onSubmit()}>
                        GO 
                    </Button>
                </Grid.Row>
            </Grid>
        </_Search>
    )

    
}
export default HeaderComponent;