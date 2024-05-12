
const Countries = ({countries}) => {

    if (countries.length > 1) {
        return (
            <div>
                <ul>
                    {
                        countries.map((country, index) => {

                            return (
                                <li key={index}>
                                    { country.name.common }
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