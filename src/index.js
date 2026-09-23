import "./styles.css";
import {getWeather} from "./request.js";

const input = document.querySelector(".input");
const inputButton = document.querySelector(".input-button");
const errorSpan = document.querySelector("span");

inputButton.addEventListener("click", () => {
  let value = input.value;
  
  if(!value) {
    errorSpan.classList.add("error");
  } else {
    getWeather(value);
    errorSpan.classList.remove("error");
  }
});

// getWeather("los angeles");