import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Loan from './pages/CreateLoan';
import Applied from './pages/Applied';

// Custom Hooks
import { UserContext } from './hooks/UserContext';
import useFindUser from './hooks/useFindUser';

// Custom Routes
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

//assets
import { ReactComponent as Pic } from './assets/home.svg';

function App() {

  const [user, setUser, loading] = useFindUser();

  return (
    <UserContext.Provider value = {{ user, setUser, loading }}>
      <div className="App">
        <Pic/>
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props}/>}/>
            <PublicRoute exact path="/login" component={Login}/>
            <PublicRoute exact path="/signup" component={SignUp}/>
            <PrivateRoute exact path="/loan" component={Loan}/>
            <PrivateRoute exact path="/applied"component={Applied}/>
          </Switch>
          </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
