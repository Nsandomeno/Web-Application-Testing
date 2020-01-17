import React from 'react';
import Dashboard from './dashboard.js';
import { useIncrement } from './hooks/useIncrement.js';

function Display() {
    // STATE --- hook --- need 2 slices

    // const [strike, setStrike] = useState({ strike: 0 })
    // const [ball, setBall] = useState({ ball: 0 })
    // const [foul, setFoul] = useState({ foul: 0 })
    // const [strike, setStrike, handleIncrement] = useIncrement(0)
    // const [ball, setBall, handleIncrement] = useIncrement(0)
    const [strike, setStrike, handleStrike] = useIncrement(0)
    const [ball, setBall, handleBall] = useIncrement(0)


    // METHODS
    const foulBall = () => {
        console.log("FOUL BALL!")
        if (strike < 2){
            handleStrike(strike, 3)
        } else {
            return null
        }
    }

    const hitReset = () => {
        // Any instance of the hit button being clicked should reset the display state

        console.log("This is a reset due to a hit.")
        setStrike(0)
        setBall(0)
    }




        return(
            <div>

                <div>
                    <h1>STRIKE: {strike} </h1>
                    <h1>BALL: {ball} </h1>
  
                </div>
                <div>
                    <Dashboard strike={strike} ball={ball} hitReset={hitReset} foulBall={foulBall} handleBall={handleBall} handleStrike={handleStrike} />
                </div>
            </div>
        )

}

export default Display