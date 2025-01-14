// pages/faq.tsx

import { useState } from 'react';
import Image from 'next/image';
import Main from '@/components/Home';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Como posso agendar uma consulta?',
    answer: 'Você pode agendar uma consulta através do nosso site.',
  },
  {
    question: 'Quais profissionais estão disponíveis?',
    answer: 'Temos uma variedade de profissionais qualificados prontos para atendê-lo.',
  },
  {
    question: 'O atendimento é seguro?',
    answer: 'Sim, garantimos um ambiente seguro e acolhedor para todos os nossos pacientes.',
  },
  // Adicione mais perguntas e respostas conforme necessário
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Main
      title="FAQ"
      text="Aqui estão algumas perguntas frequentes sobre a Lacrei Saúde."
      image={
        <Image
          src="/assets/Medicine-bro.svg" // Substitua pelo caminho da imagem que você deseja usar
          width={555}
          height={421}
          alt="Imagem representativa de FAQ"
          priority={true}
        />
      }
    >
      <h2>Perguntas Frequentes</h2>
      <ul>
        {faqData.map((item, index) => (
          <li key={index}>
            <strong onClick={() => toggleAnswer(index)} style={{ cursor: 'pointer' }}>
              {item.question}
            </strong>
            {activeIndex === index && <p>{item.answer}</p>}
          </li>
        ))}
      </ul>
    </Main>
  );
}
