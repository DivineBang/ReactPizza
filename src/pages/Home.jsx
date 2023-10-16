import React, { useState, useEffect }  from 'react';
import Categories from '../components/Categories';
import Card from '../components/TypeCards/Card';
import CardMeat from '../components/TypeCards/CardMeat';
import Sort from '../components/Sort'

export const Home = () => {
    
  /* Активные елементы в катигориях */
  const [activeComponent, setActiveComponent] = useState('all');
  
    const handleCategoryChange = (category) => {
      setActiveComponent(category);
    };

    const categoryTitle = {
      all: 'Всі ',
      meat: 'Мясні ',
      vegetarian: 'Вегетаріанські ',
      grill: 'Гриль ',
      calzone: 'Кальцоне ',
    };

  /* С помощью метода fetch витаскиваем обект из этого API и с помощью метода .map перебираем <Card />  */

  const [cards, setCards] = useState([]);

    useEffect(() => {
      fetch('https://652d1c1df9afa8ef4b26cba1.mockapi.io/allCards')
        .then(response => response.json())
        .then(data => setCards(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []); 


  // Добавляем состояние для выбранной сортировки
  const [sortOption, setSortOption] = useState('ціні'); 

    const handleSortChange = (option) => {
      setSortOption(option); // Обновляем выбранную сортировку
    };

    const sortedCards = [...cards].sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
    
      if (sortOption === 'ціні') {
        return a.price - b.price;
      } else if (sortOption === 'алфавіту') {
        return titleA.localeCompare(titleB, 'uk-UA', { sensitivity: 'base' });
      }
    
      return 0;
    });
  return (

    <div className='home'>
      <div className='container'>
        <div className='home__wrapp'>
          <Categories activeComponent={activeComponent}  onCategoryChange={handleCategoryChange} />
          <Sort onSortChange={handleSortChange}/>
        </div>

        <h1 className='home__title'>
          {categoryTitle[activeComponent]}піци
        </h1>

        <div className="home__set">
          {activeComponent === 'all' &&
            sortedCards.map((cardData) => <Card key={cardData.id} {...cardData} />)}
          {activeComponent === 'meat' && <CardMeat />}
          {activeComponent === 'vegetarian' && <CardMeat />}
          {activeComponent === 'grill' && <CardMeat />}
          {activeComponent === 'calzone' && <CardMeat />}
        </div>

  
      </div>
    </div>
  );
}


