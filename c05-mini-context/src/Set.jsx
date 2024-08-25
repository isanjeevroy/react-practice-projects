import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'

function Set() {
    const {loading,setLoading} = useContext(AppContext)
  return (
    <div>
        <button onClick={()=>setLoading(!loading)}>click me</button>
    </div>
  )
}

export default Set