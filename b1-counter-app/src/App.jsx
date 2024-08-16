import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  function decCounter() {
    setCount(count - 1);
  }

  function incCounter() {
    setCount(count + 1);
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center flex-col items-center gap-10 bg-slate-600 text-2xl'>
      <div> <h1>Increment and Decrement</h1> </div>

      <div className='flex justify-center gap-12 bg-white text-5xl items-center rounded-sm'>
        <button onClick={decCounter} className='border-r-2 px-5'>-</button>
         <div> {count} </div>
        <button onClick={incCounter} className='border-l-2 px-5'>+</button>
      </div>

      <button onClick={resetCounter}>reset</button>
    </div>
  )
}

export default App