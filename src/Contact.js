import React from "react";
import styles from './button.module.css';

const Contact = () => { 
    return(
        <div className={styles.bigclass}>
            <h2>
            Before you can install react on your system you are going to run 
            some lines of code on your command line(U can use command prompt 
            or Gitbash) run [nmp install -g create-react-app ] to install your
             react app, also run [npx create-react-app index] to create your 
             react app. You can also run npm -v or npm --version to know the 
             version of react you I have installed. Nb: make sure u are connected
              to the internet when u are running the above
            </h2>
            <h3>after you have installed and created your react app in the command line.
                 To start with, we have created our react app earlier, so you have to 
                 open the folder name “index” with Vscode and run npm start in your 
                 terminal to start the react app
            </h3>
            <h4>
               start your react app happy hacking.

                
            </h4>
        </div>
    )
}
export default Contact;