import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Pages 
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Profile from './pages/Profile';
import Loan from './pages/CreateLoan';

// Custom Hooks
import { UserContext } from './hooks/UserContext';
import useFindUser from './hooks/useFindUser';

// Custom Routes
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  // Fetches the user based on the HTTP only cookie
  const [user, setUser, loading] = useFindUser();

  return (
      <UserContext.Provider value = {{ user, setUser, loading }}>
        <div className="App">
          <Router>
            <Switch>
              <PublicRoute exact path="/" component={Home}/>
              <PublicRoute exact path="/login" component={Login}/>
              <PublicRoute exact path="/signup" component={SignUp}/>
              <PrivateRoute exact path="/profile" component={Profile}/>
              <PrivateRoute exact path="/new/loan" component={Loan}/>
            </Switch>
          </Router>
        </div>
      </UserContext.Provider>
  );
}

export default App;
