import "./App1.css";
import Home from "./Home.jsx"
import styles from "./App1.module.css"
export default function App13(){
   
    return (
        
        <div style={{textAlign:"center"}}>
        <h3 
        style={{backgroundColor:"wheat"}}
        name="john"
        ></h3>
        <Home name="john" age={34}/>
        </div>
    );
}