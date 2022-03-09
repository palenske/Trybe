import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard, Navbar } from './components';
import Context from '../context/Context';

const maxProducts = 11;

export default function Products() {
  const {
    cart,
    products,
    totalPrice,
    handleProduct,
  } = useContext(Context);
  const productsList = () => products.slice(0, maxProducts)
    .map((productData) => ProductCard(productData, handleProduct, cart));

  return (
    <>
      <Navbar />
      <div>
        <Link to="/customer/checkout">
          <button
            data-testid="customer_products__button-cart"
            type="button"
            disabled={ totalPrice === 0 || totalPrice === '0,00' }
          >
            { 'Ver carrinho: R$ '}
            <p
              data-testid="customer_products__checkout-bottom-value"
            >
              { totalPrice && totalPrice.replace('.', ',') }
            </p>
          </button>
        </Link>
        { products && productsList() }
      </div>
    </>
  );
}
