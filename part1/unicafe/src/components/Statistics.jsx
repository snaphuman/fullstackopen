import { useState } from 'react'
import StatisticLine from './StatisticLine';

const Statistics = ({good, neutral, bad, average, total, other}) => {

  return (
    <div>
        <h1>Statistics</h1>
           <StatisticLine value={good} text='Good' /> 
           <StatisticLine value={neutral} text='Neutral' /> 
           <StatisticLine value={bad} text='Bad' /> 
           <StatisticLine value={average} text='Average' /> 
           <StatisticLine value={total} text='Total' /> 
           <StatisticLine value={other} text='Other' /> 
        </div>
    )
}

export default Statistics;