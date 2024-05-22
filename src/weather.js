const key = '774b8f64b270468c90f150256242105';
export let dataStore;


export function getUrl(location) {
    return `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3`;
}

export async function getWeatherData(url) {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    dataStore = data;
    return data;
}