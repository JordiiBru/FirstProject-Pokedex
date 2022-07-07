import React from 'react';
import{
    Header,
    Image,
    Segment
} from 'semantic-ui-react'

const PokedexHeader = ( {author, name} ) => {
  return (
    <Segment inverted padded='very' vertical>
        <Header as='h1'>This is a header for {name}'s Pokedex!</Header>
        <Image src={'ralts.png'} centered size='small'/>
        <Header as='h3'>Author: {author}</Header>
    </Segment>
  )
}

export default PokedexHeader