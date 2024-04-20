import Header from "./Header";


const Filter = ({title, handleFilter}) => {
 
    const handleChange = ({target}) => {
        handleFilter(target.value)
    }

    return (
        <>
        <Header title={title} />
        <input type="text" onChange={handleChange} />
        </>
    )
}

export default Filter;