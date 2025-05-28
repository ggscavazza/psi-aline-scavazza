import {isEmailValid, isPhoneValid} from './validators';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type ResetFunctions = {
  setName: (val: string) => void;
  setEmail: (val: string) => void;
  setPhone: (val: string) => void;
  setService: (val: string) => void;
  setMessage: (val: string) => void;
};

export const handleFormSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  data: FormData,
  reset: ResetFunctions,
) => {
  e.preventDefault();

  if (!isEmailValid(data.email)) {
    alert('Por favor, insira um e-mail válido.');
    return;
  }

  if (!isPhoneValid(data.phone)) {
    alert('Por favor, insira um telefone válido.');
    return;
  }

  alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
  // Resetando os estados controlados
  reset.setName('');
  reset.setEmail('');
  reset.setPhone('');
  reset.setService('');
  reset.setMessage('');
  e.currentTarget.reset();
};
