import React from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../redux/actions";
import { Card, Button, CardDeck } from "react-bootstrap";

const Result = (props) => {
  const dispatch = useDispatch();
  const handleClick = (id, fullName, parkCode, stateCode, imageUrl) => {
    console.log("buttonClick", id, fullName, parkCode, stateCode);
    dispatch(
      setLocation({
        id: id,
        fullName: fullName,
        parkCode: parkCode,
        stateCode: stateCode,
        imageUrl: imageUrl,
      })
    );
  };
  return (
    <>
      <div className="container-fluid">
       
              <div id={props.park.id} className="mb-3">
                <CardDeck>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={props.park.images[0].url} />
                    <Card.Body>
                      <Card.Title>{props.park.fullName}</Card.Title>
                      <Card.Text>{props.park.description}</Card.Text>
                      <Button
                        onClick={() =>
                          handleClick(
                            props.park.id,
                            props.park.fullName,
                            props.park.parkCode,
                            props.park.states,
                            props.park.images[0].url
                          )
                        }
                        variant="success"
                      >
                        Add to favorites
                      </Button>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </div>
            </div>
    </>
  );
};

export default Result;
