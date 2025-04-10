import React from "react";

export default function Parent(){
    return(

        <div style={{backgroundColor:"pink"}}>
            {props.children}
        </div>
    )
}