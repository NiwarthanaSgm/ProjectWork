import './styles/app.css';
import Navbar from './components/SP-dashboard-component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SPdash from './Pages/SP-pages/SP-Dashboard';
import ProfileDetails from './components/SP-dashboard-component/ProfileDetails';
import Profile from './Pages/SP-pages/Profile';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Router>
        <div><Navbar/></div>
        <div className="content">
          <Switch>
            <Route exact path="/home"><Home/></Route>
            <Route path="/dashboard/serviceprovider"><SPdash/></Route>
            <Route path="/profile"><ProfileDetails/></Route>
            <Route path="/EditProfile"><Profile/></Route>
          </Switch></div>
      </Router>
    </>
  );
}

export default App;
