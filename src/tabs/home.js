export default function Home() {
  const content = document.getElementById("content");
  const home = document.createElement("div");
  home.innerHTML = "<h1>Welcome to our restaurant</h1>";
  return home;
}