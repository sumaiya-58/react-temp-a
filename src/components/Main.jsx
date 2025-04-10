import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";


export default function Main(props){
    return props.c==="a"? <Child1/> : <Child2/>

    // if(props.c==="a"){
    //     return (<Child1/>)
    // }
    // else{
    //     return(<Child2/>)
    // }

}