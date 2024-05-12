
const Country = ({country}) => {


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
                <div>
                    { country.flag }
                </div>
            </div>
        )
    } 
}

export default Country