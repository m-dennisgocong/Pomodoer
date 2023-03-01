import { useState } from 'react';
import './App.css'
import SetTimeLength from './components/setTimeLength';
function App() {
  const [session, setSession] = useState<number>(25);
  const [breakTime, setBreakTime] = useState<number>(5);

  return (
    <div className="App">
      <h1 className='main-title'>Pomodoer</h1>
        <SetTimeLength
          name={"break"} 
          time={breakTime} 
          handleTime={setBreakTime}
        />
        <SetTimeLength
          name={"session"} 
          time={session} 
          handleTime={setSession}
        />
    </div>
  )
}

export default App
