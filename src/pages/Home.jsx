import React, { useState, useEffect } from 'react';
import Categories from '../components/Categories';
import Card from '../components/Card';
import Sort from '../components/Sort';

import pizzasMeat from '../assets/pizzas/pizzasMeat.json';
import pizzasVegetarian from '../assets/pizzas/pizzasVegetarian.json';
import pizzasGrill from '../assets/pizzas/pizzasGrill.json';
import pizzasCalzone from '../assets/pizzas/pizzasCalzone.json';


export const Home = () => {
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

  const [pizzasAll, setPizzasAll] = useState([]);

  useEffect(() => {
    // Используем метод fetch для получения данных о пицце с сервера
    fetch('https://652d1c1df9afa8ef4b26cba1.mockapi.io/allCards')
      .then(response => response.json())
      .then(data => setPizzasAll(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Общая функция для сортировки пицц

  const [sortOption, setSortOption] = useState('ціні');

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const sortPizzas = (pizzas) => {
    return [...pizzas].sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (sortOption === 'ціні') {
        return a.price - b.price;
      } else if (sortOption === 'алфавіту') {
        return titleA.localeCompare(titleB, 'uk-UA', { sensitivity: 'base' });
      }

      return 0;
    });
  };


  // Используем функцию sortPizzas для сортировки пицц разных категорий
  const sortedPizzasAll = sortPizzas(pizzasAll);
  const sortedPizzasMeat = sortPizzas(pizzasMeat);
  const sortedPizzasVegetarian = sortPizzas(pizzasVegetarian);
  const sortedPizzasGrill = sortPizzas(pizzasGrill);
  const sortedPizzasCalzone = sortPizzas(pizzasCalzone);

  return (
    <div className='home'>
      <div className='container'>
        <div className='home__wrapp'>
          <Categories activeComponent={activeComponent} onCategoryChange={handleCategoryChange} />
          <Sort onSortChange={handleSortChange} />
        </div>

        <h1 className='home__title'>
          {categoryTitle[activeComponent]}піци
        </h1>

        <div className="home__set">
          {activeComponent === 'all' &&
            sortedPizzasAll.map((cardData) => <Card key={cardData.id} {...cardData} />)}
          {activeComponent === 'meat' &&
            sortedPizzasMeat.map((cardData) => <Card key={cardData.id} {...cardData} />)}
          {activeComponent === 'vegetarian' &&
            sortedPizzasVegetarian.map((cardData) => <Card key={cardData.id} {...cardData} />)}
          {activeComponent === 'grill' &&
            sortedPizzasGrill.map((cardData) => <Card key={cardData.id} {...cardData} />)}
          {activeComponent === 'calzone' &&
            sortedPizzasCalzone.map((cardData) => <Card key={cardData.id} {...cardData} />)}
        </div>
      </div>
    </div>
  );
}
