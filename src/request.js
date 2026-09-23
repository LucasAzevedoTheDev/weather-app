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

export {getWeather};