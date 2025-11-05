import "../styles.css";
import Home from "../tabs/home.js";
import Menu from "../tabs/menu.js";
import About from "../tabs/about.js";

export default function InitialLoad() {
  const content = document.getElementById("content");
  content.appendChild(Home());
  console.log("Webpack is working!");

  const homeButton = document.getElementById("home-button");
  const menuButton = document.getElementById("menu-button");
  const aboutButton = document.getElementById("about-button");
  homeButton.setAttribute("active", "true");
  homeButton.addEventListener("click", () => {
    homeButton.setAttribute("active", "true");
    menuButton.setAttribute("active", "false");
    aboutButton.setAttribute("active", "false");
    content.replaceChildren(Home());
  });

  menuButton.addEventListener("click", () => {
    homeButton.setAttribute("active", "false");
    menuButton.setAttribute("active", "true");
    aboutButton.setAttribute("active", "false");
    content.replaceChildren(Menu());
  });

  aboutButton.addEventListener("click", () => {
    homeButton.setAttribute("active", "false");
    menuButton.setAttribute("active", "false");
    aboutButton.setAttribute("active", "true");
    content.replaceChildren(About());
  });
}