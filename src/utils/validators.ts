export const isEmailValid = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isPhoneValid = (phone: string): boolean => {
  return /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(phone);
};
