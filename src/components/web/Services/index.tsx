import React from 'react';

const services = [
  {
    title: 'Ansiedade e Estresse',
    icon: 'fa-brain',
    description:
      'Técnicas comprovadas para gerenciar preocupações excessivas, ataques de pânico e fobias específicas.',
    details: {
      d1: 'Terapia para TAG',
      d2: 'Controle de ataques de pânico',
      d3: 'Técnicas de relaxamento',
    },
  },
  {
    title: 'Depressão',
    icon: 'fa-heart',
    description:
      'Abordagem para identificar e modificar padrões de pensamento negativos que contribuem para o mood deprimido.',
    details: {
      d1: 'Ativação comportamental',
      d2: 'Reestruturação cognitiva',
      d3: 'Prevenção de recaídas',
    },
  },
  {
    title: 'Relacionamentos',
    icon: 'fa-people-arrows',
    description:
      'Desenvolvimento de habilidades para relacionamentos saudáveis e comunicação assertiva.',
    details: {
      d1: 'Terapia de casal',
      d2: 'Dependência emocional',
      d3: 'Habilidades sociais',
    },
  },
  {
    title: 'Autoestima',
    icon: 'fa-user-shield',
    description:
      'Trabalho focado no desenvolvimento de autoconfiança e autoaceitação.',
    details: {
      d1: 'Autocompaixão',
      d2: 'Superação da autocrítica',
      d3: 'Assertividade',
    },
  },
  {
    title: 'Distúrbios do Sono',
    icon: 'fa-bed',
    description:
      'Terapia cognitivo-comportamental para insônia (TCC-I), método altamente eficaz sem medicamentos.',
    details: {
      d1: 'Higiene do sono',
      d2: 'Controle de estímulos',
      d3: 'Restrição de sono',
    },
  },
  {
    title: 'Terapia Infantil',
    icon: 'fa-child',
    description:
      'Abordagem lúdica da TCC para crianças com ansiedade, TDAH e problemas comportamentais.',
    details: {
      d1: 'Técnicas adaptadas',
      d2: 'Orientação parental',
      d3: 'Habilidades sociais',
    },
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="playfair text-3xl md:text-4xl font-bold mb-4">
                    <span className="gold-gradient">Serviços Especializados</span>
                </h2>
                <p className="max-w-2xl mx-auto text-gray-300">
                    Ofereço terapia individualizada para adultos e adolescentes, com abordagens baseadas em evidências científicas.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                  <div className='p-6'>
                    <div className='gold-bg text-black w-14 h-14 rounded-full flex items-center justify-center mb-4'>
                      <i className={`fas ${service.icon} text-2xl`}></i>
                    </div>
                    <h3 className="playfair text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 text-gray-300">
                      {service.details && Object.entries(service.details).map(([key, value]) => (
                        <li key={key} className="flex items-start">
                            <i className="fas fa-check text-xs gold-gradient mt-1 mr-2"></i>
                            <span>{value}</span>
                        </li>
                      ))}                            
                    </ul>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </section>
  );
};

export default Services;
