import axios from "axios"

const apiKey = import.meta.env.VITE_WEATHER_API_KEY; //https://www.weatherapi.com/docs/
console.log(apiKey)

const getAllCountries = () => {
    const req = axios.get('https://studies.cs.helsinki.fi/restcountries/api/all');
    return req.then(res => res.data);
}

 const getCurrentForecast = (country) => {
    const req = axios.get('https://api.weatherapi.com/v1/current.json', {
        params: {
            q: country.toLowerCase(),
            key: apiKey
        }
    });
    return req.then(res => res.data);
 }

export {
    getAllCountries,
    getCurrentForecast
}