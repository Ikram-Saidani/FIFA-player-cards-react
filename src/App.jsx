import "./App.css";
import PlayersList from "./components/PlayersList.jsx";



function App() {
  return(
    <div style={{backgroundColor:"rgb(240, 240, 240)"}}>
    <h1 style={{textAlign:"center",fontSize:"70px",letterSpacing:"5px"}}>Fifa Card</h1>
    <PlayersList/>
    </div>
  )
}

export default App;