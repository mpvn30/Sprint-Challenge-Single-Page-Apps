import React from "react";
import CharacterList from "./components/CharacterList"
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

export default function App() {
  
  return (
    <main>
      <Header />
      <SearchForm />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </main>
  );
}
