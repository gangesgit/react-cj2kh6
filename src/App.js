import React from 'react';
import './style.css';
import StripeCheckout from 'react-stripe-checkout';

export default function App() {
  const onhandle = (token, addresses) => {
    console.log({ token, addresses });
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <StripeCheckout
        stripeKey="pk_test_51KvLZnSH3qquAlKMx00L9R3sIpoEvl91AEYFG3hszf882UEZWxV8AFDAcekin708Ne7RTuHVrbWCHAD5TX6GEsiq00M2rWxHws"
        token={onhandle}
      />
    </div>
  );
}
