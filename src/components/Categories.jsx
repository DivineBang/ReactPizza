import React from 'react';
import style from '../scss/Categories.module.scss';

function Categories({ activeComponent, onCategoryChange }) {
  const categories = [
    { label: 'Всі', value: 'all' },
    { label: 'Мясні', value: 'meat' },
    { label: 'Вегетаріанські', value: 'vegetarian' },
    { label: 'Гриль', value: 'grill' },
    { label: 'Кальцоне', value: 'calzone' },
  ];

  return (
    <ul className={style.menu}>
      {categories.map((category) => (
        <li
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`${style.menuItem} ${activeComponent === category.value ? style.active : ''}`}
        >
          {category.label}
        </li>
      ))}
    </ul>
  );
}

export default Categories;
