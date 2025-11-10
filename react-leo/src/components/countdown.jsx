import {useState, useEffect } from "react"





function Countdown() {




    const [timeLeft, setTimeLeft] = useState(10) // Setter tiden til 10 sekunder



    useEffect((function() {

        const timer = setTimeout(function() {
            setTimeLeft(timeLeft - 1);
        }, 1000) // Denne koden kjører hver sekund, pga  setTimeout og 1000 ms
        
        
        
        
        if (timeLeft === 0) {
      setTimeLeft("Gratulerer med Dagen!");
        }     // Setter teksten til "Gratulerer med Dagen!"




       
        


    }), [timeLeft])



    

    return (

        <h1>{timeLeft}</h1>

    )
    
}

export default Countdown