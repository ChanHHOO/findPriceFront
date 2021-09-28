import React, {useState} from "react";
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

const HeaderComponent = (props) => {
    const [itemName, setItemName] = useState("");
    
    const onChangeInput = (e) => {
        setItemName(e.target.data)
    }
    const onSubmit = (e) => {
        console.log(props);
    }
    
    return(
        <div>
            <Search 
                value={itemName}
                size={"mini"}
                onSearchChange={onChangeInput} 
                onKeyPress={onSubmit}/>
        </div>
    )    
}
export default HeaderComponent;