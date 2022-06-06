import './styles/app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SPdash from './Pages/SP-pages/SP-Dashboard';
import Profile from './Pages/SP-pages/Profile';
import FullProfile from './Pages/SP-pages/SP-FullProfile';
import Home from './Pages/Home';
import CustomerDashboard from './Pages/customer-pages/Customer-Dashboard';
import CustomerEditProfile from './Pages/customer-pages/Cus-FullProfile';
import CustomerProfile from './Pages/customer-pages/CustomerProfile';

function App() {
  return (
    <>
      <Router>
        <div className="content">
          <Switch>
            <Route exact path="/home"><Home/></Route>
            <Route path="/dashboard/serviceprovider"><SPdash/></Route>
            <Route path="/serviceprovider/profile"><Profile/></Route>
            <Route path="/serviceprovider/EditProfile"><FullProfile/></Route>
            <Route path="/dashboard/customer"><CustomerDashboard/></Route>
            <Route path="/customer/EditProfile"><CustomerEditProfile/></Route>
            <Route path="/customer/profile"><CustomerProfile/></Route>
          </Switch></div>
      </Router>
    </>
  );
}

export default App;
