import "./styles.css";
import { evaluateUV } from "./request.js";

const input = document.querySelector(".input");
const inputButton = document.querySelector(".input-button");
const errorSpan = document.querySelector("span");
const container = document.querySelector(".container");

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

  const locationHumidity = document.createElement("p");
  locationHumidity.classList.add("location-humidity");
  locationHumidity.textContent = `${data.currentConditions.humidity}%`;

  const locationUV = document.createElement("p");
  locationUV.classList.add("location-uv");
  locationUV.textContent = `${data.currentConditions.uvindex}`;

  const UVMessage = document.createElement("p");
  UVMessage.classList.add("uv-message");
  UVMessage.textContent = evaluateUV(data.currentConditions.uvindex);

  const cloudCover = document.createElement("p");
  cloudCover.classList.add("cloud-cover");
  cloudCover.textContent = `${data.currentConditions.cloudcover}%`;

  sideContainer.appendChild(locationHumidity);
  sideContainer.appendChild(locationUV);
  sideContainer.appendChild(UVMessage);
  sideContainer.appendChild(cloudCover);

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
