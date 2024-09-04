import React from 'react'
import Player from "./Player.jsx";
import players from '../players.js';

function PlayersList() {
    const fifaCards = players.map((player) => {
      return <Player key={player.id} {...player} />;
    });
  
    return <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"30px"}} className="App">{fifaCards}</div>;
  }

export default PlayersList