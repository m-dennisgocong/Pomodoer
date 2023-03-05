import { BsArrowDown, BsArrowUp } from "react-icons/bs";
export interface Props {
    name : string;
    time : number;
    handleTimerLength : Function;
}

function setTimeLength({time, handleTimerLength, name} : Props){

    const nameLabel = () : string => {  
        return name.charAt(0).toUpperCase() + name.slice(1) + " Length";
    }

    const increment = () : number => {
        return handleTimerLength(name, time > 1 ? time - 1 : time);
    }
    
    const decrement = () : number => {
        return handleTimerLength(name, time < 60 ? time + 1 : time);
    }
    
    return (
        <div className={`length-setting`}>
            <div id={`${name}-label`}>{`${nameLabel()}`}</div>
            <button id={`${name}-decrement`} onClick={() => increment()}>
                <BsArrowDown />
            </button>
            <div id={`${name}-length`}>{time}</div>
            <button id={`${name}-increment`} onClick={() => decrement()}>
                <BsArrowUp />
            </button> 
        </div>
    );
}
export default setTimeLength;