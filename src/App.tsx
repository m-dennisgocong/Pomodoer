import { useState } from 'react';
import './App.css'

function App() {
  const [session, setSession] = useState<number>(25);
  const [breakTime, setBreakTime] = useState<number>(5);

  return (
    <div className="App">
      <h1 className='main-title'>Pomodoer</h1>
    </div>
  )
}

export default App
