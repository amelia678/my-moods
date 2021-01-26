import {
  Box,
  Button,
  Card,
  CardContent,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core'
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
import theme from '../theme/theme'

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

  const classes = useStyles()

  const chartTitle = () => {
    if (data === currentData) {
      return `Current Cycle: start ${moment(currentData[0].date).format(
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
      <Card className={classes.root}>
        <CardContent>
          <Box display='flex' justifyContent='space-around' flexWrap='wrap'>
            <Box my={1}>
              <Button
                variant='contained'
                color='secondary'
                size='small'
                startIcon={<SkipPrevious />}
                onClick={() => setData(previousData)}
              >
                Previous
              </Button>
            </Box>
            <Box pr={3}>
              <Typography variant='h3'>{chartTitle()}</Typography>
            </Box>
            <Box my={1}>
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
          </Box>

          <VictoryChart height={250}>
            <VictoryLegend
              x={50}
              y={20}
              orientation={'horizontal'}
              data={[
                {
                  name: 'Anxiety',
                  symbol: { fill: theme.palette.secondary.light },
                },
                {
                  name: 'Mood',
                  symbol: { fill: theme.palette.secondary.main },
                },
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
        </CardContent>
      </Card>
    </>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '70%',
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
      [theme.breakpoints.up('md')]: {
        width: '70%',
      },
      margin: 'auto',
      background: 'rgba(255,255,255,0.9)',
    },
  })
)
export default Charts
