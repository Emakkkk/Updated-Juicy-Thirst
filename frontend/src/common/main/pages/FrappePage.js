import React, { useState } from 'react';
import '../shoppingpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import product16Image from '../products/product16.jpg';
import product17Image from '../products/product17.jpg';
import product18Image from '../products/product18.jpg';
import product19Image from '../products/product19.jpg';
import product20Image from '../products/product20.jpg';

function FrappePage() {
  const [products] = useState([
    {
      id: 1,
      name: 'Chocolate Frappe Dubai',
      price: 55,
      image: product16Image,
    },
    {
      id: 2,
      name: 'Mango Frappe Dubai',
      price: 65,
      image: product17Image,
    },
    {
      id: 3,
      name: 'Caramel Frappe Dubai',
      price: 75,
      image: product18Image,
    },
    {
      id: 4,
      name: 'Matcha Frappe Dubai',
      price: 85,
      image: product19Image, // Add the image path for product 4
    },
    {
      id: 5,
      name: 'Strawberry Frappe Germany',
      price: 110,
      image: product20Image, // Add the image path for product 5
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
      <h1-shop>Premium Frappe</h1-shop>
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

export default FrappePage;
