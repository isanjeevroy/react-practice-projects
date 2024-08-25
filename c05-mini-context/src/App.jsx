import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'

function App() {

  const {loading} = useContext(AppContext)

  return (
    <div>{loading?"HEY":"BYE"}</div>
  )
}

export default App