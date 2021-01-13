import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { BarChart, List } from '@material-ui/icons'
import React, { ReactNode, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

interface Props {
  children: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  const location = useLocation()
  const history = useHistory()
  const classes = useStyles()
  const [menuValue, setMenuValue] = useState(location.pathname)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    history.push(newValue)
    setMenuValue(newValue)
  }

  return (
    <div className='App'>
      <Typography variant='h1' color='primary'>My Moods</Typography>
      {children}
      <footer className={classes.footer}>
        <BottomNavigation value={menuValue} onChange={handleChange} showLabels>
          <BottomNavigationAction
            label='Charts'
            value='/charts'
            icon={<BarChart />}
          />
          <BottomNavigationAction label='MoodLog' value='/' icon={<List />} />
        </BottomNavigation>
      </footer>
    </div>
  )
}

const useStyles = makeStyles({
  footer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
})

export default DefaultLayout
