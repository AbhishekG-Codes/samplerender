import Home from "./Home";

export default function Navbar(props){
    return(
        <>
           <h1>hello welcome {props.username}and {props.email}</h1>
           <Home name={props.username }/>
        </>
    )
}