import React, { useState } from 'react';

const questions = [
  {
    question: 'Como funciona a Terapia Cognitivo-Comportamental?',
    answer: 'A TCC é uma abordagem focada no presente, que ajuda a identificar e modificar padrões de pensamento e comportamentos que estão contribuindo para o sofrimento emocional. Trabalhamos com técnicas estruturadas e baseadas em evidências para promover mudanças duradouras.',
  },
  {
    question: 'Quantas sessões são necessárias?',
    answer: 'O número de sessões varia de acordo com cada caso. Geralmente, a TCC é considerada uma terapia de curto a médio prazo, com duração média de 12 a 20 sessões para a maioria dos casos. Porém, isso será avaliado individualmente durante as primeiras consultas.',
  },
  {
    question: 'A terapia é presencial ou online?',
    answer: 'Ofereço ambas as modalidades. O atendimento presencial ocorre no consultório em São Paulo, enquanto as sessões online são realizadas por uma plataforma segura e confidencial. Estudos mostram que a TCC online pode ser tão eficaz quanto a presencial para muitas condições.',
  },  
  {
    question: 'Como é a primeira sessão?',
    answer: 'A primeira sessão é uma avaliação inicial onde conversaremos sobre suas preocupações, histórico e objetivos para a terapia. Também explicarei como funciona a TCC e responderemos a quaisquer dúvidas que você possa ter sobre o processo.',
  },  
  {
    question: 'Você trabalha com reembolso de convênios?',
    answer: 'Não trabalho diretamente com convênios médicos, mas forneço todos os documentos necessários para que você possa solicitar o reembolso junto ao seu plano de saúde, caso ele cubra atendimento com psicólogos particulares.',
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-20 black-bg">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="playfair text-3xl md:text-4xl font-bold mb-4">
                    <span className="gold-gradient">Perguntas Frequentes</span>
                </h2>
                <p className="max-w-2xl mx-auto text-gray-300">
                    Tire suas dúvidas sobre o processo terapêutico e a abordagem TCC
                </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {questions.map((q, index) => (
                <div key={index} className="mb-6 border-b border-gray-800 pb-6">
                    <button className="faq-question flex justify-between items-center w-full text-left focus:outline-none" onClick={() => toggleQuestion(index)}>
                        <h3 className="playfair text-xl font-medium">{q.question}</h3>
                        <i className={`fas fa-chevron-down gold-gradient transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></i>
                    </button>
                    <div className={`faq-answer mt-4 text-gray-300 transition-all duration-300 ease-in-out ${ openIndex === index ? 'block' : 'hidden'}`}>
                        <p>{q.answer}</p>
                    </div>
                </div>
              ))}
            </div>
        </div>
    </section>
  );
};

export default Faq;
