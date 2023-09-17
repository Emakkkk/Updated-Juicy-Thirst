import React, { useState } from 'react';
import '../shoppingpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import product6Image from '../products/product6.jpg';
import product7Image from '../products/product7.jpg';
import product8Image from '../products/product8.jpg';
import product9Image from '../products/product9.jpg';
import product10Image from '../products/product10.jpg';

function VeggiePage() {
  const [products] = useState([
    {
      id: 1,
      name: 'Broccoli Smoothie',
      price: 10,
      image: product6Image,
    },
    {
      id: 2,
      name: 'Carrot Shake',
      price: 15,
      image: product7Image,
    },
    {
      id: 3,
      name: 'Pear Shake',
      price: 20,
      image: product10Image,
    },
    {
      id: 4,
      name: 'Radish Juice',
      price: 12,
      image: product9Image, // Add the image path for product 4
    },
    {
      id: 5,
      name: 'Carrot Smoothie',
      price: 18,
      image: product8Image, // Add the image path for product 5
    },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const handleBuy = () => {
    // Add your logic here to handle the purchase
    alert('Purchase successful');
  };

  const handleCheckout = () => {
    // Add your logic here to handle the checkout
    alert('Checkout successful');
  };

  return (
    <div className="shopping-page">
      <h1-shop>Veggies Menu</h1-shop>
      <div className="product-list">
        <h2-shop>Products</h2-shop>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div className="product-info">
                <img src={product.image} alt={product.name} />
                <div>
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <div className="button-container">
                      <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                        Add to Cart
                      </button>
                    <button className="buy-button" onClick={handleBuy}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button className="remove-button" onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: ${calculateTotalPrice()}</p>
        <button className="checkout-button" onClick={handleCheckout}> Checkout</button>
      </div>
    </div>
  );
}

export default VeggiePage;
