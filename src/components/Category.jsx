import React from 'react';
import './category.scss';
import dog from '../images/dog-category.png';
import cat from '../images/cat-category.png';
import bird from '../images/bird-category.png';
import rabbit from '../images/rabbit-category.png'
import { Link } from 'react-router-dom';

export default function Category() {
  return (
    <div className='animals-category'>
        <div className="animal-category">
        <Link to={'/dogs'} className="animal">
            <img src={dog} alt="dog" />
            <div className='name'>
                <h2>سگ</h2>
            </div>
        </Link>
        <Link to={'/cats'} className="animal">
            <img src={cat} alt="cat" />
            <div className='name'>
                <h2>گربه</h2>
            </div>
        </Link>
        <Link to={'/birds'} className="animal">
            <img src={bird} alt="bird" />
            <div className='name'>
                <h2>پرنده</h2>
            </div>
        </Link>
        <Link to={'/rabbits'} className="animal">
            <img src={rabbit} alt="rabbit" />
            <div className='name'>
                <h2>جونده</h2>
            </div>
        </Link>
        </div>
    </div>
  )
}
