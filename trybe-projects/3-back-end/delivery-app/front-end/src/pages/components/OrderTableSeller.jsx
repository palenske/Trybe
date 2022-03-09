import React from 'react';
import PropTypes from 'prop-types';

function OrderTableSeller({ order }) {
  const { products, totalPrice } = order;

  const prefix = 'seller_order_details__';

  const header = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-total',
  ];

  const renderTable = () => products.map(({ name, salesProducts, price }, index) => (
    <tr key={ name }>
      <td
        data-testid={ `${prefix}element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </td>
      <td
        data-testid={ `${prefix}element-order-table-name-${index}` }
      >
        { name }
      </td>
      <td
        data-testid={ `${prefix}element-order-table-quantity-${index}` }
      >
        { salesProducts.quantity }
      </td>
      <td
        data-testid={ `${prefix}element-order-table-sub-total-${index}` }
      >
        { price.replace('.', ',') }
      </td>
      <td
        data-testid={ `${prefix}element-order-table-total-price-${index}` }
      >
        { Number(price * salesProducts.quantity).toFixed(2).replace('.', ',') }
      </td>
    </tr>
  ));

  return (
    <section>
      <table>
        <thead>
          <tr>
            { header.map((title, index) => (
              <th
                key={ index }
              >
                { title }
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{ renderTable() }</tbody>
      </table>
      <div
        data-testid={ `${prefix}element-order-total-price` }
      >
        { `Total: R$ ${totalPrice.replace('.', ',')}` }
      </div>
    </section>
  );
}

OrderTableSeller.propTypes = {
  order: PropTypes.node,
}.isRequired;

export default OrderTableSeller;
