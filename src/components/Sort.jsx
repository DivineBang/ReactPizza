import React, { useState } from 'react';
import style from '../scss/Sort.module.scss';

const options = [
  { label: 'Ціні', value: 'ціні' },
  { label: 'Алфавіту', value: 'алфавіту' },
];

function Sort({ onSortChange }) {
  const [selectedOption, setSelectedOption] = useState('ціні');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSortChange(option); // Вызываем колбэк при изменении параметра
  };

  return (
    <div className={style.sort}>
      Сортування по: <span className={style.hoverText}>{selectedOption}</span>
      <ul className={style.dropdown}>
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => handleOptionClick(option.value)}
            className={selectedOption === option.value ? style.active : ''}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sort;
