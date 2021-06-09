import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>Radhe Krishna</h1> */}
      <Router>
      <Header/>
        <Switch>

          <Route exact path="/">
          <Login />
          </Route>

           <Route exact path="/home">
             <Home/>
           </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
