import React, { useState } from 'react';
import './Dashboard.css';

const Addto = () => {
  const [isActive, setIsActive] = useState(false);
  const [listCards, setListCards] = useState([]);
  const products = [
    {
      id: 1,
      name: 'PRODUCT NAME 1',
      image: '1.PNG',
      price: 120000
    },
    {
      id: 2,
      name: 'PRODUCT NAME 2',
      image: '2.PNG',
      price: 120000
    },
    {
      id: 3,
      name: 'PRODUCT NAME 3',
      image: '3.PNG',
      price: 220000
    },
    {
      id: 4,
      name: 'PRODUCT NAME 4',
      image: '4.PNG',
      price: 123000
    },
    {
      id: 5,
      name: 'PRODUCT NAME 5',
      image: '5.PNG',
      price: 320000
    },
    {
      id: 6,
      name: 'PRODUCT NAME 6',
      image: '6.PNG',
      price: 120000
    }
  ];

  const openShopping = () => {
    setIsActive(true);
  };

  const closeShopping = () => {
    setIsActive(false);
  };

  const addToCard = (key) => {
    const newCard = { ...products[key], quantity: 1 };
    const updatedListCards = [...listCards];
    updatedListCards[key] = newCard;
    setListCards(updatedListCards);
  };

  const changeQuantity = (key, quantity) => {
    if (quantity === 0) {
      delete listCards[key];
    } else {
      const updatedCard = { ...listCards[key], quantity, price: quantity * products[key].price };
      const updatedListCards = [...listCards];
      updatedListCards[key] = updatedCard;
      setListCards(updatedListCards);
    }
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    listCards.forEach((card) => {
      if (card) {
        totalPrice += card.price;
      }
    });
    return totalPrice.toLocaleString();
  };

  const getCount = () => {
    let count = 0;
    listCards.forEach((card) => {
      if (card) {
        count += card.quantity;
      }
    });
    return count;
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`}>
      <header>
        <h1>Your Shopping Cart</h1>
        <div className="shopping" onClick={openShopping}>
          <img src="image/shopping.svg" alt="Shopping Cart" />
          <span className="quantity">{getCount()}</span>
        </div>
      </header>

      <div className="list">
        {products.map((value, key) => (
          <div key={key} className="item">
            <img src={`image/${value.image}`} alt={value.name} />
            <div className="title">{value.name}</div>
            <div className="price">{value.price.toLocaleString()}</div>
            <button onClick={() => addToCard(key)}>Add To Card</button>
          </div>
        ))}
      </div>

      <div className="card">
        <h1>Card</h1>
        <ul className="listCard">
          {listCards.map((value, key) => {
            if (value) {
              return (
                <li key={key}>
                  <div>
                    <img src={`image/${value.image}`} alt={value.name} />
                  </div>
                  <div>{value.name}</div>
                  <div>{value.price.toLocaleString()}</div>
                  <div>
                    <button onClick={() => changeQuantity(key, value.quantity - 1)}>-</button>
                    <div className="count">{value.quantity}</div>
                    <button onClick={() => changeQuantity(key, value.quantity + 1)}>+</button>
                  </div>
                </li>
              );
            }
            return null;
          })}
        </ul>
        <div className="checkOut">
          <div className="total">{getTotalPrice()}</div>
          <div className="closeShopping" onClick={closeShopping}>Close</div>
        </div>
      </div>
    </div>
  );
};

export default Addto;