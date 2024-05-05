
const Search = ({filter}) => {

    return (
        <div>
            <input type="text" onChange={({currentTarget}) => filter(currentTarget.value)} />
        </div>
    )
}

export default Search;