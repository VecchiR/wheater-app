import "./style.css";
import * as wapp from "./weather.js";
import * as dom from "./DOMstuff.js";




async function newQuery() {
    let url = wapp.getUrl(dom.readSearch());
    const data = await wapp.getWeatherData(url);
    dom.renderData(data);
    dom.cleanSearch();
}



dom.searchBtn.addEventListener('click', newQuery);
dom.scaleToggle.addEventListener('change', () => {
    dom.renderData(wapp.dataStore);
})

document.addEventListener("DOMContentLoaded", function() {
    newQuery();
  });

