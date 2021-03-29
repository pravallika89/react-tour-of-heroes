import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {heroData} from '../data/heroes.js'

const HeroPage=()=>{
  let {heroId}=useParams();
  const [hero,setHero]=useState({});
  // console.log('This is param object from hero page!',heroId);
  useEffect(()=>{
    let foundHero=heroData.find(h=>h.id===+heroId);
    // console.log(foundHero);
    setHero(foundHero);
  },[]);
  return(
    <div id='hero'>
      <h2>This is where {hero.superhero} lives!</h2>
    </div>
  );
};

export default HeroPage;