import "./styles.css";

const input = document.querySelector(".input");
const inputButton = document.querySelector(".input-button");
const errorSpan = document.querySelector("span");
const container = document.querySelector(".container");

function renderWeather(data) {
  const locationName = document.createElement("h2");
  locationName.classList.add("location-name");
  locationName.textContent = data.resolvedAddress;
  console.log(data.resolvedAddress);
  container.appendChild(locationName);
}

export {input, inputButton, errorSpan, renderWeather};