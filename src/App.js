import "./App.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import Profile from "./components/Profile";
import CreateGig from "./components/CreateGig";

function App() {
  return (
    <>
    <Router>
    <div><Navbar/></div>
        <div className="content">
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/profile"><Profile/></Route>
          <Route path="/create Gig"><CreateGig/></Route>
        </Switch></div>
    </Router> 
    </>
  );
}

export default App;