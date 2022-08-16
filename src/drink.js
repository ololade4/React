import React from "react";
function Drink(){
    return
}
function Nodrink(){
    return
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