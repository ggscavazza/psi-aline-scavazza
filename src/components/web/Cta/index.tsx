import React from 'react';

const Cta: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 md:p-12 shadow-xl gold-border">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3 mb-8 md:mb-0">
                        <h2 className="playfair text-2xl md:text-3xl font-bold mb-4">
                            Pronto para dar o primeiro passo?
                        </h2>
                        <p className="text-gray-300">
                            Agende uma consulta inicial e descubra como a Terapia Cognitivo-Comportamental pode ajudá-lo a alcançar seus objetivos emocionais e comportamentais.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center md:justify-end">
                        <a href="#contact" className="gold-bg text-black font-semibold px-8 py-3 rounded-full text-center hover:bg-opacity-90 transition duration-300 whitespace-nowrap">
                            Agendar Consulta
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Cta;
