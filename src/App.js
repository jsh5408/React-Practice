import {Route, Link} from "react-router-dom";
import Home from "./Home";
import ToDoList from "./ToDoList";
import CoinTracker from "./CoinTracker";
import CoinConverter from "./CoinConverter";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/todolist">ToDoList</Link>
        </li>
        <li>
          <Link to="/cointracker">CoinTracker</Link>
        </li>
        <li>
          <Link to="/coinconverter">CoinConverter</Link>
        </li>
      </ul>
      <Route exact path="/home" component={Home} />
      <Route path="/todolist" component={ToDoList} />
      <Route path="/cointracker" component={CoinTracker} />
      <Route path="/coinconverter" component={CoinConverter} />
    </div>
  );
}

export default App;