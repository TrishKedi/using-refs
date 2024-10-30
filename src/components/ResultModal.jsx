import { forwardRef } from "react"
import {createPortal} from "react-dom"


const ResultModal = forwardRef( function ResultModal({result, targetTime, remainingTime, onReset}, ref){
    const userLost = remainingTime <= 0
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round( (1 - remainingTime / (targetTime * 1000)) * 100 )
    return createPortal(
        <dialog ref={ref} className="result-modal" onClose={onReset}>
            
            { userLost ? <h2>You Lost</h2> : <h2>Your Score: {score}</h2> }
            <p>The Target time was {targetTime} seconds</p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong></p>
            <form onSubmit={onReset}>
                <button>close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
})

export default ResultModal