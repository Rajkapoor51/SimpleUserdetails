import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";
import Navbar from './sidemenu/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OtherUserList from "./OtherUserList";
import MyProfile from "./MyProfile";
import Signin from "./components/signin";
import Signup from "./components/signup";


function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ?  <Dashboard/> : <Auth/>} </>}
      <Router>
        <Switch>
        <Route exact path='/'>
        <Navbar/>
        </Route>
          <Route path='/myProfile' component={MyProfile} />
          <Route path='/otherUserList' component={OtherUserList} />
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
