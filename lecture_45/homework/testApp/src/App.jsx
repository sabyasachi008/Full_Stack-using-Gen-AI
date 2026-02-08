import { useState } from 'react'

import './App.css'

import ModalExample from './ModalsExample';

function App() {

  const [count, setCount] = useState(0);
  return (
    <>
  <div className='App'>
    <p>Count : {count}</p>

    <button onClick={() => setCount(count+1)}>Increment</button>
  </div>
  <br />
  <br />
  <div className='Modal'>
    <ModalExample/>
  
  </div>
    </>
  )  
}

export default App
