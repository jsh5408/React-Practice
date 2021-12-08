import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import ToDoList from "./routes/ToDoList";
import CoinTracker from "./routes/CoinTracker";
import CoinConverter from "./routes/CoinConverter";
import MovieList from "./routes/MovieList";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/home" component={Home} />
        <Route path="/todolist" component={ToDoList} />
        <Route path="/cointracker" component={CoinTracker} />
        <Route path="/coinconverter" component={CoinConverter} />
        <Route path="/movielist" component={MovieList} />
      </Router>
    </div>
  );
}

export default App;