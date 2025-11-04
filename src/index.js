import "./styles.css";
import Home from "./tabs/home.js";

const content = document.getElementById("content");
content.appendChild(Home());
console.log("Webpack is working!");