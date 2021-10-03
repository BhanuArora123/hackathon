import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import FormsMainComp from './Forms/FormsMainComp'

function Cards() {
  return (
    <div className='cards'>
      <h1>Input Symptoms</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <FormsMainComp></FormsMainComp>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
