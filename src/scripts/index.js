import { animateHeroTitle, animateHeroLoading, hideHeroTitle, hideHeroLoading } from "./hero";
import { fetchWeather } from "./services/fetchWeather";

// Styles
import "./styles";

window.addEventListener("DOMContentLoaded", () => {
  animateHeroTitle("#title");
  animateHeroLoading("#loading");

  console.log(new Date())

  // Fetch
  fetchWeather()
  .then(weather => {
    hideHeroLoading("#loading");
    hideHeroTitle("#title");
  })
}); 
