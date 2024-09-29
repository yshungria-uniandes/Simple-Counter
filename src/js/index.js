//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/SecondsCounter.jsx";

let counter = 0;
setInterval(
    () => {
        ReactDOM.createRoot(document.getElementById('app')).render(<Counter number={counter}/>);
        counter++
    },  
    1000
);