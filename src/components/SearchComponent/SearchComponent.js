import React, {useState} from "react";
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

const HeaderComponent = () => {
    const [itemName, setItemName] = useState("");
    
    const onChangeInput = (e) => {
        setItemName(e.target.data)
        
    }
    
    return(
        <div>
            <Grid 
                centered
                style={{paddingTop:"2em"}}
                className={"searchSection"}
            >
                <Grid.Row>
                    <Search value={itemName} onSearchChange={onChangeInput}/>
                </Grid.Row>
            </Grid>
        </div>
    )

    
}
export default HeaderComponent;