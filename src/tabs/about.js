export default function About() {
  const about = document.createElement("div");
  about.innerHTML = "<h1>About us</h1>";
  const aboutParagraph = document.createElement("p");
  aboutParagraph.innerHTML = "We are a family-friendly restaurant that serves Italian cuisine. We are located in the heart of the city.";
  aboutParagraph.style.textAlign = "left";
  about.appendChild(aboutParagraph);
  return about;
}