import { useEffect, useState } from 'react';
import { getAllCountries, getCurrentForecast } from './utils/http';

import Search from './components/Search';
import Countries from './components/Countries';
import Country from './components/Country';
import Message from './components/Message';

function App() {

  const [search, setSearch] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [message, setMessage] = useState(null);
  const [country, setCountry] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
      getAllCountries().then((res) => {
        setCountries(res)
      });

      if(country) {
          const name = country.name.common;
          getCurrentForecast(name).then(res => { 
              console.log('forecast', res)
              setForecast(res)
          });
      }
  }, [country]);

  const handleFilter = (value) => {
    const pattern = new RegExp(value);
    const filtered = countries.filter(country => {
      return pattern.test(country.name.common.toLowerCase());
    });

    if (filtered.length === 1 && 
                 value === filtered[0].name.common.toLowerCase()) {
        console.log('country', country)
        setFiltered(filtered);
        setCountry(filtered[0]);
    } else if (filtered.length > 10) {
        setMessage('Too many matches, specify another filter');
        setFiltered([]);
        setCountry(null);
    } else if (filtered.length > 1 && filtered.length <= 10) {
        setMessage(null);
        setFiltered(filtered);
        setCountry(null);
    } 
  }

  const handleSetCountry = (country) => {
    setCountry(country)
  }

  return (
    <>
      <Search filter={handleFilter}/>
      <Message text={message} />
      <Countries countries={filtered} handleSetCountry={handleSetCountry}/>
      <Country country={country} forecast={forecast}/>
    </>
  )
}

export default App
