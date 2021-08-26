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
  const [inCommentBox, setInCommentBox] = useState([])

  function addComment(id) {
    fetch(`http://localhost:3001/results/${id}`, {
        method: "PATCH",
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(),
    })
        .then((res) => res.json())
        .then((comment) => setInCommentBox([comment, ...inCommentBox]));
  }

  function addNewCharacter(character) {
    fetch(characterAPI, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-type": "application/json"
      },
      body: JSON.stringify(character),
    })
    .then(res => res.json())
    .then(character => setCharacters([character, ...characters]))
  }

  useEffect(() => {
    fetch(characterAPI)
      .then(res => res.json())
      .then(data => setCharacters(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Switch>
          <Route path="/players">
            <Players 
            characters={characters}
            inCommentBox={inCommentBox}
            addComment={addComment}
             />
          </Route>
          <Route path="/createplayer">
            <CollectionPage
            characters={characters} 
            setCharacters={setCharacters}
            addCharacter={addNewCharacter}
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
