import React, { useState, useEffect } from 'react';

function Characters() {

    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(false);
    const url = ("https://rickandmortyapi.com/api/character/");
  
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
                console.log('error', error);
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
                <ul>
                    {characters.map((character) => (
                        <li key={character.id}>
                            <img src={character.image} alt={character.name} />
                            {character.name}
                        </li>
                    
                    ))}
                </ul>
            )}
        </div>
    );
}

//? export const charactersData = [{
//         id: 1,
//         name:()
// }

// ]

export default Characters;