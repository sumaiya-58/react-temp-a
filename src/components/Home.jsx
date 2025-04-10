
export default function Home(props){
   
    return (
        <div >
        <p styles={{textAlign:"center",backgroundColor:"wheat"}}>Hello {props.name}, are u {props.age}?</p>
        </div>
    );
}