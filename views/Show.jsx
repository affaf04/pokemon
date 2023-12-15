import React from 'react';

function Show(props) {
  return (
    <>
      <h1>Gotta Catch 'Em All</h1>
      <h2>{props.pokemon.name}</h2>
      <img src={props.pokemon.img} alt={'img'} />
      <a href="/pokemon">Back</a>

    </>
  );
}

export default Show;

