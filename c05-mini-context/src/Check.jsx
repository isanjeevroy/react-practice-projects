import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'

function Check() {
    const {loading} = useContext(AppContext)
  return (
    <div>{loading?"CHECKED":"UNCHECKED"}</div>
  )
}

export default Check