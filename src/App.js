import './styles/app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SPdash from './Pages/SP-pages/SP-Dashboard';
import Profile from './Pages/SP-pages/Profile';
import FullProfile from './Pages/SP-pages/FullProfile';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Router>
        <div className="content">
          <Switch>
            <Route exact path="/home"><Home/></Route>
            <Route path="/dashboard/serviceprovider"><SPdash/></Route>
            <Route path="/profile"><Profile/></Route>
            <Route path="/EditProfile"><FullProfile/></Route>
          </Switch></div>
      </Router>
    </>
  );
}

export default App;
