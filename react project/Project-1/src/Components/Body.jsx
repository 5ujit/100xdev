import React from 'react'

const Body = () => {
  return (
    <main className="hero  container">
      <div className="body-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className='content-button'>
            <button>Shop Now</button>
            <button className='category-btn'> Category</button>
        </div>

        <div className='shopping'>
            <p>Also Availabe On </p>
        </div>
       
       <div className='brand-icon'>
        <img src="/images/amazon.png" alt="amazon-logo" />
        <img src="/images/flipkart.png" alt="filpkart-logo" />
       </div>

      </div>
      <div className="body-image">
      <img src="/images/shoe_image.png" alt="filpkart-logo" />

      </div>
    </main>
  );
}

export default Body



