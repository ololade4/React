import React from "react"; 
 

const Basic = () => { 
    const newstyle={
        backgroundColor: "black",
        fontSize: "15px",
        padding:"10px 15px",
        color:"white",
        textAlign:"center",
    
        

    }
    return(
        <div style={newstyle}>
            <h2>React.js have some specific and distinctive properties which makes 
                it a better option than it counterparts like the ANGULAR, VUE.GS etc.
                These properties are that the React.js is self-declarative, it is a 
                simple application to operate on, it is a component based application,
                React.js supports server side in other to yield the best results, it 
                has a quick responsiveness, it is used for the handling of view layer
                of web and mobile apps.
                
            </h2>
            <h3>
            Sometimes, setting up a react app comes with time consuming steps, but React.js 
             CDN makes web designing and it other aspects more easy for a web developer. 
             you can start your react application by doing npm start or embedding CDN.
            </h3>
        </div>
    )
};
export default Basic;