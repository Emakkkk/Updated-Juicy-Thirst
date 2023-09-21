import React, { useState } from 'react';
import '../shoppingpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import product11Image from '../products/product11.jpg';
import product12Image from '../products/product12.jpg';
import product13Image from '../products/product13.jpg';
import product14Image from '../products/product14.jpg';
import product15Image from '../products/product15.jpg';

function DessertPage() {
  const [products] = useState([
    {
      id: 1,
      name: 'Chocolate Irish Coffe Mug',
      price: 45,
      image: product11Image,
    },
    {
      id: 2,
      name: 'Modern Espresso Milk',
      price: 55,
      image: product12Image,
    },
    {
      id: 3,
      name: 'Organic Match Green',
      price: 25,
      image: product13Image,
    },
    {
      id: 4,
      name: 'Strawberry Milkshake',
      price: 15,
      image: product14Image, // Add the image path for product 4
    },
    {
      id: 5,
      name: 'Cherry Chocolate Cup',
      price: 35,
      image: product15Image, // Add the image path for product 5
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
      <h1-shop>Dessert Menu</h1-shop>
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

export default DessertPage;
