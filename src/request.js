async function getWeather(location) {
  try {
    const requested = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=9Z35HWXREP2DL48JVDJRXP8DK`);
    const data = await requested.json();
    return data;
  }
  catch(error) {
    console.error(error);
  }
}

function capitalizeWords(string) {
  if(!string) return;

  return string
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
}

export {getWeather, capitalizeWords};