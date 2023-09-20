import './css/Stopwatch.css';
import React, { useState } from 'react';

function Stopwatch() {

    const [time, setTime] = useState(0);
    const [stop, setStop] = useState(undefined);

    function handleSubmit() {
        if (stop) {
            clearInterval(stop);
            setStop(undefined);
        } else {
            const idIntervalo = setInterval(() => setTime (t => t + 1), 10);
            setStop(idIntervalo);
        }
    }
    function reset() {
        clearInterval(stop);
        setTime(0);
    }

    const cs = time % 100;
    const seconds = Math.floor(time / 100) % 60;
    const minutes = Math.floor(time / 6000) % 60;
    return (
        <div id='nashe'>
            <h1 onClick={handleSubmit}>{minutes.toString().padStart(2,0)} : {seconds.toString().padStart(2,0)} : {cs.toString().padStart(2,0)}</h1>
            <button onClick={handleSubmit}>Start</button> <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Stopwatch;