import { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { FaqItem } from '../types';
import { getWhatsAppLinkWithMessage } from '../lib/whatsapp';

const faqs: FaqItem[] = [
  {
    question: 'Qual a diferença entre carga fracionada e carga fechada?',
    answer: 'O transporte fracionado é ideal para cargas menores: diferentes remessas dividem o mesmo veículo, reduzindo custos ao compartilhar o espaço. Já a carga fechada oferece exclusividade do veículo, mais agilidade e maior controle. Analisamos sua demanda para indicar a modalidade mais adequada.',
  },
  {
    question: 'Como funciona o acompanhamento da minha carga?',
    answer: 'Mantemos comunicação direta durante toda a operação, da coleta à entrega final. Trabalhamos com planejamento de rotas e organização rigorosa para minimizar imprevistos e garantir previsibilidade na entrega.',
  },
  {
    question: 'A S27 Grupo atende todo o território nacional?',
    answer: 'Sim. Atendemos empresas em diferentes regiões do Brasil com operações planejadas de acordo com cada necessidade logística, sempre priorizando segurança, eficiência e cumprimento dos prazos.',
  },
  {
    question: 'Como solicito uma cotação para minha empresa?',
    answer: 'Preencha o formulário de cotação abaixo com os dados da rota e da mercadoria, ou fale diretamente com nossa equipe pelo WhatsApp. Retornamos com uma proposta adequada à sua operação.',
  },
  {
    question: 'Quais tipos de mercadoria vocês transportam?',
    answer: 'Atendemos diferentes perfis de carga corporativa. Para mercadorias que exigem cuidado especial, contamos com processos bem definidos e equipe capacitada para garantir segurança e controle em cada etapa.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="py-24 bg-pure">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-orange font-bold uppercase block mb-2">Perguntas Frequentes</span>
          <h2 className="font-display font-black text-navy text-3xl sm:text-4xl tracking-tight mb-4 uppercase leading-tight">Tire suas dúvidas</h2>
          <div className="w-16 h-1.5 bg-orange mx-auto rounded-sm" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question}
                className={`border rounded-lg overflow-hidden transition-all duration-300 ${isOpen ? 'border-orange/40 bg-offwh/15 shadow-sm' : 'border-navy/10 bg-pure'}`}>
                <button onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 gap-4" aria-expanded={isOpen}>
                  <span className="font-display font-bold text-navy text-base sm:text-lg">{faq.question}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-orange text-white' : 'bg-offwh text-navy'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-navy rounded-lg p-8 sm:p-10">
          <h3 className="font-display font-bold text-pure text-xl sm:text-2xl mb-3">Não encontrou o que procurava?</h3>
          <p className="text-pure/70 text-sm mb-6 max-w-md mx-auto">Fale com nossa equipe e tire suas dúvidas sobre a operação ideal para o seu negócio.</p>
          <a href={getWhatsAppLinkWithMessage('Olá, S27 Grupo! Tenho uma dúvida sobre os serviços de vocês.')}
            target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
            className="inline-flex items-center space-x-2 bg-orange hover:bg-oranhov text-white font-bold px-6 py-3.5 rounded-lg shadow-md transition-all hover:-translate-y-0.5">
            <MessageCircle className="w-5 h-5" />
            <span>Falar com um Especialista</span>
          </a>
        </div>
      </div>
    </section>
  );
}
