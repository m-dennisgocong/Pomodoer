export interface Props {
    name : string;
    time : number;
    handleTime : Function;
}

function setTimeLength({time, handleTime, name} : Props){

    function handleDecrement(){
        return time <= 1 ? handleTime(1) : handleTime(time - 1); 
    }
    function handleIncrement(){
        return time >= 60 ? handleTime(60) : handleTime(time + 1);
    }   
    function nameLabel(){  
        return name.charAt(0).toUpperCase() + name.slice(1) + " Length";
    }
    
    return (
        <div className={`length-setting`}>
            <div id={`${name}-label`}>{`${nameLabel()}`}</div>
            <button id={`${name}-decrement`} onClick={() => handleDecrement()}></button>
            <div id={`${name}-length`}>{time}</div>
            <button id={`${name}-increment`} onClick={() => handleIncrement()}></button> 
        </div>
    );
}
export default setTimeLength;