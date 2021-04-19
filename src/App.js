import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AlertMsg from "./components/AlertMsg";
import HomePage from "./movies/Homepage"
import MovieDetailPage from "./movies/MovieDetailPage"
import SingleMoviePage from './movies/SingleMoviePage';
import NavigationBar from './components/NavigationBar';
import MovieFillterPage from './movies/MovieFillterPage';

function App() {
  return (
  <Router>
    <NavigationBar/>
    <AlertMsg/>
    <Switch>
      <Route  path="/" exact component={HomePage} />
      <Route  path="/movies/:id" exact component={SingleMoviePage} />
      <Route  path="/movies/" exact component={MovieFillterPage} />
    </Switch>
  </Router>
  );
}

export default App;
