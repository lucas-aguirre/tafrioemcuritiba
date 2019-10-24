const APIKEY = "d5755d9701a1ad27afd26532550a12d7";
const CITY = "Curitiba";
const API = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&APPID=${APIKEY}&units=metric`;

export function fetchWeather() {
  return fetch(API).then(response => response.json());
}