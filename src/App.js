
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import AppRouter from './routers/AppRouter.js'

const App=()=> {
  
  return (
    <Router>
      <AppRouter/>
    </Router>
  );
}

export default App;
