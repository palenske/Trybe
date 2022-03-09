import React, { useEffect, useState } from 'react';
import { Navbar, RegisterForm, UsersTable } from './components';

const axios = require('axios').default;

function Management() {
  const [listUsers, setListUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await axios.get('http://localhost:3001/users');
    console.log(data);
    setListUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Navbar />
      <RegisterForm />
      <div>Lista de usuários</div>
      <UsersTable listUsers={ listUsers } fetchUsers={ fetchUsers } />
    </>
  );
}

export default Management;
