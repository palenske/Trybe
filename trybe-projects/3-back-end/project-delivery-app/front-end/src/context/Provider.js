import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [products, setProducts] = useState(undefined);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProduct = (productData) => {
    if (!cart.find((item) => item.name === productData.name)) {
      setCart([...cart, { ...productData, quantity: 1 }]);
    } else {
      setCart(cart.map((item) => {
        if (item.name === productData.name) {
          item.quantity += 1;
        }
        return item;
      }));
    }
  };

  const rmProduct = (productData) => {
    const product = cart.find((item) => item.name === productData.name);

    if (product && product.quantity) {
      if (product.quantity > 1) {
        setCart(cart.map((item) => {
          if (item.name === productData.name) {
            item.quantity -= 1;
          }
          return item;
        }));
      } else {
        setCart(cart.filter((item) => item.name !== productData.name));
      }
    }
  };

  const setProduct = (productData, qnt) => {
    if (qnt > 0) {
      if (!cart.find((item) => item.name === productData.name)) {
        setCart([...cart, { ...productData, quantity: qnt }]);
      } else {
        setCart(cart.map((item) => {
          if (item.name === productData.name) {
            item.quantity = qnt;
          }
          return item;
        }));
      }
    } else {
      setCart(cart.filter((item) => item.name !== productData.name));
    }
  };

  const handleProduct = {
    add: addProduct,
    rm: rmProduct,
    set: setProduct,
  };

  const fetchProducts = async () => {
    const { data } = await axios.get('http://localhost:3001/customer/products');
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    function handleTotal() {
      const totalItems = cart.map((item) => Number(item.price) * item.quantity);
      if (totalItems.length > 0) {
        const total = totalItems
          .reduce((acc, next) => acc + next).toFixed(2);
        setTotalPrice(total);
      } else {
        setTotalPrice(0);
      }
    } handleTotal();
  }, [products, cart]);

  const contextValue = {
    cart,
    setCart,
    products,
    totalPrice,
    handleProduct,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
