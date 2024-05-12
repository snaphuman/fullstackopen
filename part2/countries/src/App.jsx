import { useEffect, useState } from 'react';
import { getAllCountries } from './utils/http';

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

  useEffect(() => {
      getAllCountries().then((res) => {
        setCountries(res)
      });
  }, []);

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

  return (
    <>
      <Search filter={handleFilter}/>
      <Message text={message} />
      <Countries countries={filtered} />
      <Country country={country} />
    </>
  )
}

export default App
