import React from "react";

function Tunji(props){
    return<h1 style={{paddingLeft:"20px"}}>welcome to my page. I am a {props.job.role} developer</h1>
};

function Dev(){ 
    const person={name:"ola", job:"Dev", role:"backend"};
    return(
        <div>
            <h2 style={{paddingLeft:"20px"}}>My name is Tunji</h2>
            <Tunji job={person} />
        </div>
    );
};
export default Dev;