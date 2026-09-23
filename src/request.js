const input = document.querySelector(".input");
const inputButton = document.querySelector(".input-button");
const errorSpan = document.querySelector("span");
let data;

async function getWeather(location) {
  try {
    const requested = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=9Z35HWXREP2DL48JVDJRXP8DK`);
    data = await requested.json();
    console.log(data);
  }
  catch(error) {
    errorSpan.classList.add("error");
    errorSpan.textContent = "Please enter a valid location.";
    console.log(error);
  }
}

inputButton.addEventListener("click", () => {
  let value = input.value;
  
  if(!value) {
    errorSpan.classList.add("error");
  } else {
    getWeather(value);
    errorSpan.classList.remove("error");
  }
});
export {getWeather, data};