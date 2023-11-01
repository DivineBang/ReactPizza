import React, { useState, useEffect , useContext} from 'react';
import style from '../scss/Cart.module.scss'
import {Link} from 'react-router-dom'

import AppContext from '../context';


export const Cart = () => {
  
  //контектс 
  const { cartItems, deleteFromCart } = useContext(AppContext);
  const [cartData, setCartData] = useState(cartItems); // Используйте state для отслеживания изменений

  useEffect(() => {
    setCartData(cartItems); // Обновите состояние, когда данные в контексте меняются
  }, [cartItems]);

  const handleDelete = (itemId) => {
    deleteFromCart(itemId); // Удалите элемент из контекста
    setCartData(cartData.filter(item => item.id !== itemId)); // Удалите элемент из состояния
  };

  return (
    <div className={style.cart}>
      <div className="container">
        <div className={style.cart__set}>
          
            <div className={style.trash}>

              <div className={style.trashCart}>
                <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.997 3.496C2.997 3.36339 3.04968 3.23622 3.14345 3.14245C3.23722 3.04868 3.36439 2.996 3.497 2.996H3.935C4.662 2.996 5.08 3.469 5.322 3.941C5.487 4.264 5.606 4.658 5.705 5H16C16.1545 5.00005 16.3069 5.0359 16.4453 5.10475C16.5836 5.17359 16.7041 5.27356 16.7973 5.3968C16.8905 5.52004 16.9539 5.6632 16.9825 5.81505C17.011 5.9669 17.004 6.12331 16.962 6.272L15.466 11.547C15.347 11.9655 15.0948 12.3338 14.7476 12.596C14.4003 12.8582 13.9771 13.0001 13.542 13H8.463C8.02428 13.0002 7.59768 12.856 7.24892 12.5899C6.90016 12.3237 6.64861 11.9502 6.533 11.527L5.891 9.172C5.88732 9.16145 5.88399 9.15077 5.881 9.14L4.85 5.643L4.75 5.306C4.65 4.96 4.562 4.654 4.43 4.397C4.271 4.087 4.125 3.997 3.934 3.997H3.496C3.36339 3.997 3.23622 3.94432 3.14245 3.85056C3.04868 3.75679 2.996 3.62961 2.996 3.497L2.997 3.496ZM6.845 8.87L7.498 11.266C7.5559 11.4775 7.68172 11.6641 7.85608 11.7971C8.03045 11.9301 8.24371 12.0021 8.463 12.002H13.543C13.7604 12.0018 13.9719 11.9307 14.1453 11.7995C14.3187 11.6683 14.4446 11.4842 14.504 11.275L16 6H6L6.845 8.87ZM10 15.499C10 15.8968 9.84197 16.2784 9.56066 16.5597C9.27936 16.841 8.89783 16.999 8.5 16.999C8.10218 16.999 7.72065 16.841 7.43934 16.5597C7.15804 16.2784 7 15.8968 7 15.499C7 15.1012 7.15804 14.7196 7.43934 14.4383C7.72065 14.157 8.10218 13.999 8.5 13.999C8.89783 13.999 9.27936 14.157 9.56066 14.4383C9.84197 14.7196 10 15.1012 10 15.499ZM9 15.499C9 15.3664 8.94732 15.2392 8.85356 15.1454C8.75979 15.0517 8.63261 14.999 8.5 14.999C8.36739 14.999 8.24022 15.0517 8.14645 15.1454C8.05268 15.2392 8 15.3664 8 15.499C8 15.6316 8.05268 15.7588 8.14645 15.8526C8.24022 15.9463 8.36739 15.999 8.5 15.999C8.63261 15.999 8.75979 15.9463 8.85356 15.8526C8.94732 15.7588 9 15.6316 9 15.499ZM15 15.499C15 15.8968 14.842 16.2784 14.5607 16.5597C14.2794 16.841 13.8978 16.999 13.5 16.999C13.1022 16.999 12.7206 16.841 12.4393 16.5597C12.158 16.2784 12 15.8968 12 15.499C12 15.1012 12.158 14.7196 12.4393 14.4383C12.7206 14.157 13.1022 13.999 13.5 13.999C13.8978 13.999 14.2794 14.157 14.5607 14.4383C14.842 14.7196 15 15.1012 15 15.499ZM14 15.499C14 15.3664 13.9473 15.2392 13.8536 15.1454C13.7598 15.0517 13.6326 14.999 13.5 14.999C13.3674 14.999 13.2402 15.0517 13.1464 15.1454C13.0527 15.2392 13 15.3664 13 15.499C13 15.6316 13.0527 15.7588 13.1464 15.8526C13.2402 15.9463 13.3674 15.999 13.5 15.999C13.6326 15.999 13.7598 15.9463 13.8536 15.8526C13.9473 15.7588 14 15.6316 14 15.499Z" fill="black"/>
                </svg>
                <h1>
                  Корзина
                </h1>

              </div>
              <div className={style.trashBox}>
                <img src='./img/trash.svg' alt="trash" />
                <p>Очистити кошик</p>
              </div>

            </div>
            {
             cartItems.length > 0 ?      
            (
              <div className={style.pizzaSet}>
              {cartItems.map((cardInCart) =>(
                    <div key={cardInCart.id}  className={style.pizzaWrapp} >
                      <div className={style.pizzas}>
                        <div className={style.pizzaImg}>
                          <img src={cardInCart.img} alt="" />
                        </div>
                        <div className={style.pizzaInfo}>
                          <h2>
                            {cardInCart.title}
                          </h2>
                          <p>Звичайний бортик, 26 см</p>
                        </div>
                      </div>
      
                      <div className={style.pizzaQuantity}>
                        <div className={style.pizzaMinus} >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.23804 10H14.7618" stroke="#FF7A00" strokeWidth="0.952381" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p>0</p>
                        <div className={style.pizzaPlus} >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 10.5C4.86739 10.5 4.74021 10.4473 4.64645 10.3536C4.55268 10.2598 4.5 10.1326 4.5 10C4.5 9.86739 4.55268 9.74021 4.64645 9.64645C4.74021 9.55268 4.86739 9.5 5 9.5H15C15.1326 9.5 15.2598 9.55268 15.3536 9.64645C15.4473 9.74021 15.5 9.86739 15.5 10C15.5 10.1326 15.4473 10.2598 15.3536 10.3536C15.2598 10.4473 15.1326 10.5 15 10.5H5Z" fill="#FF7A00"/>
                            <path d="M9.5 5C9.5 4.86739 9.55268 4.74021 9.64645 4.64645C9.74021 4.55268 9.86739 4.5 10 4.5C10.1326 4.5 10.2598 4.55268 10.3536 4.64645C10.4473 4.74021 10.5 4.86739 10.5 5V15C10.5 15.1326 10.4473 15.2598 10.3536 15.3536C10.2598 15.4473 10.1326 15.5 10 15.5C9.86739 15.5 9.74021 15.4473 9.64645 15.3536C9.55268 15.2598 9.5 15.1326 9.5 15V5Z" fill="#FF7A00"/>
                          </svg>
                        </div>
                      </div>
      
                      <span>
                        {cardInCart.price} 
                      </span>
      
                      <div onClick={() => handleDelete(cardInCart.id)} className={style.close}>
                        <img src="./img/close-30.svg" alt="" />
                      </div>
      
                    </div>                      

                )) 
              }  
            </div> 
            ) : (

            <div className={style.pizzaSet}>
              <h2>
                Корзина порожня
              </h2>
              <p>
                Додайте хочаб один товар...
              </p>
             
            </div>)

          }
              
               
            
            
            <div className={style.result}>
          
              <div className={style.resultLeft}>

                <h3>Кількість піцц :<span> 4 </span> </h3>
                <Link to={'/'}>
                  <button className={style.resultBtn}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 10L8.75 16.25L9.63125 15.3688L4.89375 10.625L17.5 10.625L17.5 9.375L4.89375 9.375L9.63125 4.63125L8.75 3.75L2.5 10Z" fill="#BCBCBC"/>
                    </svg>
                    <p>Повернутись назад</p>
                  </button>
                </Link> 
              </div>             
          
              <div className={style.resultRight}>

                <h3> До сплати: <span> 758 ₴ </span></h3>
                <button className={style.payBtn}>
                  Оплатити зараз
                </button>
              
              </div>
             
            </div>
        </div>
      </div>
    </div>
  )
}
