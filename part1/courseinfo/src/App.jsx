import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {

  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      count: 10,
    },
    {
      name: 'Using props to pass data',
      count: 7,

    },
    {
      name: 'State of a component',
      count: 14,
    }
  ];

  const total = parts.reduce((sum, {count:it}) => sum + it, 0);

  return (
    <div>
      <Header course={ course } />
      <Content parts={ parts } />
      <Total total={ total } />
    </div>
  )
}

export default App;
