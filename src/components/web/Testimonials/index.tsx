import React from 'react';

const testimonials = [
  {
    initials: 'AM',
    name: 'Ana Maria',
    text: 'A Psi. Aline me ajudou a entender meus padrões de pensamento e como eles afetavam minha ansiedade. Em poucos meses, consegui retomar atividades que havia abandonado por medo.',
    since: 'Paciente desde 2019',
  },
  {
    initials: 'RC',
    name: 'Ricardo C.',
    text: 'Depois de anos lutando contra a depressão, encontrei na TCC uma abordagem que realmente fez diferença. A Psi. Aline é extremamente profissional e acolhedora.',
    since: 'Paciente desde 2020',
  },
  {
    initials: 'TS',
    name: 'Thaís e Samuel',
    text: 'A terapia de casal com a Psi. Aline transformou nosso relacionamento. Aprendemos a nos comunicar de forma mais eficaz e a resolver conflitos de maneira saudável.',
    since: 'Pacientes desde 2021',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden black-bg">        
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h2 className="playfair text-3xl md:text-4xl font-bold mb-4">
                    <span className="gold-gradient">Depoimentos</span>
                </h2>
                <p className="max-w-2xl mx-auto text-gray-300">
                    O que meus pacientes dizem sobre o processo terapêutico
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((item, index) => (
                <div key={index} className="testimonial-card rounded-lg p-8 gold-border">
                    <div className="flex items-center mb-4">
                        <div className="gold-gradient text-3xl mr-3">“</div>
                        <div className="gold-bg w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">{item.initials}</div>
                    </div>
                    <p className="text-gray-300 mb-4 italic">
                        “{item.text}”
                    </p>
                    <div className="flex items-center">
                        <div>
                            <h4 className="font-bold">{item.name}</h4>
                            <p className="text-sm text-gray-400">{item.since}</p>
                        </div>
                    </div>
                </div>
              ))}                
            </div>
        </div>
    </section>
  );
};

export default Testimonials;
