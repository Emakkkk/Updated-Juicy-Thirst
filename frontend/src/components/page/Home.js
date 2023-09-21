import React from 'react';
import './styles/Home.css';
import image1 from '../images/deals-image/deals1.jpg'; 
import image2 from '../images/deals-image/deals2.jpg'; 
import image3 from '../images/deals-image/deals3.jpg'; 

function Home() {
  const customerDeals = [
    {
      id: 1,
      description: 'Get amazing discounts on the latest juices!',
    },
    {
      id: 2,
      description: 'Welcome to a juicing paradise where we blend nature\'s finest fruits and vegetables into a symphony of flavors that tantalize your taste buds and nourish your body.',
    },
    {
      id: 3,
      description: 'Explore our vibrant collection of freshly squeezed juices, bursting with vitamins and nutrients.',
    },
  ];

    // Split customerDeals into three separate columns
    const dealsPerColumn = Math.ceil(customerDeals.length / 3);
    const firstColumnDeals = customerDeals.slice(0, dealsPerColumn);
    const secondColumnDeals = customerDeals.slice(dealsPerColumn, dealsPerColumn * 2);
    const thirdColumnDeals = customerDeals.slice(dealsPerColumn * 2);

  const saleStrategy = {
    title: 'Our Sale Strategy',
    content: `At Juicy Thirst, we believe in offering our customers the best deals and discounts all year round. 
    Whether it's fruits or vegetables, we strive to provide quality products at unbeatable prices. 
    Stay updated with our latest promotions and special offers to make the most of your shopping experience.`,
  };

  const customerReviews = [
    {
      id: 1,
      name: 'review 1',
      review: 'I love Juicy Thirst! Their juices are the best, and the prices are unbeatable.',
    },
    {
      id: 2,
      name: 'review 2',
      review: 'The flavors are amazing! I always recommend Juicy Thirst to my friends and family.',
    },
    {
      id: 3,
      name: 'review 3',
      review: 'The flavors are amazing! I always recommend Juicy Thirst to my friends and family.',
    },
  ];

  // Split customerReviews into three arrays
  const reviewsPerColumn = Math.ceil(customerReviews.length / 3);
  const firstHalfReviews = customerReviews.slice(0, reviewsPerColumn);
  const secondHalfReviews = customerReviews.slice(reviewsPerColumn, reviewsPerColumn * 2);
  const thirdHalfReviews = customerReviews.slice(reviewsPerColumn * 2);

  return (
    <div className="home">
      <h1-home>Welcome to Juicy Thirst Deals</h1-home>
      
      {/* Sale Strategy Section */}
      <div className="sale-strategy">
        <h2>{saleStrategy.title}</h2>
        <p>{saleStrategy.content}</p>
      </div>

     {/* Render Customer Deals */}
     <div className="customer-deals-container">
        {/* First Customer Deals */}
        <div className="customer-deals">
          <h2>50% Off Fruits Juice Sale</h2>
          {firstColumnDeals.map((deal) => (
            <div key={deal.id} className="customerDeal">
                <p>{deal.description}</p>
            </div>
          ))}
        </div>

        {/* Second Customer Deals */}
        <div className="customer-deals">
          <h2>Squeeze the Goodness, Savor the Flavor!</h2>
          {secondColumnDeals.map((deal) => (
            <div key={deal.id} className="customerDeal">
                <p>{deal.description}</p>
            </div>
          ))}
        </div>

        {/* Third Customer Deals */}
        <div className="customer-deals">
          <h2>Juicy Thirst Deals Await!</h2>
          {thirdColumnDeals.map((deal) => (
            <div key={deal.id} className="customerDeal">
                <p>{deal.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Three images at the bottom */}
      <div className="image-container">
        <img
            src={image1}
            alt="Lemon"
            className="image"
            style={{ width: '450px', height: 'auto' }}
        />
        <img
            src={image2}
            alt="Lemon"
            className="image"
            style={{ width: '450px', height: 'auto' }}
        />
        <img
            src={image3}
            alt="Lemon"
            className="image"
            style={{ width: '450px', height: 'auto' }}
        />
      </div>


       {/* Customer Reviews Section */}
       <div className="customer-reviews-container">
        
        {/* First column of Customer Reviews */}
        <div className="customer-reviews">
          {firstHalfReviews.map((review) => (
            <div key={review.id} className="review">
              <div className="u-container-layout">
                <h5>{review.name}</h5>
                <h6>Customer</h6>
                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second column of Customer Reviews */}
        <div className="customer-reviews">
          {secondHalfReviews.map((review) => (
            <div key={review.id} className="review">
              <div className="u-container-layout">
                <h5>{review.name}</h5>
                <h6>Customer</h6>
                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Third column of Customer Reviews */}
        <div className="customer-reviews">
          {thirdHalfReviews.map((review) => (
            <div key={review.id} className="review">
              <div className="u-container-layout">
                <h5>{review.name}</h5>
                <h6>Customer</h6>
                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

export default Home;
