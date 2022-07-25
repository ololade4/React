import React from "react";
function Drink(){
    return<h1 style={{backgroundColor:"aquamarine", padding:"50px", color: "red"}}>beer</h1>
}
function Nodrink(){
    return<h1 style={{backgroundColor:"aquamarine", padding:"50px", color: "red"}}>we are taking water today not beer</h1>
}

function Totake(props){
    const party=props.party;
    if(party){
        return<Drink /> 
    }
    return<Nodrink />
} 
function Niceone(){
    return<Totake party={false}/>
} 
export default Niceone;