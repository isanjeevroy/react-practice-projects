import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  return (
    <div className='w-[100vw] h-[100vh] bg-slate-600 flex flex-col md:flex-row gap-2 items-center justify-evenly px-10'>
      <Random />
      <Tag />
    </div>
  )
}

export default App