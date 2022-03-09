import React, { useEffect, useState } from 'react';
import { Navbar, SellerOrderCard } from './components';

const axios = require('axios').default;

function OrdersSeller() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = { headers: { Authorization: token } };
    const { data } = await axios
      .get('http://localhost:3001/sales/seller', config);
    return data && setOrders([data]);
  };

  const orderList = orders.map((order) => SellerOrderCard(order));

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

export default OrdersSeller;
