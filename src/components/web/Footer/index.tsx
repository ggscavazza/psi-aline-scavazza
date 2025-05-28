import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 black-bg">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-6 md:mb-0">
                    <i className="fas fa-brain text-2xl gold-gradient mr-2"></i>
                    <span className="playfair text-xl font-bold gold-gradient">Psi. Aline Scavazza</span>
                </div>
                
                <div className="flex flex-col items-center md:items-end">
                    <p className="text-gray-400 mb-4 text-center md:text-right">
                        Psicóloga Clínica | CRP 00/00000<br/>
                        Especialista em Terapia Cognitivo-Comportamental
                    </p>
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Psi. Aline Scavazza. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
