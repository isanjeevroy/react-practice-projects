import './App.css'
import Lottery from './Lottery'
import { winCondition } from './winCondition'

function App() {

  return (
    < div className='app'>
     <Lottery n={3} winCondition={winCondition}/>
    </div>
  )
}

export default App
