import React, { useState } from 'react';
import Categories from '../components/Categories';
import Card from '../components/Card';
import CardMeat from '../components/CardMeat';
import Sort from '../components/Sort'

export const Home = () => {
    
  const [activeComponent, setActiveComponent] = useState('all');
  
  const handleCategoryChange = (category) => {
    setActiveComponent(category);
  };
  return (
    <div className='home'>
      <div className='container'>
        <div className='home__wrapp'>
          <Categories activeComponent={activeComponent}  onCategoryChange={handleCategoryChange} />
          <Sort/>
        </div>

        <h1 className='home__title'>
            {activeComponent === 'all' && 'Всі '  }
            {activeComponent === 'meat' && 'Мясні '  }
            {activeComponent === 'vegetarian' && 'Вегетаріанські '  } 
            {activeComponent === 'grill' && 'Гриль '  } 
            {activeComponent === 'calzone' && 'Кальцоне '  } 
            піци
        </h1>

        <div className="home__set">
            {activeComponent === 'all' && 


                <Card />

            }
            {activeComponent === 'meat' && <CardMeat />}
            {activeComponent === 'vegetarian' && <CardMeat />}
            {activeComponent === 'grill' && <CardMeat />}
            {activeComponent === 'calzone' && <CardMeat />}
           
        </div>
      
      </div>
    </div>
  );
};

export default Home;
