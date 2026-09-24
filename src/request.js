import { errorSpan } from "./ui.js";

async function getWeather(location) {
  try {
    const string = capitalizeWords(location);
    const requested = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${string}?unitGroup=metric&key=9Z35HWXREP2DL48JVDJRXP8DK`,
    );
    const data = await requested.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    errorSpan.classList.add("error");
    errorSpan.textContent = "Please enter a valid location.";
  }
}

function capitalizeWords(string) {
  if (!string) return;

  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export { getWeather };
