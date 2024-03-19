import { useState } from 'react'
import Anecdote from './components/Anecdote'

function App() {

  const anecdotesMock = [
    { 
      id: 0,
      text: 'If it hurts, do it more often.',
      votes: 0,
    },
    { 
      id: 1,
      text: 'Adding manpower to a late software project makes it later!',
      votes: 0,
    },
    { 
      id: 2,
      text: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0,
    },
    { 
      id: 3,
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0,
    },
    { 
      id: 4,
      text: 'Premature optimization is the root of all evil.',
      votes: 0,
    },
    { 
      id: 5,
      text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0,
    },
    { 
      id: 6,
      text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      votes: 0,
    },
    { 
      id: 7,
      text: 'The only way to go fast, is to go well.',
      votes: 0,
    },
  ];

  const [anecdotes, setAnecdotes] = useState(anecdotesMock)

  const [selected, setSelected] = useState(null);

  const shuffleAnecdotes = () => {
    const rnd = Math.floor(Math.random() * anecdotes.length);
    const selected = anecdotes[rnd];

    setSelected(selected);
  }

  const voteFavorite = () => {
    if (anecdotes) {
      const newAnecdotes = anecdotes?.map(item => 
        {
          return  item.id === selected.id ? {...item, votes: item.votes + 1 } : item
        }
      );
    
      setAnecdotes(newAnecdotes);
    }

  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote selected={selected} selectHandler={() => shuffleAnecdotes} voteHandler={() => voteFavorite} type='random' />
      <h1>Anecdote with most voted</h1> 
      <Anecdote type='mostVoted' />
    </div>
  )
}

export default App
