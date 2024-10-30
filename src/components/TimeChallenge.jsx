import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimeChallenge({title, targetTime}){
    const [timeRemaining, setTimerRemaining] = useState(targetTime * 1000)
    const timer = useRef()
    const dialog = useRef()
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    console.log(timeRemaining)
    
    if(timeRemaining <=0){
        clearInterval(timer.current)
        
        dialog.current.showModal()
    }

    function handleReset(){
        setTimerRemaining(targetTime * 1000)

    }
  

    function handleStart(){
       
        
        timer.current = setInterval(()=>{
            
            setTimerRemaining(prevTimeRemaining => prevTimeRemaining - 10)
           
        }, 10)
        
    }

    function handleStop(){
        
        clearInterval(timer.current)
        dialog.current.showModal()
       
    }

    return (
        <>
            <ResultModal ref={dialog} result="lost" targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second {targetTime > 1 ? 's' : ''}
                </p>
               
                <button onClick={timerIsActive ? handleStop : handleStart}>
                {timerIsActive ? 'Stop Challenge' : 'Start Challenge'} 
                </button>
                <p className={timerIsActive ? 'active' : undefined}>
                    { timerIsActive ? 'Time is running ...' : 'Timer inactive' }
                </p>
            </section>
        </>

    );
}