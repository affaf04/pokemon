import React from 'react';

function Show(props) {
const {img } = props.pokemon;

const newImg = img + ".jpg"
return (
    <>
     
      <h1>Gotta Catch 'Em All</h1>
      <h2>{props.pokemon.name}</h2>
      <img src={newImg} alt={'img'} />
      <a href="/pokemon">Back</a>

    </>
  );
}

export default Show;

