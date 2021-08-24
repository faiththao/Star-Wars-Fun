import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Players from './components/Players';
import CollectionPage from './components/CollectionPage'

const characterAPI = "http://localhost:3001/results"

function App() {

  const [characters, setCharacters] = useState([]);
  //const [collection, setCollection] = useState([]);
  // const [characterCollection, setCharacterCollection] = useState([]);

  useEffect(() => {
    fetch(characterAPI)
      .then(res => res.json())
      .then(data => setCharacters(data))
  }, [])


  // original -----------------------------------------------
  // function handleAddCharacter(characterToAdd) {
  //   const inCollection = characterCollection.find(
  //     character => character.uid === characterToAdd.id
  //   );
  //   if (!inCollection) {
  //     setCharacterCollection([...characterCollection, characterToAdd])
  //   }
  // }

  // function handleAddCharacter(characterToAdd) {
  //     const inCollection = characterCollection.find(
  //         character => character.uid === characterToAdd.uid
  //     );
  //     if (!inCollection) {
  //         setCharacterCollection([...characterCollection, characterToAdd])
  //     }
  // }

  // function handleRemoveCharacter(characterToRemove) {
  //     setCharacterCollection((characterCollection) => 
  //     characterCollection.filter((character) => 
  //     character.uid !== characterToRemove.uid))
  // }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Switch>
          {/* <Route path="/players">
            <Players 
            characters={characters} onAdd={handleAddCharacter}
             />
          </Route> */}
          <Route path="/createplayer">
            <CollectionPage
            characters={characters} 
            setCharacters={setCharacters}
            // collection={characterCollection} 
            // onRemove={handleRemoveCharacter} 
            // onAdd={handleAddCharacter}
            />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

// original code // -------------------------------------------------------------
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <Navbar />
  //         <Switch>
  //           <Route path="/players">
  //             <Players characters={characters}  onAddCharacter={handleAddCharacter}/>
  //           </Route>
  //           <Route path="/createplayer">
  //             <CreateCollection chararcters={characters} onAddCharacter={handleAddCharacter} />
  //           </Route>
  //           <Route exact path="/">
  //             <Home />
  //           </Route>
  //         </Switch>
  //       </header>
  //     </div>
  //   );
  // }

export default App;
