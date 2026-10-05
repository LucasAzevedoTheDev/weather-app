import "./styles.css";
import { getWeather } from "./request.js";
import { input, inputButton, errorSpan, loading, renderWeather } from "./ui.js";

inputButton.addEventListener("click", async () => {
  let value = input.value;
  if (!value) {
    errorSpan.classList.add("error");
    errorSpan.textContent = "Please enter a location.";
    input.value = "";
  } else {
    errorSpan.classList.remove("error");
    errorSpan.textContent = "";
    loading.classList.add("visible");
    const fetched = await getWeather(value);
    loading.classList.remove("visible");
    renderWeather(fetched);
    input.value = "";
  }
});