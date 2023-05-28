import { useState } from 'react';
import useInterval from 'use-interval';
import './App.css'
import SetTimeLength from './components/setTimeLength';
import Timer from './components/Timer';
import Beep from './assets/BeepSound.wav';
import githubLogo from './logo/github-mark-white.svg';

export interface TimerState {
  [key : string] : number | string | boolean ;
  session: number;
  break: number;
  timerState: boolean;
  currentTimer: string;
  timeLeft: number;

}

function App() {
  
  const initialState = {
    session : 25,
    break: 5,
    timerState: false,
    currentTimer: "Session",
    timeLeft: 1500,
  };

  const [timer, setTimer] = useState<TimerState>(initialState);

  const handleTimerLength = (timerName : string, timeLength : number) : void => {

    // disable the timer length setting for session and break time length when timer is play
    if(timer.timerState) return; 

    // update timer length
    return setTimer(updateTimer => ({
      ...updateTimer, [timerName]: timeLength, timeLeft : (timerName === 'session' ?  (timeLength * 60) : updateTimer.timeLeft)}));
  }

  const handlePlay_Pause = (options: boolean) : void => {
    return setTimer(updateTimer => ({
      ...updateTimer, timerState: options}));
  }

  const handleReset = () : void => {
    alarm(false);
    return setTimer(updateTimer => ({
      ...updateTimer, ...initialState
    }));
  }

  const alarm = (setAlarm : boolean) => {
    const audio = document.getElementById("beep") as HTMLAudioElement;
    if(setAlarm){
      audio.play();
    }else{
      audio.pause();
      audio.currentTime = 0;
    }
  }

  const switchTimer = (str : string, num : number) : void =>  { 
    return setTimer(updateTimer => ({
      ...updateTimer, currentTimer : str, timeLeft: num}))
  }

  useInterval(() : void => {
    if (timer.timeLeft > 0) {
      setTimer(updateTimer => ({
      ...updateTimer, timeLeft: (updateTimer.timeLeft - 1)})) 
    }else{
      alarm(true);
      timer.currentTimer === 'Session' ?  
      switchTimer('Break', (timer.break * 60)) : switchTimer('Session', timer.session * 60);
    }
  }, timer.timerState ? 1000 : null); 

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
        currentTimer={timer.currentTimer}
        timeLeft={timer.timeLeft}
        play_pause={handlePlay_Pause}
        handleReset={handleReset}
        />
      <audio id="beep" preload="auto" src={Beep}></audio>
      <footer>
        <a href="https://m-dennisgocong.github.io/Pomodoer/"><img src={githubLogo} alt="Github Logo" /> Dennis Goc-ong</a>
      </footer>
    </div>
  );
}

export default App
