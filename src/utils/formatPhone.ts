export const formatPhone = (phone: string): string => {
  return phone
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
};
