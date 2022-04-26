import {BrowserRouter as Router, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import ToDoList from "./routes/ToDoList";
import CoinTracker from "./routes/CoinTracker";
import CoinConverter from "./routes/CoinConverter";
import MovieList from "./routes/MovieList";
import Toggle from "./routes/Toggle";

function App() {
  return (
    <div>
      <Router>
        <Layout />
        <Route exact path="/" component={Home} />
        <Route path="/todolist" component={ToDoList} />
        <Route path="/cointracker" component={CoinTracker} />
        <Route path="/coinconverter" component={CoinConverter} />
        <Route path="/movielist" component={MovieList} />
        <Route path="/toggle" component={Toggle} />
      </Router>
    </div>
  );
}

export default App;