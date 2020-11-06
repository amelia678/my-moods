import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory'

const data = [
  { day: 1, mood: 3 },
  { day: 2, mood: 7 },
  { day: 3, mood: 8 },
  { day: 4, mood: 6 },
]

const xValues = data.map((point) => {
  return point.day
})

const Charts = () => {
  return (
    <div>
      <VictoryChart domainPadding={20}>
        <VictoryAxis tickValues={xValues} tickFormat={(x) => (`Day ${x}`)} />
        <VictoryBar data={data} x='day' y='mood' />
      </VictoryChart>
    </div>
  )
}

export default Charts
