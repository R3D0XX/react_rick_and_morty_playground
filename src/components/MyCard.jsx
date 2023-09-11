import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const MyCard = ({ character }) => {
  console.log("props", character);
  let char = character;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={char.image} alt={char.name} />
        <Card.Body>
          <Card.Title>{char.name}</Card.Title>
          {/* <Card.Text>
       
          </Card.Text> */}
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCard;
