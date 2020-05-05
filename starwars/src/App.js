import React, { useState, useEffect } from 'react';
import './App.css';
import CharacterPost from './components/CharacterPost';
import { Button } from 'reactstrap';





const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [count, setCount] = useState(0);



  return (
    <div className="App">

      <h1 className="Header">RICK AND MORTY ADVENTURES</h1>

      <CharacterPost/> 

    </div>
  );
}

export default App;