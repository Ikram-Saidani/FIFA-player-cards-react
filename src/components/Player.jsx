
import { Card, ListGroup } from "react-bootstrap";

function Player({ id, name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
    <Card key={id} style={{ width: '20rem', padding: '20px',borderRadius:"10px",boxShadow:"5px 5px 5px grey",backgroundColor:"rgba(255, 255, 10, 0.5)"}}>
      <Card.Img variant="top" height="300px" src={imageUrl} style={{borderRadius:"10px"}} />
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold',fontSize:"20px",textAlign:"center"}}>{name}</Card.Title>
      </Card.Body>
      <ListGroup style={{width:"16rem", borderRadius:"10px"}} className="list-group-flush">
        <ListGroup.Item style={{color: 'red',backgroundColor:"rgba(255, 255, 10, 0.5)", fontWeight: 'bold',fontSize:"20px",textAlign:"center"}}>{jerseyNumber}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"rgba(255, 255, 10, 0.5)",fontWeight: 'bold',fontSize:"17px"}}>{team}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"rgba(255, 255, 10, 0.5)",fontWeight: 'bold',fontSize:"17px"}}>{nationality}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"rgba(255, 255, 10, 0.5)",fontWeight: 'bold',fontSize:"17px"}}>{age} years old</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default Player

Player.defaultProps = {
  name: "player-name",
  team: "player-team",
  nationality: "player-nationality",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "player-imageUrl"
};