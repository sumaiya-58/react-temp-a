import "./App1.css";
import styles from "./App1.module.css"
export default function App1(){
    const mystyle={
        backgroundColor:"yellow",
        color:"brown",
    }
    return (
        <div style={{textAlign:"center"}}>
        <h3>this is app</h3>
        <p style={{backgroundColor:'pink',color:'blue'}}>this is paragraph</p>
        <p style={mystyle}>this is another paragrsph</p>
        <p className="apptxt">this is ek aur para</p>
        <p className={styles.txtPara}>this is kuch aur para</p>
        </div>
    );
}