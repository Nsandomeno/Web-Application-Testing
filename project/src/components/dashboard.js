import React from 'react';


export default function Dashboard(props) {
    // console.log("These are the props that make it to the dashboard:", props)



//JSX
return(
    <div>
        <h1> Dashboard </h1>
        <div>
        <button onClick={() => props.handleStrike(props.strike, 3)}>Strike</button>
        <button onClick={() => props.handleBall(props.ball, 4)}>Ball</button>
        <button onClick={() => props.foulBall()}>Foul</button>
        <button onClick={() => props.hitReset()}>Hit</button>
        </div>
    </div>
)
}