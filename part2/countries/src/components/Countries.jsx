
const Countries = ({countries, handleSetCountry}) => {

    if (countries.length > 1) {
        return (
            <div>
                <ul>
                    {
                        countries.map((country, index) => {

                            return (
                                <li key={index}>
                                    { country.name.common }
                                    <span>
                                        <button onClick={() => handleSetCountry(country)}>Show</button>
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )

    }
}

export default Countries;