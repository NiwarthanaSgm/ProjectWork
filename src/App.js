import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SPdash from './Pages/SP_pages/SPDashboard';
import Profile from './Pages/SP_pages/Profile';
import FullProfile from './Pages/SP_pages/SPFullProfile';
import Home from './Pages/Home';
//import Navbar from './components/SP_DashboardComponent/Navbar'
import CustomerDashboard from './Pages/customer_pages/CustomerDashboard';
import CustomerEditProfile from './Pages/customer_pages/CusFullProfile';
import CustomerProfile from './Pages/customer_pages/CustomerProfile';
import createGig from './components/SP_DashboardComponent/createGig';

function App() {
  return (
    <>
      <Router>
        {/* <div><Navbar/></div> */}
        <div className="content">
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/dashboard/serviceprovider"><SPdash/></Route>
            <Route path="/serviceprovider/profile"><Profile/></Route>
            <Route path="/serviceprovider/EditProfile"><FullProfile/></Route>
            <Route path="/dashboard/customer"><CustomerDashboard/></Route>
            <Route path="/customer/EditProfile"><CustomerEditProfile/></Route>
            <Route path="/customer/profile"><CustomerProfile/></Route> 
            <Route path={"/create Gig"} exact component={createGig} />
          </Switch></div>
      </Router>
    </>
  );
}

export default App;
