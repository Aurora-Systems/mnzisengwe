import  {FC, useEffect } from 'react';

const PayPalButton: FC = () => {
  useEffect(() => {
    // @ts-ignore
    if (window.paypal) {
      // @ts-ignore
      window.paypal.Buttons({
        createOrder: (data:any, actions:any) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '0.01', // Sample amount
              },
            }],
          });
        },
        onApprove: (data:any, actions:any) => {
          return actions.order.capture().then((details:any) => {
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        },
      }).render('#paypal-button-container');
    }
  }, []);

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;