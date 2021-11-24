const INITIAL_STATE = { email: 'Guest' };

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOGIN':
    return { email: action.email };
  default:
    return state;
  }
};

export default user;
