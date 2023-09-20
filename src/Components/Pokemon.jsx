import React, { useState, useEffect } from 'react'

function Pokemon() {

    const [pokemon, setPokemon] = useState('');
    const [pokemonBuscado, setPokemonBuscado] = useState('pikachu');

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonBuscado}/`)
        .then(response => response.json())
        .then(data => setPokemon(data))
        .catch (error => console.log(error))
    }, [pokemonBuscado]);

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     setPokemonBuscado(e.target.value);
        
    // }
    return ( 
        <div id='pokemon'>
            <input onChange={(e) => {setPokemonBuscado(e.target.value)}} type="text" placeholder='Busca tu pokemon ñeri'/>
            { 
                pokemon ? (<div> <p>{pokemon.name}</p>
                <img style={{width: '10vw'}} src={pokemon.sprites.front_default} alt="" /></div>) : (<p>cargando pokemon....</p>)
            }
        </div>
    );
}

export default Pokemon;