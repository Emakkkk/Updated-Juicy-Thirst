import React from 'react';
import './Home.css'; // Import your stylesheet
import image1 from '../images/deals-image/deals1.jpg'; // Import image1
import image2 from '../images/deals-image/deals2.jpg'; // Import image2
import image3 from '../images/deals-image/deals3.jpg'; // Import image3

function Home() {
  const deals = [
    {
      id: 1,
      title: '50% Off Fruits Juice Sale',
      description: 'Get amazing discounts on the latest juices!',
    },
    {
      id: 2,
      title: 'Squeeze the Goodness, Savor the Flavor!',
      description: 'Welcome to a juicing paradise where we blend natures finest fruits and vegetables into a symphony of flavors that tantalize your taste buds and nourish your body.',
    },
    {
      id: 3,
      title: 'Juicy Thirst Deals Await!',
      description: 'Explore our vibrant collection of freshly squeezed juices, bursting with vitamins and nutrients.',
    },
  ];

  const saleStrategy = {
    title: 'Our Sale Strategy',
    content: `At Juicy Thirst, we believe in offering our customers the best deals and discounts all year round. 
    Whether it's fruits or vegetables, we strive to provide quality products at unbeatable prices. 
    Stay updated with our latest promotions and special offers to make the most of your shopping experience.`,
  };

  return (
    <div className="home">
      <h1-home className="home-title">Welcome to Juicy Thirst Deals</h1-home>
      
      {/* Sale Strategy Section */}
      <div className="sale-strategy">
        <h2>{saleStrategy.title}</h2>
        <p>{saleStrategy.content}</p>
      </div>

      {/* Deals Section */}
      <div className="deal-container">
        {deals.map((deal) => (
          <div key={deal.id} className="deal">
            <h2>{deal.title}</h2>
            <p>{deal.description}</p>
          </div>
        ))}
      </div>

      {/* Three images at the bottom */}
      <div className="image-container">
        <img src={image1} alt="Lemon" className="image" />
        <img src={image2} alt="Manggo" className="image" />
        <img src={image3} alt="Orange" className="image" />
      </div>
    </div>
  );
}

export default Home;
