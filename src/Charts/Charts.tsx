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

const moodValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const Charts = () => {
  return (
    <div style={styles.chartContainer}>
      <VictoryChart domainPadding={20}>
        <VictoryAxis tickValues={xValues} tickFormat={(x) => `Day ${x}`} />
        <VictoryAxis dependentAxis tickValues={moodValues} />
        <VictoryBar data={data} x='day' y='mood' />
      </VictoryChart>
    </div>
  )
}

const styles = {
  chartContainer: {
    width: '50%',
    margin: 'auto'
  }
}

export default Charts
