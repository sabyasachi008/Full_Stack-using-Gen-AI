import { useEffect, useState } from 'react'
import { useRef } from 'react';

import './App.css'

function App() {
  const[task, setTask] = useState("");
  const [sec, setSec] = useState(0);
  const [run, setRun] = useState(false);

  const inputRef = useRef(null), timeRef = useRef(null);

  useEffect(()=> inputRef.current.focus(), []);
  useEffect(() => {
    if(run) timeRef.current = setInterval(()=> setSec(s => s+1), 1000);

    return ()=> clearInterval(timeRef.current);
  }, [run]);

  const handleReset =() => {
    setRun(false);
    setSec(0);
    setTask("")
  }
  return (

    <div className="page">
      <h2>Promodoro Timer</h2>
      <input
      ref = {inputRef}
      value={task}
      onChange={e=> setTask(e.target.value)}
      placeholder = 'What are u working on ?'
      />
      
      <h1>{sec}</h1>
      <p>{task || "No task Selected"}</p>
      <div className = "buttons">
        <button onClick={()=> setRun(true)}>Start</button>
        <button className='pause' onClick={()=> setRun(false)}>
        Pause
        </button>
        <button className='reset' onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default App
