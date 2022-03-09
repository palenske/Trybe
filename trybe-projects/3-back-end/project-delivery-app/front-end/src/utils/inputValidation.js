export const validateEmail = (email) => {
  const regexEmail = /\S+@\S+\.\S+/;
  return (regexEmail.test(String(email).toLowerCase()));
};

export const validateName = (name) => {
  const minLengthName = 12;
  return (name.length > minLengthName);
};

export const validatePassword = (password) => {
  const minLengthPassword = 6;
  return (password.length >= minLengthPassword);
};
