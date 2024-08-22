import React from 'react'
import { Outlet } from 'react-router-dom'

function Courses() {
  return (
    <>
        <h1>Course Heading</h1>
        <Outlet/>
    </>
  )
}

export default Courses