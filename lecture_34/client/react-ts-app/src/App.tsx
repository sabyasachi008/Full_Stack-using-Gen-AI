import { useState } from 'react';


function Counter() {
  const [count, setCount] = useState(0);

  console.log("We are console logging as well as updating");

  const increaseAndLog= ()=> {
    setCount(count+1);

  };

  return (

    <>
      <button onClick={increaseAndLog}>Click To increase</button>
      <br></br>
      <br></br><br></br>
      <button onClick={()=> setCount(count-1)}>Click to decrease</button>
      <p>{count}</p>
    </>
  );
};
function App() {

  return (
    <>
    <h1>Counter App</h1>
    <p>This is my first React App which can count on clicks</p>
    <Counter/>
     
    </>
  )
}

export default App
