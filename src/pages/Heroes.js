import {useState,useEffect} from 'react';
import HeroCardComponent from '../components/HeroCardComponent.js'
import {heroData} from '../data/heroes.js';
import {Link} from 'react-router-dom';

const HeroesPage=()=>{
  const [heroes,setHeroes]=useState([]);
  const[alert,setAlert]=useState(false)
  // console.log(heroData);
  useEffect(()=>{
    setHeroes(heroData);
  },[alert]);

  const updateFeatured=(heroId)=>{
    //first find the hero from heroData by hero Id
    let foundHero=heroData.find(hero=>hero.id===+heroId);
    //updated foundHero.featured to be opposite of its current value
    foundHero.featured=!foundHero.featured;
    
    setAlert(true);
    setTimeout(()=>{
      setAlert(false);
    },2000)
    console.log(foundHero);

  }
  return(
    <div id='heroes'>
     <div className='row text-center mt-3'>
        <div className='col'>
          <h2>View our Hero Database</h2>
          
        </div>
      </div>
      <div className='row'>
        {heroes.map((hero)=>{
          return(
            <div className='col-sm-12 col-md-3' >
              <HeroCardComponent 
              hero={hero}
              updateFeatured={updateFeatured}
              />
            </div>
          )
        })}

      </div>
      {/* <ul>
        {heroes.map((hero,index)=>{
          return(
          <li key={hero.id}>
           <Link to={`/heroes/${hero.id}`}>  {hero.superhero} </Link>
          </li>);
        })}
      </ul> */}
    </div>
  )
}

export default HeroesPage;