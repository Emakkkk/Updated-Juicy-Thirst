import React, { useState } from 'react';
import '../shoppingpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import product1Image from '../products/product1.png';
import product2Image from '../products/product2.jpg';
import product3Image from '../products/product3.jpg';
import product4Image from '../products/product4.jpg';
import product5Image from '../products/product5.jpg';

function FruitPage() {
  const [products] = useState([
    {
      id: 1,
      name: 'Mango Shake',
      price: 10,
      image: product1Image,
    },
    {
      id: 2,
      name: 'Watermelon Shake',
      price: 15,
      image: product2Image,
    },
    {
      id: 3,
      name: 'Apple Juice',
      price: 20,
      image: product3Image,
    },
    {
      id: 4,
      name: 'Orange Juice',
      price: 12,
      image: product4Image, // Add the image path for product 4
    },
    {
      id: 5,
      name: 'Strawberry Smoothie',
      price: 18,
      image: product5Image, // Add the image path for product 5
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
      <h1-shop>Fresh Juice</h1-shop>
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

export default FruitPage;
