import React from 'react';

const PokemonInfo = ( {id, name, image, type} ) => {
    const style = `info-container ${type}`
    return (
        <div className={style}>
            <div className='number'>
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name} />
            <div className='details-container'>
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default PokemonInfo