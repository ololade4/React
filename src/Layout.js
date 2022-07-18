import { Outlet,Link } from "react-router-dom"; 
import React from "react";
import './Layout.css'


const Layout = () => {
    return(
        <div className="tao">
            <nav>
                <ul className="header">
                <li>
                        <Link to= "/self">First Page </Link>
                    </li>
                    <li>
                        <Link to= "/Home"> Home Page </Link>
                    </li>
                    <li>
                        <Link to="/Basic "> Basic React </Link>
                    </li>
                    <li>
                        <Link to="/Contact"> Contact Us </Link>
                    </li>
                    
                </ul>
            </nav>
            <Outlet />
        </div>
    )
};
export default Layout;