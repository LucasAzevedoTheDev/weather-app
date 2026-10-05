import "./styles.css";
import { evaluateUV } from "./request.js";
import search from "../photos/icons/search.svg";
import cloudCover from "../photos/icons/cloud-cover.svg";
import humidity from "../photos/icons/humidity.svg";
import uvIndex from "../photos/icons/uv-index.svg";
import visibility from "../photos/icons/visibility.svg";

const input = document.querySelector(".input");
const inputButton = document.querySelector(".input-button");
const errorSpan = document.querySelector("span");
const container = document.querySelector(".container");

const searchIcon = document.createElement("img");
searchIcon.src = search;
inputButton.appendChild(searchIcon);

let weatherData;
let locationTemp;
let locationFeelsLike;
let tempRange;

const metricChanger = document.querySelector("select");

function convertToFahrenheit(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}
metricChanger.addEventListener("change", () => {
  const metricValue = metricChanger.value;
  const tempRanges = document.querySelectorAll(".temp-range");

  if (metricValue === "C") {
    locationTemp.textContent = `${Math.round(weatherData.currentConditions.temp)} °C`;
    locationFeelsLike.textContent = `feels like ${Math.round(weatherData.currentConditions.feelslike)} °C`;
    for (let i = 0; i < 7; i++) {
      tempRanges[i].textContent =
        `${Math.round(weatherData.days[i].tempmax)}° / ${Math.round(weatherData.days[i].tempmin)}°`;
    }
  } else if (metricValue === "F") {
    locationTemp.textContent = `${convertToFahrenheit(weatherData.currentConditions.temp)} °F`;
    locationFeelsLike.textContent = `feels like ${convertToFahrenheit(weatherData.currentConditions.feelslike)} °F`;
    for (let i = 0; i < 7; i++) {
      tempRanges[i].textContent =
        `${convertToFahrenheit(weatherData.days[i].tempmax)}° / ${convertToFahrenheit(weatherData.days[i].tempmin)}°`;
    }
  }
});

function renderWeather(data) {
  weatherData = data;
  container.replaceChildren();

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");
  container.appendChild(mainContainer);

  const locationName = document.createElement("p");
  locationName.classList.add("location-name");
  locationName.textContent = data.resolvedAddress;

  const weatherIcon = document.createElement("img");
  weatherIcon.classList.add("weather-icon");

  import(`../photos/conditions/color/${data.currentConditions.icon}.svg`).then(
    (module) => {
      weatherIcon.src = module.default;
    },
  );

  locationTemp = document.createElement("p");
  locationTemp.classList.add("location-temp");
  locationTemp.textContent = `${Math.round(data.currentConditions.temp)} °C`;

  locationFeelsLike = document.createElement("p");
  locationFeelsLike.classList.add("location-feels-like");
  locationFeelsLike.textContent = `feels like ${Math.round(data.currentConditions.feelslike)} °C`;

  const locationConditions = document.createElement("p");
  locationConditions.classList.add("location-conditions");
  locationConditions.textContent = data.currentConditions.conditions;

  mainContainer.appendChild(locationName);
  mainContainer.appendChild(locationConditions);
  mainContainer.appendChild(weatherIcon);
  mainContainer.appendChild(locationTemp);
  mainContainer.appendChild(locationFeelsLike);

  const sideContainer = document.createElement("div");
  sideContainer.classList.add("side-container");
  container.appendChild(sideContainer);

  const humidityDiv = document.createElement("div");
  humidityDiv.classList.add("side-container-divs");

  const humidityIcon = document.createElement("img");
  humidityIcon.classList.add("side-container-icons");
  humidityIcon.src = humidity;
  humidityDiv.appendChild(humidityIcon);

  const humidityInnerDiv = document.createElement("div");
  humidityInnerDiv.classList.add("side-container-inner");
  humidityDiv.appendChild(humidityInnerDiv);

  const humidityDivTitle = document.createElement("p");
  humidityDivTitle.classList.add("side-container-titles");
  humidityDivTitle.textContent = "Humidity";

  const humidityDivData = document.createElement("p");
  humidityDivData.classList.add("side-container-data");
  humidityDivData.textContent = `${Math.round(data.currentConditions.humidity)}%`;

  humidityInnerDiv.appendChild(humidityDivTitle);
  humidityInnerDiv.appendChild(humidityDivData);

  const UVDiv = document.createElement("div");
  UVDiv.classList.add("side-container-divs");

  const uvIcon = document.createElement("img");
  uvIcon.classList.add("side-container-icons");
  uvIcon.src = uvIndex;
  UVDiv.appendChild(uvIcon);

  const UVInnerDiv = document.createElement("div");
  UVInnerDiv.classList.add("side-container-inner");
  UVDiv.appendChild(UVInnerDiv);

  const UVDivTitle = document.createElement("p");
  UVDivTitle.classList.add("side-container-divs");
  UVDivTitle.textContent = "UV Index";

  const UVDivData = document.createElement("p");
  UVDivData.classList.add("side-container-data");
  UVDivData.textContent = `${data.currentConditions.uvindex} (${evaluateUV(data.currentConditions.uvindex)})`;

  UVInnerDiv.appendChild(UVDivTitle);
  UVInnerDiv.appendChild(UVDivData);

  const cloudCoverDiv = document.createElement("div");
  cloudCoverDiv.classList.add("side-container-divs");

  const cloudCoverIcon = document.createElement("img");
  cloudCoverIcon.classList.add("side-container-icons");
  cloudCoverIcon.src = cloudCover;
  cloudCoverDiv.appendChild(cloudCoverIcon);

  const cloudCoverInnerDiv = document.createElement("div");
  cloudCoverInnerDiv.classList.add("side-container-inner");
  cloudCoverDiv.appendChild(cloudCoverInnerDiv);

  const cloudCoverDivTitle = document.createElement("p");
  cloudCoverDivTitle.classList.add("side-container-titles");
  cloudCoverDivTitle.textContent = "Cloud Cover";

  const cloudCoverDivData = document.createElement("p");
  cloudCoverDivData.classList.add("side-container-data");
  cloudCoverDivData.textContent = `${data.currentConditions.cloudcover}%`;

  cloudCoverInnerDiv.appendChild(cloudCoverDivTitle);
  cloudCoverInnerDiv.appendChild(cloudCoverDivData);

  const visibilityDiv = document.createElement("div");
  visibilityDiv.classList.add("side-container-divs");

  const visibilityIcon = document.createElement("img");
  visibilityIcon.classList.add("side-container-icons");
  visibilityIcon.src = visibility;
  visibilityDiv.appendChild(visibilityIcon);

  const visibilityInnerDiv = document.createElement("div");
  visibilityInnerDiv.classList.add("side-container-inner");
  visibilityDiv.appendChild(visibilityInnerDiv);

  const visibilityDivTitle = document.createElement("p");
  visibilityDivTitle.classList.add("side-container-titles");
  visibilityDivTitle.textContent = "Visibility";

  const visibilityDivData = document.createElement("p");
  visibilityDivData.classList.add("side-container-data");
  visibilityDivData.textContent = `${data.currentConditions.visibility} km`;

  visibilityInnerDiv.appendChild(visibilityDivTitle);
  visibilityInnerDiv.appendChild(visibilityDivData);

  sideContainer.appendChild(humidityDiv);
  sideContainer.appendChild(UVDiv);
  sideContainer.appendChild(cloudCoverDiv);
  sideContainer.appendChild(visibilityDiv);

  const lowerContainer = document.createElement("div");
  lowerContainer.classList.add("lower-container");
  container.appendChild(lowerContainer);

  for (let i = 0; i < 7; i++) {
    const daysDiv = document.createElement("div");
    daysDiv.classList.add("days-div");

    const daysIcon = document.createElement("img");
    daysIcon.classList.add("days-icon");

    import(`../photos/conditions/color/${data.days[i].icon}.svg`).then((module) => {
      daysIcon.src = module.default;
    });

    tempRange = document.createElement("p");
    tempRange.classList.add("temp-range");
    tempRange.textContent = `${Math.round(data.days[i].tempmax)}° / ${Math.round(data.days[i].tempmin)}°`;

    const rawDate = data.days[i].datetime;
    const parsedDate = rawDate.slice(5, 10).replace("-", "/");

    const dates = document.createElement("p");
    dates.classList.add("dates");
    dates.textContent = parsedDate;

    daysDiv.appendChild(daysIcon);
    daysDiv.appendChild(tempRange);
    daysDiv.appendChild(dates);
    lowerContainer.appendChild(daysDiv);
  }
}

export { input, inputButton, errorSpan, renderWeather };
