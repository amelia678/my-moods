import React from 'react'
import { VictoryBar, VictoryChart, VictoryGroup } from 'victory'

const data = [
  { day: 1, mood: 3, anxiety: 4 },
  { day: 2, mood: 7, anxiety: 3 },
  { day: 3, mood: 8, anxiety: 2 },
  { day: 4, mood: 6, anxiety: 3 },
]

const anxietyValues = data.map((point) => {
  return { x: point.day, y: point.anxiety }
})

const moodValues = data.map((point) => {
  return { x: point.day, y: point.mood }
})

const Charts = () => {
  return (
    <div style={styles.chartContainer}>
      <VictoryChart>
        <VictoryGroup offset={20} colorScale={'qualitative'}>
          <VictoryBar data={anxietyValues} />
          <VictoryBar data={moodValues} />
        </VictoryGroup>
      </VictoryChart>
    </div>
  )
}

const styles = {
  chartContainer: {
    width: '70%',
    margin: 'auto',
  },
}

export default Charts
