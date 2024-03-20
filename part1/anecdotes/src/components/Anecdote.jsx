
const Anecdote = ({selected, mostVoted, selectHandler, voteHandler, type}) => {

    if (type === 'random') {

        return (
            <>
            <h1>Anecdote of the day</h1>
            <em>{selected?.text}</em>
            <p>
                {selected ? <button onClick={voteHandler()}>Vote</button> : null}
                <button onClick={selectHandler()}>{selected ? 'Next' : 'Start'}</button>
            </p>
            </>
        )

    }

    if (type === 'mostVoted' && mostVoted) {

        return ( 
            <>
            <h1>Anecdote with most voted</h1> 
            <em>{mostVoted.text}</em>
            <p>Votes: { mostVoted.votes }</p>
            </>
        )
    }

}

export default Anecdote;