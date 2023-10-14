import React, { useState } from 'react';
import style from '../scss/Sort.module.scss';

function Sort() {
  const [selectedOption, setSelectedOption] = useState('ціні');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={style.sort}>
      Сортування по: <span className={style.hoverText}>{selectedOption}</span>
      <ul className={style.dropdown}>
      <li
        onClick={() => handleOptionClick('ціні')}
        className={selectedOption === 'Ціні' ? style.active : ''}
      >
        Ціні
      </li>
      <li
        onClick={() => handleOptionClick('популярності')}
        className={selectedOption === 'Популярності' ? style.active : ''}
      >
        Популярності
      </li>
      <li
        onClick={() => handleOptionClick('акціям')}
        className={selectedOption === 'Акціям' ? style.active : ''}
      >
        Акціям
      </li>

      </ul>
    </div>
  );
}

export default Sort;
