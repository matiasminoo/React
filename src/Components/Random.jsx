import React, { useState } from 'react'

function Random() {

    const [number, setNumber] = useState(1);

    function numeroRandomCompa() {

    const numero = Math.floor(Math.random() * 1000 + 1);
    setNumber(numero);
}
    return ( 
        <h1 onClick={numeroRandomCompa}>{number}</h1>
    );
}

export default Random;