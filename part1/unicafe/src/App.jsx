import { useState } from 'react'
import Statistics from './components/Statistics';
import Button from './components/Button';

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
    positive: 0 
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
          average = ((good - bad) / total).toFixed(2),
          positive = ((good / total) * 100).toFixed(2);

    return {average, total, positive};
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button clickHandler={() => setComment(good + 1, 'Good')}>Good</Button>
      <Button clickHandler={() => setComment(neutral + 1, 'Neutral')}>Neutral</Button>
      <Button clickHandler={() => setComment(bad + 1, 'Bad')}>Bad</Button>
      <Statistics {...statistics} />
    </div>
  )
}

export default App;
