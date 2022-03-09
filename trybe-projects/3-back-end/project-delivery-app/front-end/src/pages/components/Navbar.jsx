import React from 'react';
import { Link } from 'react-router-dom';

const prefix = 'customer_products__';
function Navbar() {
  const user = JSON.parse(localStorage.getItem('user'));

  const customer = (
    <>
      <Link to="/customer/products">
        <div
          data-testid={ `${prefix}element-navbar-link-products` }
        >
          Produtos
        </div>
      </Link>
      <Link to="/customer/orders">
        <div
          data-testid={ `${prefix}element-navbar-link-orders` }
        >
          Meus Pedidos
        </div>
      </Link>
    </>
  );

  const seller = (
    <Link to="/seller/orders">
      <div
        data-testid={ `${prefix}element-navbar-link-orders` }
      >
        Meus Pedidos
      </div>
    </Link>
  );

  const admin = (
    <Link to="/admin/manage">
      <div
        data-testid={ `${prefix}element-navbar-link-orders` }
      >
        Gerenciar Usuários
      </div>
    </Link>
  );

  return (
    <nav>
      { user.role === 'customer' && customer }
      { user.role === 'seller' && seller }
      { user.role === 'admin' && admin }
      <div
        data-testid={ `${prefix}element-navbar-user-full-name` }
      >
        { user.name }
      </div>
      <Link to="/" onClick={ () => localStorage.clear('user') }>
        <div
          data-testid={ `${prefix}element-navbar-link-logout` }
        >
          Sair
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
