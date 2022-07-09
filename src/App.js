import React from 'react';
import PokedexHeader from './Components/PokedexHeader';
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
      console.log(data)
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

          </div>
          <Segment basic>
            <button className="Load-More">Load More</button>
          </Segment>
          
        </div>
      </div>
    );
}

export default App;
