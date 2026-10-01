import "./styles.css";
import { evaluateUV } from "./request.js";
import search from "../photos/icons/search.svg";

const input = document.querySelector(".input");
const inputButton = document.querySelector(".input-button");
const errorSpan = document.querySelector("span");
const container = document.querySelector(".container");

const searchIcon = document.createElement("img");
searchIcon.src = search;
inputButton.appendChild(searchIcon);

function renderWeather(data) {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");
  container.appendChild(mainContainer);

  const locationName = document.createElement("p");
  locationName.classList.add("location-name");
  locationName.textContent = data.resolvedAddress;

  const locationFeelsLike = document.createElement("p");
  locationFeelsLike.classList.add("location-feels-like");
  locationFeelsLike.textContent = `feels like ${data.currentConditions.feelslike}°`;

  const locationTemp = document.createElement("p");
  locationTemp.classList.add("location-temp");
  locationTemp.textContent = `${data.currentConditions.temp}°`;

  const locationConditions = document.createElement("p");
  locationConditions.classList.add("location-conditions");
  locationConditions.textContent = data.currentConditions.conditions;

  mainContainer.appendChild(locationName);
  mainContainer.appendChild(locationFeelsLike);
  mainContainer.appendChild(locationTemp);
  mainContainer.appendChild(locationConditions);

  const sideContainer = document.createElement("div");
  sideContainer.classList.add("side-container");
  container.appendChild(sideContainer);

  const humidityDiv = document.createElement("div");
  humidityDiv.classList.add("side-container-divs");

  const humidityInnerDiv = document.createElement("div");
  humidityInnerDiv.classList.add("side-container-inner");
  humidityDiv.appendChild(humidityInnerDiv);

  const humidityDivTitle = document.createElement("p");
  humidityDivTitle.classList.add("side-container-titles");
  humidityDivTitle.textContent = "Humidity";

  const humidityDivData = document.createElement("p");
  humidityDivData.classList.add("side-container-data");
  humidityDivData.textContent = data.currentConditions.humidity;

  humidityInnerDiv.appendChild(humidityDivTitle);
  humidityInnerDiv.appendChild(humidityDivData);

  const UVDiv = document.createElement("div");
  UVDiv.classList.add("side-container-divs");

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

  const cloudCoverInnerDiv = document.createElement("div");
  cloudCoverInnerDiv.classList.add("side-container-inner");
  cloudCoverDiv.appendChild(cloudCoverInnerDiv);

  const cloudCoverDivTitle = document.createElement("p");
  cloudCoverDivTitle.classList.add("side-container-titles");
  cloudCoverDivTitle.textContent = "Cloud Cover";

  const cloudCoverDivData = document.createElement("p");
  cloudCoverDivData.classList.add("side-container-data");
  cloudCoverDivData.textContent = data.currentConditions.cloudcover;

  cloudCoverInnerDiv.appendChild(cloudCoverDivTitle);
  cloudCoverInnerDiv.appendChild(cloudCoverDivData);

  const visibilityDiv = document.createElement("div");
  visibilityDiv.classList.add("side-container-divs");

  const visibilityInnerDiv = document.createElement("div");
  visibilityInnerDiv.classList.add("side-container-inner");
  visibilityDiv.appendChild(visibilityInnerDiv);

  const visibilityDivTitle = document.createElement("p");
  visibilityDivTitle.classList.add("side-container-titles");
  visibilityDivTitle.textContent = "Visibility";

  const visibilityDivData = document.createElement("p");
  visibilityDivData.classList.add("side-container-data");
  visibilityDivData.textContent = data.currentConditions.visibility;

  visibilityInnerDiv.appendChild(visibilityDivTitle);
  visibilityInnerDiv.appendChild(visibilityDivData);

  sideContainer.appendChild(humidityDiv);
  sideContainer.appendChild(UVDiv);
  sideContainer.appendChild(cloudCoverDiv);
  sideContainer.appendChild(cloudCoverDiv);

  const lowerContainer = document.createElement("div");
  lowerContainer.classList.add("lower-container");
  container.appendChild(lowerContainer);

  for (let i = 0; i < 7; i++) {
    const daysDiv = document.createElement("div");
    daysDiv.classList.add("days-div");

    const tempRange = document.createElement("p");
    tempRange.classList.add("temp-range");
    tempRange.textContent = `${data.days[i].tempmax}° / ${data.days[i].tempmin}°`;

    const rawDate = data.days[i].datetime;
    const parsedDate = rawDate.slice(5, 10).replace("-", "/");

    const dates = document.createElement("p");
    dates.classList.add("dates");
    dates.textContent = parsedDate;

    daysDiv.appendChild(tempRange);
    daysDiv.appendChild(dates);
    lowerContainer.appendChild(daysDiv);
  }
}

export { input, inputButton, errorSpan, renderWeather };
