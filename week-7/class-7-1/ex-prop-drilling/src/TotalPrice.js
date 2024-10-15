// TotalPrice.js
import React from 'react';
import CheckoutButton from './CheckoutButton';

function TotalPrice({ totalPrice }) {
  return (
    <div>
      <h3>Total: ${totalPrice}</h3>  {/* Display the total price */}
      <CheckoutButton totalPrice={totalPrice} />  {/* Passing totalPrice to CheckoutButton */}
    </div>
  );
}

export default TotalPrice;
