import { Box, Button, Typography, useTheme } from '@material-ui/core'
import { SkipNext, SkipPrevious } from '@material-ui/icons'
import moment from 'moment'
import React, { useState } from 'react'
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
  date: string
}

const currentData: Day[] = [
  { day: 1, mood: 3, anxiety: 4, date: '2021/01/09' },
  { day: 2, mood: 7, anxiety: 3, date: '2021/01/10' },
  { day: 3, mood: 8, anxiety: 2, date: '2021/01/11' },
  { day: 4, mood: 6, anxiety: 3, date: '2021/01/12' },
]

const previousData: Day[] = [
  { day: 1, mood: 9, anxiety: 3, date: '2020/12/13' },
  { day: 2, mood: 6, anxiety: 3, date: '2020/12/14' },
  { day: 3, mood: 7, anxiety: 1, date: '2020/12/15' },
  { day: 4, mood: 7, anxiety: 1, date: '2020/12/16' },
]

const Charts = () => {
  const [data, setData] = useState(currentData)

  const anxietyValues = data.map((point) => {
    return { x: point.day, y: point.anxiety }
  })

  const moodValues = data.map((point) => {
    return { x: point.day, y: point.mood }
  })

  const theme = useTheme()

  const chartTitle = () => {
    if (data === currentData) {
      return `Current Cycle, start ${moment(currentData[0].date).format(
        'MMMM D, YYYY'
      )} `
    } else {
      return `${moment(previousData[0].date).format('MMMM D, YYYY')} - ${moment(
        previousData[previousData.length - 1].date
      ).format('MMMM D, YYYY')}`
    }
  }
  return (
    <>
      <Box display='flex' justifyContent='space-around'>
        <Button
          variant='contained'
          color='secondary'
          size='small'
          startIcon={<SkipPrevious />}
          onClick={() => setData(previousData)}
        >
          Previous
        </Button>
        <Box pr={3}>
          <Typography variant='h3' color='secondary'>
            {chartTitle()}
          </Typography>
        </Box>
        <Button
          variant='contained'
          color='secondary'
          size='small'
          endIcon={<SkipNext />}
          disabled={data === currentData}
          onClick={() => setData(currentData)}
        >
          Next
        </Button>
      </Box>
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
    </>
  )
}

const styles = {
  chartContainer: {
    width: '70%',
    margin: 'auto',
  },
}

export default Charts
