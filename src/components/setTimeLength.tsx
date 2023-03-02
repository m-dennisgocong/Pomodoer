export interface Props {
    name : string;
    time : number;
    handleTimerLength : Function;
}

function setTimeLength({time, handleTimerLength, name} : Props){

    function nameLabel(){  
        return name.charAt(0).toUpperCase() + name.slice(1) + " Length";
    }
       
    return (
        <div className={`length-setting`}>
            <div id={`${name}-label`}>{`${nameLabel()}`}</div>
            <button id={`${name}-decrement`} onClick={() => handleTimerLength(name, time - 1)}></button>
            <div id={`${name}-length`}>{time}</div>
            <button id={`${name}-increment`} onClick={() => handleTimerLength(name, time + 1)}></button> 
        </div>
    );
}
export default setTimeLength;