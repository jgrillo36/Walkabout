import React from "react";
import { Card, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardDeck } from "react-bootstrap";
import { cosmiconfigSync } from "cosmiconfig";

const Favorite = (props) => {
  const { imageUrl } = props.park;
  return (
    <div Container fluid>
      <div style={{ backgroundColor: "#4a9557" }}>
        <div id={props.park.id}>
          <Container fluid>
            <CardDeck>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={props.park.imageUrl} />
                <Card.Body>
                  <Card.Title>{props.park.fullName}</Card.Title>
                  <Link to={`/webcam/${props.park.parkCode}/${props.park.stateCode}/${props.park.id}`}>
                    <Button variant="success">See more</Button>
                  </Link>
                </Card.Body>
              </Card>
            </CardDeck>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
