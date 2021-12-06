import Home from "./Home";
import CoinConverter from "./CoinConverter";
import {Route, Link} from "react-router-dom";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/coinconverter">CoinConverter</Link>
        </li>
      </ul>
      <Route exact path="/home" component={Home} />
      <Route path="/coinconverter" component={CoinConverter} />
    </div>
  );
}

export default App;