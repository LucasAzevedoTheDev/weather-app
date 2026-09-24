import "./styles.css";
import { getWeather } from "./request.js";
import { input, inputButton, errorSpan, renderWeather } from "./ui.js";

inputButton.addEventListener("click", async () => {
  let value = input.value;
  if (!value) {
    errorSpan.classList.add("error");
    errorSpan.textContent = "Please enter a location.";
  } else {
    errorSpan.classList.remove("error");
    errorSpan.textContent = "";
    const fetched = await getWeather(value);
    renderWeather(fetched);
  }
});
