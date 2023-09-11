import React, { useState, useEffect } from "react";
import Card from "../components/MyCard";
import MyCard from "../components/MyCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyGrid from "../components/Grid";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Pagiation from "../components/Pagiation";
// import Button from "react-bootstrap/esm/Button";
// import { findSquareNumber } from "../utils/findSquareNumber";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(false);
  const url = "https://rickandmortyapi.com/api/character/";

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log('data', data)

        if (!data.error) {
          setCharacters(data.results);
          // console.log('chars', chars);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
        console.log("error", error);
      }
    };

    fetchCharacter();
  }, []);

  return (
    <div>
      <h1>Rick & Morty</h1>
      {error ? (
        <p>error</p>
      ) : (
        <>
          {/* <MyGrid/> */}
          {characters.map((character) => (
            <>
              <MyCard character={character} />
              <br />
            </>
          ))}
        </>
      )}
    </div>
  );
}

export default Characters;

// <li key={character.id}>
//     <img src={character.image} alt={character.name} />
//     {character.name}
// </li>
