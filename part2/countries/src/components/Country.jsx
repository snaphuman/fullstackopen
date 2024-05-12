
const Country = ({country, forecast}) => {

    if (country) {
        return (
            <div>
                <h2>{country.name.common}</h2>
                <p>Capital {country.capital}</p>
                <p>Area {country.area}</p>
                <br />
                <p><b>Languages:</b></p>
                <ul>
                    {
                        Object.entries(country.languages).map(([code, lang]) => {
                            return (
                                <li key={code}>
                                    {lang}
                                </li>
                            )
                        })
                    }
                </ul>
                <div style={{fontSize: '10rem'}}>
                    { country.flag }
                </div>
                <br />
                <p>Temperature: { forecast ? forecast.current.temp_c : null}</p>
                <p>Wind: { forecast ? forecast.current.wind_kph : null}</p>
            </div>
        )
    } 
}

export default Country