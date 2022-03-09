import React, { useContext } from 'react';
import Context from '../../context/Context';

function CartTable() {
  const {
    cart,
    setCart,
    totalPrice,
  } = useContext(Context);

  const prefix = 'customer_checkout__';

  const removeItem = (name) => (
    setCart(cart.filter((item) => item.name !== name))
  );

  const header = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-total',
    'Remover Item',
  ];

  const renderTable = () => cart.map(({ name, quantity, price }, index) => (
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
        { quantity }
      </td>
      <td
        data-testid={ `${prefix}element-order-table-unit-price-${index}` }
      >
        { price.replace('.', ',') }
      </td>
      <td
        data-testid={ `${prefix}element-order-table-sub-total-${index}` }
      >
        { Number(price * quantity).toFixed(2).replace('.', ',') }
      </td>
      <td>
        <button
          type="button"
          data-testid={ `${prefix}element-order-table-remove-${index}` }
          onClick={ () => removeItem(name) }
        >
          Remove
        </button>
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
        { `Total: R$ ${totalPrice && totalPrice.replace('.', ',')}` }
      </div>
    </section>
  );
}

export default CartTable;
