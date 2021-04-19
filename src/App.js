import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import AlertMsg from "./components/AlertMsg";
import HomePage from "./movies/Homepage"
import SingleMoviePage from './movies/SingleMoviePage';
import NavigationBar from './components/NavigationBar';
import MovieFillterPage from './movies/MovieFillterPage';
import SearchPage from './movies/SearchPage';

function App() {
  const [keyword, setKeyword] = useState("");
  const handleSearch = (event)=>{
    event.preventDefault()
    console.log(event.target.value)
    setKeyword(event.target.value)
  }
  
  return (
  <Router>
    <NavigationBar handleSearch={handleSearch}  />
    <AlertMsg/>
    <Switch>
      <Route  path="/" exact component={HomePage} />
      <Route  path="/movies/:id" exact component={SingleMoviePage} />
      <Route  path="/movies/" exact component={MovieFillterPage} />
      <Route  path="/search" component={()=><SearchPage keyword={keyword} />} />
    </Switch>
  </Router>
  );
}

export default App;
