import {
  Box,
  Button,
  Card,
  CardContent,
  createStyles,
  makeStyles,
  Typography,
  useTheme,
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
  VictoryScatter,
} from 'victory'
import theme from '../theme/light'

interface Day {
  day: number
  mood: number
  anxiety: number
  date: string
  meditate: boolean
}

const currentData: Day[] = [
  { day: 1, mood: 3, anxiety: 4, meditate: true, date: '2021/01/09' },
  { day: 2, mood: 7, anxiety: 3, meditate: false, date: '2021/01/10' },
  { day: 3, mood: 8, anxiety: 2, meditate: true, date: '2021/01/11' },
  { day: 4, mood: 6, anxiety: 3, meditate: true, date: '2021/01/12' },
]

const previousData: Day[] = [
  { day: 1, mood: 9, anxiety: 3, meditate: false, date: '2020/12/13' },
  { day: 2, mood: 6, anxiety: 3, meditate: true, date: '2020/12/14' },
  { day: 3, mood: 7, anxiety: 1, meditate: true, date: '2020/12/15' },
  { day: 4, mood: 7, anxiety: 1, meditate: false, date: '2020/12/16' },
]

const Charts = () => {
  const [data, setData] = useState(currentData)

  const appTheme = useTheme()

  const anxietyValues = data.map((point) => {
    return { x: point.day, y: point.anxiety }
  })

  const moodValues = data.map((point) => {
    return { x: point.day, y: point.mood }
  })

  const meditateValues = data
    .filter((item) => item.meditate === true)
    .map((point) => {
      return { x: point.day, y: 0, symbol: 'star', size: 5 }
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
                  labels: { fill: appTheme.palette.text.primary },
                },
                {
                  name: 'Mood',
                  symbol: { fill: theme.palette.secondary.main },
                  labels: { fill: appTheme.palette.text.primary },
                },
                {
                  name: 'Meditate',
                  symbol: { fill: 'gold', type: 'star' },
                  labels: { fill: appTheme.palette.text.primary },
                },
              ]}
            />
            <VictoryAxis
              tickFormat={(x) => `Day ${x}`}
              tickValues={data.map((point) => {
                return point.day
              })}
              style={{
                tickLabels: { fill: appTheme.palette.text.primary },
              }}
            />
            <VictoryAxis
              dependentAxis
              tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              style={{
                tickLabels: { fill: appTheme.palette.text.primary },
              }}
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
            <VictoryScatter
              data={meditateValues}
              style={{ data: { fill: 'gold' } }}
            />
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
    },
  })
)
export default Charts
