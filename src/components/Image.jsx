import React from "react";
import { Card } from "react-bootstrap";

function Image({image}) {
  return <Card.Img variant="top" src={image} alt="image" style={{width: "150px", height: "150px"}} />;
}

export default Image;
