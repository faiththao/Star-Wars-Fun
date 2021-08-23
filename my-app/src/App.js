import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Players from './components/Players';
import CreatePlayer from './components/CreatePlayer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
        <Switch>
          <Route path="/players">
            <Players />
          </Route>
          <Route path="/create-player">
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
