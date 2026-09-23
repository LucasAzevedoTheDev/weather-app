import "./styles.css";
import {getWeather} from "./request.js";

const input = document.querySelector(".input");
const inputButton = document.querySelector(".input-button");
const errorSpan = document.querySelector("span");

inputButton.addEventListener("click", async () => {
  let value = input.value;
  
  if(!value) {
    errorSpan.classList.add("error");
  } else {
    try {
      const fetched = await getWeather(value);  
      errorSpan.classList.remove("error"); 
      console.log(fetched);
      // INSERT RENDER FUNCTION FROM UI HERE
    } catch(error) {
      errorSpan.classList.add("error");
      errorSpan.textContent = "Please enter a valid location.";
    }
  }
});