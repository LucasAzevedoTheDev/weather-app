async function getWeather(location) {
  try {
    const string = capitalizeWords(location);
    const requested = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${string}?unitGroup=metric&key=9Z35HWXREP2DL48JVDJRXP8DK`);
    if(!requested.ok) {
      throw new Error(`Request failed with status ${requested.status}`);
    }

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

export {getWeather};