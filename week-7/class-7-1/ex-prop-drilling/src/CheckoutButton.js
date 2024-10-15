// CheckoutButton.js
import React from 'react';

function CheckoutButton({ totalPrice }) {
  return (
    <button onClick={() => alert(`Proceeding with total: $${totalPrice}`)}>
      Checkout
    </button>
  );
}

export default CheckoutButton;
