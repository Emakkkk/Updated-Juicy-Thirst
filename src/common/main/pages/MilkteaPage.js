import React, { useState } from 'react';
import '../shoppingpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import product21Image from '../products/product21.jpg';
import product22Image from '../products/product22.jpg';
import product23Image from '../products/product23.jpg';
import product24Image from '../products/product24.jpg';
import product25Image from '../products/product25.jpg';

function MilkteaPage() {
  const [products] = useState([
    {
      id: 1,
      name: 'Classic Mango Bubble Tea',
      price: 25,
      image: product21Image,
    },
    {
      id: 2,
      name: 'Cookies n Cream Forest',
      price: 35,
      image: product22Image,
    },
    {
      id: 3,
      name: 'Matcha Cheesy Bubble Tea',
      price: 55,
      image: product23Image,
    },
    {
      id: 4,
      name: 'Bubble Tea Premium',
      price: 75,
      image: product24Image, // Add the image path for product 4
    },
    {
      id: 5,
      name: 'Rose Pink Bubble Tea',
      price: 120,
      image: product25Image, // Add the image path for product 5
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
      <h1-shop>Classy Milktea</h1-shop>
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

export default MilkteaPage;
