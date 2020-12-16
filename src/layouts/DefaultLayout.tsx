import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className='App'>
      <h3>My Moods</h3>
      {children}
    </div>
  )
}

export default DefaultLayout
