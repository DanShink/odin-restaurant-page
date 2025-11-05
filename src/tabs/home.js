import oliveGardenImageSrc from "../images/olivegarden.jpeg";

export default function Home() {
  const home = document.createElement("div");
  const oliveGardenImage = document.createElement("img");
  oliveGardenImage.src = oliveGardenImageSrc;
  oliveGardenImage.alt = "Olive Garden";
  oliveGardenImage.style.width = "300px";
  oliveGardenImage.style.height = "168px";
  const welcomeText = document.createElement("h1");
  welcomeText.innerHTML = "Welcome to Olive Garden";
  const welcomeParagraph = document.createElement("p");
  welcomeParagraph.innerHTML = "We are a family-friendly restaurant that serves Italian cuisine. We are located in the heart of the city.";
  welcomeParagraph.style.textAlign = "left";
  home.appendChild(oliveGardenImage);
  home.appendChild(welcomeText);
  home.appendChild(welcomeParagraph);
  return home;
}