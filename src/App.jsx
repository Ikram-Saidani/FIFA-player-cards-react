import "./App.css";
import products from "./products";
import ProductInformation from "./pages/ProductInformation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

function App() {
  var firstName = prompt("Enter your first name");
  const cards = products.map((product) => {
    return (
      <Card className="card" key={product.id} style={{ width: "18rem" }}>
        <ProductInformation product={product} />
      </Card>
    );
  });

  return (
    <div className="App">
      {cards}
      <div className="first-name">
        {firstName ? <h1>Hello, {firstName}!</h1> : <h1>Hello, there!</h1>}
        {firstName ? <img src="https://tse1.mm.bing.net/th?id=OIP.sQn4tGV27_mOcLwaNvNsXwHaHa&pid=Api&P=0&h=180" alt="..."  /> : null}        
      </div>
    </div>
  );
}

export default App;