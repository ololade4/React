import React from "react";

function Tunji(props){
    return<h1 style={{paddingLeft:"20px",textAlign:"center"}}>I am a {props.job.role} developer</h1>
};

function Dev(){ 
    const person={name:"ola", job:"Dev", role:"backend"};
    return(
        <div>
            <h2 style={{paddingLeft:"20px",textAlign:"center"}}>My name is OLOADE</h2>
            <Tunji job={person} />
        </div>
    );
};
export default Dev;