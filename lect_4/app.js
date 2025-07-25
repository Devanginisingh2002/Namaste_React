import React from "react";
import ReactDOM from "react-dom/client";
import logo from './logo.png';



const Header = () => {
    return (
        <div className="header">
           <div className="logo-container">
             <img className="logo" src={logo}></img>
           </div>
           
           <div className="navbar">
              <nav>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <li>Contact Us</li>
                </ul>
              </nav>
           </div>
        </div>
        
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            {/* Header Component */}

        </div>
    )
}  
