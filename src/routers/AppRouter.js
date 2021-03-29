import {Route,Switch} from 'react-router-dom';
import DashboardPage from '../pages/Dashboard.js';
import HeroesPage from '../pages/Heroes.js';
import HeroPage from '../pages/Hero.js';
import Navbar from '../components/Navbar.js'

const AppRouter=()=>{
  return(
    <div >
      <Navbar/>
      <div className='container'>
        <Switch>
          <Route path='/' exact component={DashboardPage}/>
          <Route path='/heroes' exact  component={HeroesPage}/>
          <Route path='/heroes/:heroId'  component={HeroPage}/>
        </Switch>
      </div>
    </div>
  )
}

export default AppRouter;