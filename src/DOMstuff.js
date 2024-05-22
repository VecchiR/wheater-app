document.querySelector('[type="radio"]#celsius')
    .defaultChecked = true;


const search = document.querySelector('.searchbar-container > input');
export const searchBtn = document.querySelector('.searchbar-container > button');

export const scaleToggle = document.querySelector('.scale-toggle-container');

const locationName = document.querySelector('.location-name');
const locationCountry = document.querySelector('.location-country');
const current = document.querySelector('.current');
const allForecastDays = document.querySelectorAll('.forecast-days > div');

export function renderData(data) {
    const tempScale = getActiveTempScale();
    locationName.textContent = data.location.name;
    locationCountry.textContent = data.location.country;

    if (tempScale === 'F') {
        current.textContent = data.current.temp_f + "°F";

        allForecastDays.forEach((element, index) => {
            element.textContent =
                data.forecast.forecastday[index].date +
                " = " + "min: " +
                data.forecast.forecastday[index].day.mintemp_f +
                "°F | max: " +
                data.forecast.forecastday[index].day.maxtemp_f + "°F";
        });
    } else {
        current.textContent = data.current.temp_c + "°C";
        allForecastDays.forEach((element, index) => {
            element.textContent =
                data.forecast.forecastday[index].date +
                " = " + "min: " +
                data.forecast.forecastday[index].day.mintemp_c +
                "°C | max: " +
                data.forecast.forecastday[index].day.maxtemp_c + "°C";
        });
    }
}


export function readSearch() {
    return search.value ? search.value : 'campinas';
}

export function cleanSearch() {
    search.value = '';
}

export function getActiveTempScale() {
    const scale = document.querySelector('input[type="radio"]:checked').id;
    return scale === 'fahrenheit' ? 'F' : 'C';
}