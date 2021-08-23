import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Players from './components/Players';
import CreatePlayer from './components/CreatePlayer';

const HerosAPI = "https://superheroapi.com/api/access-token"

function App() {

  const [heros, setHeros] = useState([]);

  let headers = 

  useEffect(() => {
    fetch(HerosAPI, {
      method : "no-cors" 
    })
      .then(res => res.json())
      .then(heros => console.log(heros))
  }, [])

  return (
    <div className="App">
      <header className="App-header">  
        <Navbar />
        <Switch>
          <Route path="/players">
            <Players />
          </Route>
          <Route path="/createplayer">
            <CreatePlayer />
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
