import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Navbar, CartTable } from './components';
import Context from '../context/Context';

const axios = require('axios').default;

function Checkout() {
  const { cart, totalPrice } = useContext(Context);
  const checkoutData = {
    cart,
    totalPrice: Number(parseFloat(totalPrice).toFixed(2)),
    sellerId: 2,
    deliveryNumber: '',
    deliveryAddress: '',
  };
  const [sellers, setSellers] = useState([]);
  const [checkout, setCheckout] = useState(checkoutData);
  const [redirect, setRedirect] = useState(null);

  const prefix = 'customer_checkout__';

  const fetchSellers = async () => {
    const { data } = await axios.get('http://localhost:3001/users/seller');
    setSellers(data);
  };

  useEffect(() => {
    fetchSellers();
  }, []);

  const handleCheckout = ({ target }) => {
    const { name } = target;
    let { value } = target;
    if (name === 'sellerId') value = Number(value);
    setCheckout((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const saleDate = new Date().toISOString();
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = { headers: { Authorization: token } };
    const { data } = await axios
      .post('http://localhost:3001/sales', { ...checkout, saleDate }, config);
    setRedirect(data.id);
  };

  return (
    <>
      <Navbar />
      <CartTable />
      <section>
        <div>
          <select
            name="sellerId"
            data-testid={ `${prefix}select-seller` }
            onChange={ handleCheckout }
          >
            {sellers.map((seller) => (
              <option
                key={ seller.id }
                value={ seller.id }
              >
                { seller.name }
              </option>
            ))}
          </select>
          <input
            type="text"
            name="deliveryAddress"
            data-testid={ `${prefix}input-address` }
            onChange={ handleCheckout }
          />
          <input
            type="text"
            name="deliveryNumber"
            data-testid={ `${prefix}input-addressNumber` }
            onChange={ handleCheckout }
          />
        </div>
        <button
          type="button"
          onClick={ handleSubmit }
          data-testid={ `${prefix}button-submit-order` }
          disabled={ !cart.length }
        >
          FINALIZAR PEDIDO
        </button>
      </section>
      { redirect && <Navigate to={ `/customer/orders/${redirect}` } />}
    </>
  );
}

export default Checkout;
