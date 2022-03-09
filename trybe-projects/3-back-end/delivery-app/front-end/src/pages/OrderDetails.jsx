import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { Navbar, OrderTable } from './components';

const axios = require('axios').default;

function OrderDetails() {
  const [order, setOrder] = useState(null);
  const { id } = useParams();

  const prefix = 'customer_order_details__';

  useEffect(() => {
    async function fetchOrders() {
      const { data } = await axios.get(`http://localhost:3001/sales/${id}`);
      setOrder(data[0]);
    } fetchOrders();
  }, [id]);

  return !order ? <div> loading </div> : (
    <>
      <Navbar />
      { order && console.log(order)}
      <div key={ order.id }>
        <h3>Detalhe do Pedido</h3>
        <p
          data-testid={ `${prefix}element-order-details-label-order-id` }
        >
          { `${'0000'.substring(0, '0000'.length - `${order.id}`.length)}${order.id}` }
        </p>
        <p
          data-testid={ `${prefix}element-order-details-label-seller-name` }
        >
          { order.seller.name }
        </p>
        <p
          data-testid={ `${prefix}element-order-details-label-order-date` }
        >
          { moment(order.saleDate).format('DD/MM/YYYY') }
        </p>
        <p
          data-testid={ `${prefix}element-order-details-label-delivery-status` }
        >
          { order.status }
        </p>
        <button
          type="button"
          disabled
          data-testid={ `${prefix}button-delivery-check` }
        >
          MARCAR COMO ENTREGUE
        </button>
      </div>
      <OrderTable order={ order } />
    </>
  );
}

export default OrderDetails;
