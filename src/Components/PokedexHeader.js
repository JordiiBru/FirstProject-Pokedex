import React from 'react';
import{
    Header,
    Image,
    Segment
} from 'semantic-ui-react'

const PokedexHeader = ( {author, name} ) => {
  return (
    <Segment padded='very' inverted vertical>
        <Header as='h2'>This is a header for {name}'s Pokedex!</Header>
        <Image src={'poke.png'} centered size='tiny'/>
        <Header as='h3'>Author: {author} </Header>
    </Segment>
  )
}

export default PokedexHeader