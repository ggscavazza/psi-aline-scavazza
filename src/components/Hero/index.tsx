import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* TODO colocar imagem real depois */}
        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Psicoterapia" className="w-full h-full object-cover"></img>
      </div>

      <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl">
                <h1 className="playfair text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Transforme sua mente, <span className="gold-gradient">transforme sua vida</span>
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Terapia Cognitivo-Comportamental especializada para ajudá-lo a superar desafios emocionais e alcançar seu potencial máximo.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="#contact" className="gold-bg text-black font-semibold px-8 py-3 rounded-full text-center hover:bg-opacity-90 transition duration-300">
                        Agende sua consulta
                    </a>
                    <a href="#services" className="gold-border text-white font-semibold px-8 py-3 rounded-full text-center hover:bg-gray-900 transition duration-300">
                        Conheça nossos serviços
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
