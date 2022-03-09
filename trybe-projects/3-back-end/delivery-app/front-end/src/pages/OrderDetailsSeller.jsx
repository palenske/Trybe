import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { Navbar, OrderTableSeller, ChangeStatusBtn } from './components';

const axios = require('axios').default;

function OrderDetailsSeller() {
  const [order, setOrder] = useState(null);
  const [checked, setChecked] = useState(false);
  const { id } = useParams();

  const prefix = 'seller_order_details__';

  useEffect(() => {
    async function fetchOrders() {
      const { data } = await axios.get(`http://localhost:3001/sales/${id}`);
      setOrder(data[0]);
    } fetchOrders();
    // Talvez tenha que mudar a forma como a informação é pega do banco
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
          data-testid={ `${prefix}element-order-details-label-order-date` }
        >
          { moment(order.saleDate).format('DD/MM/YYYY') }
        </p>
        <p
          data-testid={ `${prefix}element-order-details-label-delivery-status` }
        >
          { order.status }
        </p>
        <ChangeStatusBtn
          content="PREPARA PEDIDO"
          setChecked={ setChecked }
          disable={ checked }
          testId={ `${prefix}button-preparing-check` }
        />
        <ChangeStatusBtn
          content="SAIU PARA ENTREGA"
          setChecked={ setChecked }
          disable={ !checked }
          testId={ `${prefix}button-dispatch-check` }
        />
      </div>
      <OrderTableSeller order={ order } />
    </>
  );
}

export default OrderDetailsSeller;
