import { useState } from 'react'
import Statistics from './components/Statistics';
import { useEffect } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [statistics, setStatistics] = useState({
    good,
    neutral,
    bad,
    average: 0,
    total: 0,
    other: 0 
  });

  const setComment = (value, type) => {

    let config = () => {}

    switch (type) {
      case 'Good':
        config = () => {
          const newState = {...statistics, 'good': value},
                newStatistics = calculateStatistics(newState);

          setStatistics({...newState, ...newStatistics});

          setGood(value);
        }
      break;
      case 'Neutral':
        config = () => {
          const newState = {...statistics, 'neutral': value},
                newStatistics = calculateStatistics(newState);

          setStatistics({...newState, ...newStatistics});

          setNeutral(value);
        }
      break;
      case 'Bad':
        config = () => {
          const newState = {...statistics, 'bad': value},
                newStatistics = calculateStatistics(newState);

          setStatistics({...newState, ...newStatistics});

          setBad(value);
        }
      break;

    }

    return config;
  }

  const calculateStatistics = (state) => {

    const {good, bad, neutral} = state;

    const total = good + bad + neutral,
          average = (total / 3).toFixed(2);

    return {average, total};
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={setComment(good + 1, 'Good')}>Good</button>
      <button onClick={setComment(neutral + 1, 'Neutral')}>Neutral</button>
      <button onClick={setComment(bad + 1, 'Bad')}>Bad</button>
      <Statistics {...statistics} />
    </div>
  )
}

export default App
