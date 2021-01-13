import { useTheme } from '@material-ui/core'
import React from 'react'
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
} from 'victory'

interface Day {
  day: number
  mood: number
  anxiety: number
}

const data: Day[] = [
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
  const theme = useTheme()
  return (
    <div style={styles.chartContainer}>
      <VictoryChart>
        <VictoryLegend
          x={50}
          y={20}
          orientation={'horizontal'}
          data={[
            {
              name: 'Anxiety',
              symbol: { fill: theme.palette.secondary.light },
            },
            { name: 'Mood', symbol: { fill: theme.palette.secondary.main } },
          ]}
        />
        <VictoryAxis
          tickFormat={(x) => `Day ${x}`}
          tickValues={data.map((point) => {
            return point.day
          })}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
        <VictoryGroup offset={20} colorScale={'qualitative'}>
          <VictoryBar
            style={{ data: { fill: theme.palette.secondary.light } }}
            data={anxietyValues}
          />
          <VictoryBar
            style={{ data: { fill: theme.palette.secondary.main } }}
            data={moodValues}
          />
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
