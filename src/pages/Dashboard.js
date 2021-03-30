import { useEffect, useState } from 'react';
import { heroData } from '../data/heroes';
import {HeroCardComponent} from '../components/HeroCardComponent.js';
import '../App.css';

const DashboardPage = () => {
  const [heroes, setHeroes] = useState([]);
  const [alert,setAlert]=useState(false);
  // console.log(heroData);s
  useEffect(() => {
    let featured = heroData.filter(hero => hero.featured);
    // console.log(featured);
    setHeroes(featured);
  }, [alert]);
  const updateFeatured=(heroId)=>{
    //first find the hero from heroData by hero Id
    let foundHero=heroData.find(hero=>hero.id===+heroId);
    //updated foundHero.featured to be opposite of its current value
    foundHero.featured=!foundHero.featured;
    showAlert();
    
    // console.log(foundHero);

  }
  const showAlert=()=>{
    setAlert(true);
    setTimeout(()=>{
      setAlert(false);
    },2000)
  }
  return (
    <div id='dashboard-page'>
      <div className='row text-center mt-3'>
        <div className='col'>
          <h2>Welcome to the tour of Heroes!</h2>
          <h4 className='text-secondary'>Featured Heroes</h4>
        </div>
      </div>
      <div className='row'>
      {heroes.map((hero, index) => {
          return (
            <div className='col-sm-12 col-md-3' key={hero.id}>
              <HeroCardComponent
              hero={hero}
              updateFeatured={updateFeatured}/>
            </div>
            
          );
        })}
    </div>
      {/* <div > */}
        {/* <HeroCardComponent 
        heroes={heroes}
        updateFeatured={updateFeatured}/> */}
      {/* </div> */}
    </div>
  );
};
export default DashboardPage;