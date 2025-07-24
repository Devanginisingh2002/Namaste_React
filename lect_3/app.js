import React from "react";
import ReactDOM from "react-dom/client";

'This is creating ReactElement using react core. (Plain js)'
// React.createElement => Object => HTMLElement(render)
const heading = React.createElement("h1", {id: "heading"}, "Lecture_3: Let's Go");

'Create: JSX'
// const checkJSX = <h1 id="heading">Hello, I am JSX</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const digit = 1000;
'React Component'
const Heading = () => (
    <div>
        <h3>{digit}</h3>
        <h1 className = "heading1">Hello React Component</h1>
        <Title/>
        <Title></Title>
        {Title()}
        {/* These above things are same */}
        <ThirdComponent/>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering the component
root.render(<Heading/>);

// Another way to write, function component.
// const Heading2 = () =>  <h1 className="heading2">Hello React Component</h1>

'Render a second component'
const Title = () => {
    return <h2>Title: Second Component</h2>
}
'Render a third component'
/* Arrow fxn to Normal fxn
 * Not mandatory to use arrow, function.
 * Also, We can use Normal fxn.
 * But we have to return it.
*/

const ThirdComponent = function () {
    return (
        <h3>
            Hey, I am Third Component
        </h3>
    );
};  
