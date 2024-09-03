import React from "react";
import { Button, Card } from "react-bootstrap";

function Description({ description }) {
  return (
    <>
      <Card.Text style={{ textAlign: "left" }}>
        {description.slice(0, 70)}...
      </Card.Text>
      <Button
        style={{
          backgroundColor: "gray",
          color: "white",
          border: "none",
          borderRadius: "5px",
          left: "35%",
          bottom: "10px",
          position: "absolute",
        }}
        variant="primary"
        onClick={() => alert(description)}
      >
        Read more
      </Button>
    </>
  );
}

export default Description;
