import React from "react";
import ReactDOM from "react-dom/client";

//React Functional Component
const title = (
    <h1 className="head" tabIndex="5">
    Namaste React using JSX🚀🚀
    </h1>
    );

//React Functional Component

const HeadingComponent = () => (
    <div id="container">
        { <h2>{100 + 300}</h2> /* Inside these braces we can write any js exp  */}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);