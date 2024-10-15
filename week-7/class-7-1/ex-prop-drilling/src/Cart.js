// Cart.js
import React from 'react';
import TotalPrice from './TotalPrice';

function Cart({ totalPrice }) {
  return (
    <div>
      <h2>Your Cart Items</h2>
      <TotalPrice totalPrice={totalPrice} />  {/* Passing totalPrice to TotalPrice */}
    </div>
  );
}

export default Cart;
