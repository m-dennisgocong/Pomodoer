import { useState } from 'react';
import './App.css'
import SetTimeLength from './components/setTimeLength';
import Timer from './components/Timer';
export interface TimerState {
  [key : string] : number | string | boolean;
  session: number;
  break: number;
  timerState: boolean;
  CurrentTimer: string;
  timeLeft: number;
}

function App() {
  
  const [timer, setTimer] = useState<TimerState>({
    session : 25,
    break: 5,
    timerState: false,
    CurrentTimer: "Session",
    timeLeft: 1500
  });

  const handleTimerLength = (timerName : string, timeLength : number) : void => {
    return setTimer(updateTimer => ({
      ...updateTimer, [timerName]: timeLength, 
    timeLeft: timeLength * 60}));
  }
  const handleTimeController = () => {

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
        <Timer 
        state={timer.timerState} 
        CurrentTimer={timer.CurrentTimer}
        timeLeft={timer.timeLeft}
        timeController={handleTimeController}
        />
    </div>
  );
}

export default App
