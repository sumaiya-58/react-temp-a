import React,{useState,useRef} from "react";

export default function App9(){
const [color,setColor]=useState();
const txtRef=useRef();
const handleSubmit=()=>{
txtRef.current.style.color=color;
}
    return (
        <div>
        <input type="text" onChange={(e)=>setColor(e.target.value)}></input>
        <button onClick={handleSubmit}>submit</button>
        <h2 ref={txtRef}>hello world!!</h2>
        </div>
    );
}