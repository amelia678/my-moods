import React from 'react'
import { VictoryBar } from 'victory'

const data = [
  { day: 1, mood: 3 },
  { day: 2, mood: 7 },
  { day: 3, mood: 8 },
  { day: 4, mood: 6 },
]

const Charts = () => {
  return (
    <div>
      <VictoryBar />
    </div>
  )
}

export default Charts
