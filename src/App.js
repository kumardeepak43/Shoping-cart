import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Switch, Route } from 'react-router-dom';
import Products from './Components/Products';
import { NavLink } from 'react-router-dom';
import Materials from './Components/Materials';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/products/id" Component={Materials} />
      </Switch>
    </>
  );
}

export default App;
