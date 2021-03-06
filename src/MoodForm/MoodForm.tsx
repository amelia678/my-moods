import React, { useState } from 'react'
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  createStyles,
  FormControl,
  FormControlLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'
import theme from '../theme/light'

const MoodForm = () => {
  let history = useHistory()

  const [start, setStart] = useState('')
  const [mood, setMood] = useState('')
  const [anxiety, setAnxiety] = useState('')
  const [meditate, setMeditate] = useState(false)

  const today = moment().format('YYYY-MM-DD')

  const calculateDay = (start: string) => {
    const startDate = moment(start)
    const endDate = moment(today)

    return endDate.diff(startDate, 'days') + 1
  }

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMeditate(event.target.checked)
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
          <FormControl fullWidth className={classes.formInput}>
            <Box display='flex' justifyContent='center'>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={meditate}
                    onChange={handleCheck}
                    name={'meditate'}
                  />
                }
                label='Did you meditate?'
                labelPlacement='start'
              />
            </Box>
          </FormControl>
          <div className={classes.formInput}>
            <Button type='submit' variant='contained' color='secondary'>
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
      width: '50%',
      [theme.breakpoints.down('sm')]: {
        width: '70%',
      },
      margin: 'auto',
      borderRadius: '12px',
    },
    formInput: {
      padding: 8,
    },
  })
)

export default MoodForm
