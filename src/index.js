import "./style.css";
import { dropdown } from "./dropdownMenu";

const headerBtns = document.querySelectorAll(".header>div");
headerBtns.forEach((btn) => {
  const menu = btn.querySelector(".dropdown-menu");
  dropdown(menu, btn);
});
