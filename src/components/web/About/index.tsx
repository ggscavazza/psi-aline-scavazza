import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 black-bg">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Psi. Aline Scavazza" className="rounded-lg shadow-2xl w-full h-auto max-w-md mx-auto"></img>
                </div>
                
                <div className="lg:w-1/2">
                    <h2 className="playfair text-3xl md:text-4xl font-bold mb-6">
                        <span className="gold-gradient">Psi. Aline Scavazza</span>
                    </h2>
                    <p className="mb-4 text-gray-300">
                        Psicóloga clínica com especialização em Terapia Cognitivo-Comportamental (TCC) e mais de 12 anos de experiência ajudando pacientes a superar desafios emocionais e comportamentais.
                    </p>
                    <p className="mb-4 text-gray-300">
                        Mestre em Psicologia Clínica pela Universidade de São Paulo (USP), membro da Associação Brasileira de Terapias Cognitivas (ABTC) e certificada pelo Beck Institute for Cognitive Behavior Therapy.
                    </p>
                    <p className="mb-6 text-gray-300">
                        Minha abordagem combina a ciência da TCC com uma compreensão profunda das necessidades individuais de cada paciente, criando um plano de tratamento personalizado para resultados eficazes e duradouros.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center">
                            <i className="fas fa-graduation-cap text-xl gold-gradient mr-3"></i>
                            <span>Formação Acadêmica</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-certificate text-xl gold-gradient mr-3"></i>
                            <span>Certificações</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-briefcase text-xl gold-gradient mr-3"></i>
                            <span>12+ anos de experiência</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-users text-xl gold-gradient mr-3"></i>
                            <span>Atendimento individualizado</span>
                        </div>
                    </div>
                    
                    <a href="#contact" className="gold-border text-white font-semibold px-8 py-3 rounded-full inline-block hover:bg-gray-900 transition duration-300">
                        Saiba mais sobre minha abordagem
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
