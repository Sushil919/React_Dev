import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = (
<h1 className="head" tabIndex="5">
    Namaste React using JSX🚀🚀
    </h1>
    );

//React Functional Component

const HeadingComponent = () => {
    return <h1 className="heading">Namaste React Functional Component</h1>
};

const HeadingComponent2 = () => (
<h1 className="heading">Namaste React Functional Component</h1>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);