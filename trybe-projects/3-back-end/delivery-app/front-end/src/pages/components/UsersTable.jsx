import React from 'react';
import PropTypes from 'prop-types';

const axios = require('axios').default;

function UsersTable({ listUsers }, fetchUsers) {
  const prefix = 'admin_manage__';

  const header = [
    'Item',
    'Nome',
    'E-mail',
    'Tipo',
    'Excluir',
  ];

  const removeItem = async (email) => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = { headers: { Authorization: token, email } };
    try {
      await axios.delete('http://localhost:3001/admin/delete', config);
      fetchUsers();
    } catch (err) {
      console.log(err);
    }
  };

  const renderTable = () => listUsers.map(({ name, email, role }, index) => (
    <tr key={ name }>
      <td
        data-testid={ `${prefix}element-user-table-item-number-${index}` }
      >
        { index + 1 }
      </td>
      <td
        data-testid={ `${prefix}element-user-table-name-${index}` }
      >
        { name }
      </td>
      <td
        data-testid={ `${prefix}element-user-table-email-${index}` }
      >
        { email }
      </td>
      <td
        data-testid={ `${prefix}element-user-table-role-${index}` }
      >
        { role }
      </td>
      <td>
        <button
          type="submit"
          data-testid={ `${prefix}element-user-table-remove-${index}` }
          onClick={ () => removeItem(email) }
        >
          Excluir
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
    </section>
  );
}

UsersTable.propTypes = {
  usersList: PropTypes.node,
  fetchUsers: PropTypes.func,
}.isRequired;

export default UsersTable;
