import { BsFillPauseFill, BsPlayFill } from "react-icons/bs";
import {GrPowerReset} from "react-icons/gr";
export interface Props{
    state: boolean;
    CurrentTimer: string;
    timeLeft: number;
    play_pause: Function;
    handleReset: Function;
}

function Timer({state, CurrentTimer, timeLeft, play_pause, handleReset} : Props){

    const clockify = () : string => {
        let minutes = Math.floor((timeLeft) / 60);
        let seconds = (timeLeft) - minutes * 60;
        return `${minutes < 10 ? `0`+minutes : minutes}:${seconds < 10 ? `0`+seconds : seconds}`;
    }

    const startOrstop = () : void => {
        play_pause(!state);
    }

    const reset = () : void => {
        return handleReset();
    }
    
    return(
        <>
        <div className="timer-container">
            <div id="timer-label">{CurrentTimer}</div>
            <div id="time-left">{clockify()}</div>
        </div>
        <div className="time-controller">   
            <button id="start_stop" onClick={()=>startOrstop()}>{state ? <BsFillPauseFill /> : <BsPlayFill/>}</button>
            <button id="reset" onClick={()=>reset()}><GrPowerReset/></button>
        </div>
        </>
    );
}
export default Timer;