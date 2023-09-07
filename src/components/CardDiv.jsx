import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Characters from '../pages/characters';
//? import {characterData}'../pages/characters';

function CardDiv() {
    const createOneCard = (char) => {
       
        return (
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={char.image} alt={char.name} />
                <Card.Body>
                    <Card.Title>{char.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
     return (
        <div>
            <h1>Character Cards</h1>
            <div className="card-container">
                {Characters.map((character) => (
                    createOneCard(character)
                ))}
            </div>
        </div>
    );
}

    

    export default CardDiv;