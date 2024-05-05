import axios from "axios"


const getAllCountries = () => {
    const req = axios.get('https://studies.cs.helsinki.fi/restcountries/api/all');
    return req.then(res => res.data);
}

export {
    getAllCountries,
}