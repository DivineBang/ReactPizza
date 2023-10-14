import React from 'react';
import style from "../scss/Categories.module.scss";

function Categories({ activeComponent, onCategoryChange }) {
  const isAllActive = activeComponent === 'all';
  const isMeatActive = activeComponent === 'meat';
  const isVegetarianActive = activeComponent === 'vegetarian';
  const isGrillianActive = activeComponent === 'grill';
  const isCalzoneActive = activeComponent === 'calzone';  
  return (
    <ul className={style.menu}>
      <li
        onClick={() => onCategoryChange('all')}
        className={`${style.menuItem} ${isAllActive ? style.active : ''}`}
       
      >
        Всі
      </li>
      <li
        onClick={() => onCategoryChange('meat')}
        className={`${style.menuItem} ${isMeatActive ? style.active : ''}`}
       
      >
        Мясні
      </li>
      <li
        onClick={() => onCategoryChange('vegetarian')}
        className={`${style.menuItem} ${isVegetarianActive ? style.active : ''}`}
       
      >
        Вегетаріанські
      </li>
      <li
        onClick={() => onCategoryChange('grill')}
        className={`${style.menuItem} ${isGrillianActive ? style.active : ''}`}
       
      >
        Гриль
      </li>
      <li
        onClick={() => onCategoryChange('calzone')}
        className={`${style.menuItem} ${isCalzoneActive ? style.active : ''}`}
       
      >
        Кальцоне
      </li>
    </ul>
  );
}

export default Categories;
