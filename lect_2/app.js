import React from "react";
import ReactDOM from "react-dom/client";

// "Creating for a single element";
/*
        const heading = React.createElement("h1", {id: "heading"}, "Hello from Lecture 1");
        console.log(heading);   // Return Object
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);

        */

// "Create for a Nested div, like below as Parent-child";
/* 
  <div id="parent">
     <div id="child">
        <h1>Hello</h1>
     </div>
  </div>
*/
/*
const parent = React.createElement(
   "div", 
   {id: "parent"}, 
   React.createElement(
     "div", 
     {id:"child"}, 
     React.createElement(
        "h1", 
        {}, 
        "I am h1 Tag")  
     )
);
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
*/

// "Create for a Nested div as Siblings"
/* 
  <div id="parent">
     <div id="child">
        <h1>h1 tag</h1>
        <h2>h2 tag</h2>
     </div>
  </div>
*/
/*
const parent = React.createElement(
   "div", 
   {id: "parent"}, 
   React.createElement("div",  {id:"child"}, 
     [React.createElement("h1", {},"Hello, H1 tag"),
      React.createElement("h2", {}, "Hello H2 tag")]
   )
 );
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
*/

// "Create for a Nested div as Siblings"
/* 
  <div id="parent">
     <div id="child1">
        <h1>h1 tag</h1>
        <h2>h2 tag</h2>
     </div>
     <div id="child2">
        <h1>h1 tag</h1>
        <h2>h2 tag</h2>
     </div>
  </div>
*/

const parent = React.createElement(
   "div", 
   {id: "parent"}, 
   [ 
   React.createElement("div", {id:"child1"}, 
     [React.createElement("h1", {},"Hello, H1 tag"),
      React.createElement("h2", {}, "Hello H2 tag")]
     ),
   React.createElement("div", {id:"child2"}, 
     [React.createElement("h1", {},"Hello, H1 tag"),
      React.createElement("h2", {}, "Hello H2 tag")]
     )
   ]
 );
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);