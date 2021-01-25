import React, { useState } from 'react'
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import {
  Button,
  Card,
  CardContent,
  createStyles,
  FormControl,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'

const MoodForm = () => {
  let history = useHistory()

  const [start, setStart] = useState('')
  const [today, setToday] = useState(moment().format('YYYY-MM-DD'))
  const [mood, setMood] = useState('')
  const [anxiety, setAnxiety] = useState('')

  const calculateDay = (start: string) => {
    const startDate = moment(start)
    const endDate = moment(today)

    return endDate.diff(startDate, 'days') + 1
  }

  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            history.push('/charts')
          }}
        >
          <FormControl>
            <label>First day of your last period:</label>
            <TextField
              id='last-period'
              type='date'
              defaultValue={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </FormControl>
          <div className={classes.formInput}>
            {start && (
              <Typography variant='h6' color='secondary'>
                {' '}
                Day {calculateDay(start)}{' '}
              </Typography>
            )}
          </div>
          <FormControl className={classes.formInput}>
            <label>How would you rate your mood?</label>
            <Select
              value={mood}
              onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
                setMood(e.target.value as string)
              }
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formInput}>
            <label>How would you rate your anxiety?</label>
            <Select
              value={anxiety}
              onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
                setAnxiety(e.target.value as string)
              }
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.formInput}>
            <Button type='submit' variant='contained' color='primary'>
              Submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: 'rgba(255,255,255,0.8)',
      width: '50%',
      margin: 'auto',
      borderRadius: '12px',
    },
    formInput: {
      padding: 8,
    },
  })
)

export default MoodForm
