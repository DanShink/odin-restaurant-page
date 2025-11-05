import margheritaPizzaImageSrc from "../images/margheritapizza.jpeg";

const menuItems = [
  {
    name: "Margherita Pizza",
    description: "A classic Italian pizza with tomato, mozzarella, and basil.",
    price: 10.99,
    img: margheritaPizzaImageSrc,
  },
  {
    name: "Margherita Pizza",
    description: "A classic Italian pizza with tomato, mozzarella, and basil.",
    price: 10.99,
    img: margheritaPizzaImageSrc,
  },
  {
    name: "Margherita Pizza",
    description: "A classic Italian pizza with tomato, mozzarella, and basil.",
    price: 10.99,
    img: margheritaPizzaImageSrc,
  },
  {
    name: "Margherita Pizza",
    description: "A classic Italian pizza with tomato, mozzarella, and basil.",
    price: 10.99,
    img: margheritaPizzaImageSrc,
  },
]

export default function Menu() {
  const menu = document.createElement("div");
  menu.innerHTML = "<h1>Menu</h1>";
  menuItems.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `
      <h2>${item.name}</h2>
      <img src="${item.img}" alt="${item.name}" width="257px" height="196px">
      <p>${item.description}</p>
      <p>${item.price}</p>
    `;
    menu.appendChild(menuItem);
  });
  return menu;
}