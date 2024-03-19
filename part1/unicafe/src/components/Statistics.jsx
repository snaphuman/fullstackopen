import { useState } from 'react'
import StatisticLine from './StatisticLine';

const Statistics = ({good, neutral, bad, average, total, positive}) => {

    if ([good, neutral, bad].every(it => !it)) {
        return (
            <>
                <h2>No Feedback Given :( </h2>
            </>
        )
    }

  return (
    <div>
        <h1>Statistics</h1>
        <table>
            <thead>
                <tr>
                    <th>Statistic</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <StatisticLine value={good} text='Good' /> 
                <StatisticLine value={neutral} text='Neutral' /> 
                <StatisticLine value={bad} text='Bad' /> 
                <StatisticLine value={total} text='All' /> 
                <StatisticLine value={average} text='Average' /> 
                <StatisticLine value={positive} text='Positive' format='percent' /> 
            </tbody>
        </table>
    </div>
    )
}

export default Statistics;