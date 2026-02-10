import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return(
    <div>
      <h1>count {count}</h1>
      <div>
        <button onClick = {()=> setCount(count+1)}>increment</button>
        <button onClick = {()=> setCount(count-1)}>decrement</button>
        <button onClick = {()=> setCount(0)}>reset</button>
      </div>
    </div>
  )
}

export default App
