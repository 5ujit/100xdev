// App.js
import React from 'react';
import Cart from './Cart';

const App = () => {
  const totalPrice = 1500;  // The data that needs to reach CheckoutButton

  return (
    <div>
      <Cart totalPrice={totalPrice} />  {/* Passing totalPrice to Cart */}
    </div>
  );
};

export default App;
