import { useEffect, useState } from 'react';
import { getAllCountries } from './utils/http';

import Search from './components/Search';
import Countries from './components/Countries';
import Country from './components/Country';

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
    console.log(value)
    const pattern = new RegExp(value);
    const filtered = countries.filter(country => {
      return pattern.test(country.name.common.toLowerCase());
    })

    setFiltered(filtered);
  }



  return (
    <>
      <Search filter={handleFilter}/>
      <Countries countries={filtered} />
      <Country />
    </>
  )
}

export default App
