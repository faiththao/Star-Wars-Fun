import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Players from './components/Players';
import CreateCollection from './components/CreateCollection';

const characterAPI = "http://localhost:3001/results"

function App() {

  const [characters, setCharacters] = useState([]);
  const [charcterCollection, setCharcterCollection] = useState([]);

  useEffect(() => {
    fetch(characterAPI)
      .then(res => res.json())
      .then(data => setCharacters(data))
  }, [])

  function handleAddCharacter(characterToAdd) {
    const inCollection = charcterCollection.find(
      character => character.uid === characterToAdd.id
    );
    if (!inCollection) {
      setCharcterCollection([...charcterCollection, characterToAdd])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Switch>
          <Route path="/players">
            <Players characters={characters} />
          </Route>
          <Route path="/createplayer">
            <CreateCollection characters={characters} onAddCharacter={handleAddCharacter} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
