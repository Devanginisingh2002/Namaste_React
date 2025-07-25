import React from "react";
import ReactDOM from "react-dom/client";
import styleCheck from "./index.css"

const Header = () => {
    return (
        <div className="header">
           <div className="logo-container">
             <img className="logo" src="https://static.vecteezy.com/system/resources/previews/019/166/318/non_2x/lion-head-lion-logo-symbol-gaming-logo-elegant-element-for-brand-abstract-symbols-vector.jpg">
             </img>
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
            <Header/>
        </div>
    )
}  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);