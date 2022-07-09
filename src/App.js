import React from 'react';
import PokedexHeader from './Components/PokedexHeader';
import PokemonInfo from './Components/PokemonInfo';
import {
  Segment
} from 'semantic-ui-react'
import './App.css';
import { useEffect, useState } from "react"

function App(){

      const[allPokemons, setAllPokemons] = useState([])
      const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
   
     const getAllPokemons = async () => {
      const res = await fetch(loadMore)
      const data = await res.json()
       
      setLoadMore(data.next)
      
      function createPokemonObject(result)  {
        result.forEach( async (pokemon) =>{
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const data = await res.json()

          setAllPokemons(currentList => [...currentList, data])
          allPokemons.push(data)
        })
      }
      createPokemonObject(data.results)
      await console.log(allPokemons)
     }
   
    useEffect(() => {
     getAllPokemons()
    }, [])

    return (
      <div className="App">
        <PokedexHeader 
          name='Jordi'
          author='@jordi_bru'
        />
        <div className="pokemon-container">
          <div className="all-container">
            {allPokemons.map((pokemon, index) => 
              <PokemonInfo 
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].name}
              key={index}
              />
            )}
          </div>
          <Segment basic>
            <button className="Load-More">Load More</button>
          </Segment>
          
        </div>
      </div>
    );
}

export default App;
