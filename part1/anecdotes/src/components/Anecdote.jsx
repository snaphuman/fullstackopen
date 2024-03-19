
const Anecdote = ({selected, selectHandler, voteHandler, type}) => {


    if (type === 'random') {

        return (
            <>
            <em>{selected?.text}</em>
            
            <button onClick={voteHandler()}>Vote</button>
            <button onClick={selectHandler()}>Next</button>
            </>
        )

    }

    return ( 
            <>
            I'm Favorite Anecdote of type { type }
            </>
    )

}

export default Anecdote;