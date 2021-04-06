import React from "react";
import { Container } from "@material-ui/core";
import './App.css';
import Header from "./components/Header/Header"
import SimpleBottomNavigation from "./components/BottomNavbar"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Trending from "./Pages/Trending/Trending"
import Movies from "./Pages/Movies/Movies"
import Search from "./Pages/Search/Search"
import Favourite from "./Pages/Favourite/Favourite"

function App() {

  const addFave = e => {

  }

  const onSearchMovies = e => {
    e.preventDefault();
    //  setSearchResult(e.target.value)
     console.log(e.target.value)
   }

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Switch>
              <Route path="/" component={Trending} exact />
              <Route path="/movies" component={Movies} />
              <Route path="/favourite" component={Favourite} addFave={addFave}/>
              <Route path="/search" component={Search} onSearchMovies={onSearchMovies}/>
            </Switch>
          </Container>


        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;
