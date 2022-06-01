import './App.css';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import ProfileDetails from '../components/ProfileDetails';
import Profile from '../Pages/Profile';

function App() {
  return (
    <>
      <Router>
        <div><Navbar/></div>
        <div className="content">
          <Switch>
            <Route exact path="/dashboard"><Home/></Route>
            <Route path="/profile"><ProfileDetails/></Route>
            <Route path="/EditProfile"><Profile/></Route>
          </Switch></div>
      </Router>
    </>
  );
}

export default App;
