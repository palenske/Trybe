import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderCard(orderData) {
  console.log(orderData);
  const { id, status, saleDate, totalPrice } = orderData;
  const orderId = `${'0000'.substring(0, '0000'.length - `${id}`.length)}${id}`;

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  };

  function handleDate() {
    const date = new Date(saleDate);
    return date.toLocaleDateString('en-GB');
  }

  return (
    <Link to={ `/customer/orders/${id}` } key={ id }>
      <div
        style={ divStyle }
      >
        <div data-testid={ `customer_orders__element-order-id-${id}` }>
          { `pedido ${orderId}` }
        </div>
        <div data-testid={ `customer_orders__element-delivery-status-${id}` }>
          { status }
        </div>
        <div>
          <h3 data-testid={ `customer_orders__element-order-date-${id}` }>
            { handleDate() }
          </h3>
          <h3 data-testid={ `customer_orders__element-card-price-${id}` }>
            { totalPrice.replace('.', ',') }
          </h3>
        </div>
      </div>
    </Link>
  );
}
