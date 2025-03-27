import React,{useState,useRef} from "react";


export default function App10(){
const [num,setNumber]=useState();
const numRef=useRef();
    return (
        
        <div>
            <center>
            <p><input type="number" onChange={(e)=>setNumber(e.target.value)}></input></p>
            <p ref={numRef}>{num}</p>
            </center>
        </div>
        
        
    )
}