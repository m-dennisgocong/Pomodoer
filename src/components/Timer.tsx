import { BsPauseCircle, BsPlayFill } from "react-icons/bs";
import {GrPowerReset} from "react-icons/gr";
export interface Props{
    state: boolean;
    CurrentTimer: string;
    timeLeft: number;
    timeController: Function;
}

function Timer({state, CurrentTimer, timeLeft} : Props){

    const clockify = () : string => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft - minutes * 60;
        return `${minutes < 10 ? `0`+minutes : minutes}:${seconds < 10 ? `0`+seconds : seconds}`;
    }

    return(
        <>
        <div className="timer-container">
            <div id="timer-label">{CurrentTimer}</div>
            <div id="time-left">{clockify()}</div>
        </div>
        <div className="time-controller">   
            <button id="start_stop">{state ? <BsPauseCircle/> : <BsPlayFill/>}</button>
            <button id="reset"><GrPowerReset/></button>
        </div>
        </>
    );
}
export default Timer;