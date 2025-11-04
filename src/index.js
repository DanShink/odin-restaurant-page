import "./styles.css";
import Home from "./tabs/home.js";
import Menu from "./tabs/menu.js";
import About from "./tabs/about.js";

const content = document.getElementById("content");
content.appendChild(Home());
console.log("Webpack is working!");

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => {
  content.replaceChildren(Home());
});

const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", () => {
  content.replaceChildren(Menu());
});

const aboutButton = document.getElementById("about-button");
aboutButton.addEventListener("click", () => {
  content.replaceChildren(About());
});