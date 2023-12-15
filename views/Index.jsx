import React from "react";

function Index(props) {
  return (
    <>
      <nav>
        <h1 style={{ color: "#ffffff", backgroundColor: "#000000" }}>
          See All The Pokemon!
        </h1>
      </nav>
      <ul>
        {props.pokemon.map((pk, i) => (
          <li key={i}>
            <a
              href={`/pokemon/${i}`}>
              {pk.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Index;
