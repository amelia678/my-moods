import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { BarChart, List } from '@material-ui/icons'
import React, { ReactNode, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

interface Props {
  children: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  const location = useLocation()
  const history = useHistory()
  const [menuValue, setMenuValue] = useState(location.pathname)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    history.push(newValue)
    setMenuValue(newValue)
  }
  
  return (
    <div className='App'>
      <h3>My Moods</h3>
      {children}
      <BottomNavigation value={menuValue} onChange={handleChange} showLabels>
        <BottomNavigationAction
          label='Charts'
          value='/charts'
          icon={<BarChart />}
        />
        <BottomNavigationAction label='MoodLog' value='/' icon={<List />} />
      </BottomNavigation>
    </div>
  )
}

export default DefaultLayout
