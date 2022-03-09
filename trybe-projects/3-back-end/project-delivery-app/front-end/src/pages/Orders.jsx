import React, { useEffect, useState } from 'react';
import { Navbar, OrderCard } from './components';

const axios = require('axios').default;

function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const { data } = await axios.get('http://localhost:3001/sales');
    setOrders(data);
  };

  const orderList = orders.map((order) => OrderCard(order));

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        { orderList }
      </div>
    </>
  );
}

export default Orders;
