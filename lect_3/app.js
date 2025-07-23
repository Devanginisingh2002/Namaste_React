import React from "react";
import ReactDOM from "react-dom/client";

// This is creating ReactElement using react core. Plain js
// React.createElement => Object => HTMLElement(render)
const heading = React.createElement("h1", {id: "heading"}, "Lecture_3: Let's Go");

// Create
const checkJSX = <h1 id="heading">Hello, I am JSX</h1>
console.log("hello", checkJSX);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
