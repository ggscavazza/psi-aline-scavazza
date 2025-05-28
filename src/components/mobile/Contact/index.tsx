import React, { useState } from 'react';
import { formatPhone } from '../../utils/formatPhone';
import { handleFormSubmit } from '../../utils/handleFormSubmit';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('');

  return (
    <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                    <h2 className="playfair text-3xl md:text-4xl font-bold mb-6">
                        <span className="gold-gradient">Entre em Contato</span>
                    </h2>
                    <p className="text-gray-300 mb-8">
                        Estou aqui para ajudar você a dar o primeiro passo em direção a uma vida mais equilibrada e satisfatória. Preencha o formulário ou entre em contato diretamente pelos canais abaixo.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="gold-bg text-black w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Consultório</h4>
                                <p className="text-gray-300">Av. Paulista, 1000 - Sala 1204<br />São Paulo - SP</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="gold-bg text-black w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Telefone</h4>
                                <p className="text-gray-300">(11) 99999-9999</p>
                                <p className="text-gray-300 text-sm">Atendimento das 9h às 18h</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="gold-bg text-black w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">E-mail</h4>
                                <p className="text-gray-300">contato@psialinescavazza.com.br</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <h4 className="font-bold mb-4">Redes Sociais</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="gold-border w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition duration-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="gold-border w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition duration-300">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="gold-border w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition duration-300">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="lg:w-1/2">
                    <form onSubmit={(e) => handleFormSubmit(e, { name, email, phone, service, message }, { setName, setEmail, setPhone, setService, setMessage })} className="bg-gray-800 rounded-lg p-8 shadow-xl">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-300 mb-2">Nome completo</label>
                            <input type="text" id="name" name='name' value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" required />
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-300 mb-2">E-mail</label>
                            <input type="email" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" required />
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="phone" className="block text-gray-300 mb-2">Telefone</label>
                            <input type="tel" id="phone" name='phone' value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" required />
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="service" className="block text-gray-300 mb-2">Serviço de interesse</label>
                            <select id="service" name='service' value={service} onChange={(e) => setService(e.target.value)} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" required>
                                <option value="">Selecione...</option>
                                <option value="ansiedade">Ansiedade e Estresse</option>
                                <option value="depressao">Depressão</option>
                                <option value="relacionamentos">Relacionamentos</option>
                                <option value="autoestima">Autoestima</option>
                                <option value="sono">Distúrbios do Sono</option>
                                <option value="infantil">Terapia Infantil</option>
                            </select>
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-300 mb-2">Mensagem</label>
                            <textarea id="message" name='message' value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" required></textarea>
                        </div>
                        
                        <button type="submit" className="gold-bg text-black font-semibold w-full py-3 rounded-full hover:bg-opacity-90 transition duration-300">
                            Enviar mensagem
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;
