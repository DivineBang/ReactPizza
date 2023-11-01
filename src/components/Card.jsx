import React, { useState } from 'react';
import style from '../scss/Card.module.scss';



function Card({ img,price,title,addCard }) {
  const [activeBord, setActiveBord] = useState(true);
  const [activeSize, setActiveSize] = useState('26');

  const handleBordClick = () => {
    setActiveBord(!activeBord);
  };

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };


  return (
    <div  className={style.card}>
      <div className={style.card__wrapp}>
        <img src={img} alt="pizza" />
        <h3 className={style.title}>{title}</h3>
        <div className={style.group}>
          <ul className={style.board}>
            <li className={activeBord ? style.active : ''} onClick={handleBordClick}>
              Звичайний бортик
            </li>
            <li className={activeBord ? '' : style.active} onClick={handleBordClick}>
              Сирний бортик
            </li>
          </ul>
          <ul className={style.sm}>
            <li className={activeSize === '26' ? style.active : '' } onClick={() => handleSizeClick('26')}>
              26 см
            </li>
            <li className={activeSize === '30' ? style.active : ''} onClick={() => handleSizeClick('30')}>
              30 см
            </li>
            <li className={activeSize === '40' ? style.active : ''} onClick={() => handleSizeClick('40')}>
              40 см
            </li>
          </ul>
        </div>
        <div className={style.set}>
          <p className={style.price}>{price} ₴</p>
          <button className={style.btn} onClick={() => addCard({ title , price, img})}>
            <p>+ Додати</p>
            
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
