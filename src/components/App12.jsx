import React from "react";
import Main from "./Main";
import { useState } from "react";
export default function App12(){
    const [page,setPage]=useState();
    return (
        <div>
            <h2>This is App12</h2>
            <button onClick={() => setPage("a")}>a</button>
            <button onClick={() => setPage("b")}>b</button>
            <Main c={page}/>
        </div>
    )
}