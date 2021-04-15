import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './component/Signup';
import Doctor from './component/Doctor';

function App() {
  return (
    <div>
      
      <Router>
          <Switch>
            <Route exact path="/doctor" component={Doctor} />
          </Switch>
      </Router>
       <Signup />
       
    </div>
  );
}

export default App;
