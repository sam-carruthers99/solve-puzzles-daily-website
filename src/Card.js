import React from "react"
import "./styles/Card.css"

export default function Card(){
    
    const [showAnswer, setShowAnswer] = React.useState(false)
    
    function changeShowAnswer(){
        setShowAnswer(prevShowAnswer => !prevShowAnswer)
    }

    return (
        <div className="card--container">
            <h4 className="card--title">A Family Riddle</h4>
            <p className="card--riddle">A girl has as many brothers as sisters, but each brother has only half as many brothers as sisters. How many brothers and sisters are there in the family?</p>
            {showAnswer && <p className="card--answer">4 sisters and 3 brothers</p>}
            <button className="card--button" onClick={changeShowAnswer}>{showAnswer ? "Hide" : "Show"} Answer</button>
        </div>
    )
}