import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { GiBatMask } from 'react-icons/gi';
// import '../App.css';

  export const HeroCardComponent =({hero,updateFeatured})=>{
  return(
    <div className='card mb-3'>
    {/* header */}
    <div className='card-header text-center'>{hero.publisher}</div>
    {/* image */}
    <div className='th-card-bg-img' style={{backgroundImage:`url(${hero.image_url})`}}></div>
    {/* <img
      src={hero.image_url}
      alt={hero.superhero}
      className='card-img-top'
    /> */}
    {/* body */}
    <div className='card-body'>
      <h4 className='card-title'>
        {hero.superhero === 'Batman' ? <GiBatMask /> : ''}{' '}
        {hero.superhero}
      </h4>
      <h6 className='text-secondary'>"{hero.alter_ego}"</h6>
      <div className='my-2'>
        <strong>First Appearance: </strong>
        {hero.first_appearance}
      </div>
      <div className='my-2'>
        <strong>Characters: </strong>
        {hero.characters.map((character, i) => {
          return (
            <small key={i}>
              {character}
              {i === hero.characters.length - 1 ? '' : ', '}
            </small>
          );
        })}
      </div>
      <div className='my-2 d-flex justify-content-between'>
        <Link to={`/heroes/${hero.id}`} className='card-link'>
          View Details
        </Link>
        <a href='javascript:void(0)' className='card-link'
        onClick={()=>updateFeatured(hero.id)}>
          {hero.featured ? <FaStar /> : <FaRegStar />}
        </a>
      </div>
    </div>
    {/* links */}
  </div>

  )
   
}

export default HeroCardComponent;