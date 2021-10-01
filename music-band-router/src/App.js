import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';

function App() {
  return (
    <div>
        <Router>
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
