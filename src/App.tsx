import { useState } from 'react';
import './App.css'
import SetTimeLength from './components/setTimeLength';

export interface TimerState {
  [key : string] : number | string | boolean;
  session: number;
  break: number;
  timerState: boolean;
  timerType: string;
  timer: number;
}

function App() {
  
  const [timer, setTimer] = useState<TimerState>({
    session : 25,
    break: 5,
    timerState: false,
    timerType: "Session",
    timer: 1500
  });

  const handleTimerLength = (timerName : string, timeLength : number) : void => {
    return setTimer(updateTimer => ({
      ...updateTimer, [timerName]: timeLength >= 1 && 60 >= timeLength ? timeLength : updateTimer[timerName]}));
  }

  return (
    <div className="App">
      <h1 className='main-title'>Pomodoer</h1>
        <SetTimeLength
          name={"break"}
          time={timer.break} 
          handleTimerLength={handleTimerLength}
        />
        <SetTimeLength
          name={"session"}
          time={timer.session} 
          handleTimerLength={handleTimerLength}
        />
    </div>
  );
}

export default App
