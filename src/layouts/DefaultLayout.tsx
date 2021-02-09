import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { BarChart, List } from '@material-ui/icons'
import React, { ReactNode, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import balloons from '../assets/images/balloons.jpg'

interface Props {
  children: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  let location = useLocation()

  const classes = useStyles()
  const [menuValue, setMenuValue] = useState(location.pathname)

  useEffect(() => {
    setMenuValue(location.pathname)
  }, [location.pathname])

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setMenuValue(newValue)
  }

  return (
    <div
      className={`App ${classes.backgroundImage}`}
      style={{ backgroundImage: `url(${balloons})` }}
    >
      <Typography variant='h1'>My Moods</Typography>
      {children}
      <footer className={classes.footer}>
        <BottomNavigation value={menuValue} onChange={handleChange} showLabels>
          <BottomNavigationAction
            component={Link}
            to={'/charts'}
            label='Charts'
            value='/charts'
            icon={<BarChart />}
          />
          <BottomNavigationAction
            component={Link}
            to={'/'}
            label='MoodLog'
            value='/'
            icon={<List />}
          />
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
  backgroundImage: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
  },
})

export default DefaultLayout
