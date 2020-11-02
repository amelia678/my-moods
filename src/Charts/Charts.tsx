import React from 'react'
import { VictoryBar, VictoryChart } from 'victory'

const data = [
  { day: 1, mood: 3 },
  { day: 2, mood: 7 },
  { day: 3, mood: 8 },
  { day: 4, mood: 6 },
]

const Charts = () => {
  return (
    <div>
      <VictoryChart>
        <VictoryBar data={data} x="day" y="mood" />
      </VictoryChart>
    </div>
  )
}

export default Charts
