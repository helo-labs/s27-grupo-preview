import { useState } from 'react';
import { Truck, Warehouse, Boxes, CheckCircle2, ChevronRight, X, ArrowRight, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';
import { getWhatsAppLinkWithMessage } from '../lib/whatsapp';
import { FOUNDING_YEAR, getYearsInBusiness } from '../lib/constants';

const services: ServiceItem[] = [
  {
    id: 'transporte',
    title: 'Transporte de Cargas',
    description: 'Transporte rodoviário de cargas para empresas que precisam de entregas seguras, dentro do prazo e com planejamento logístico.',
    longDescription: 'Realizamos operações de transporte rodoviário de cargas com planejamento de rotas, acompanhamento durante todo o percurso e foco na entrega dentro do prazo. Trabalhamos com cargas dedicadas para garantir mais segurança, eficiência e confiabilidade em cada operação.',
    iconName: 'truck',
    bullets: ['Cargas fechadas e dedicadas', 'Rotas planejadas estrategicamente', 'Acompanhamento em todo o trajeto'],
  },
  {
    id: 'logistica',
    title: 'Logística Integrada',
    description: 'Planejamos e gerenciamos toda a operação logística da sua empresa, reduzindo custos, aumentando a eficiência e melhorando a previsibilidade das entregas.',
    longDescription: 'Transporte e logística caminham juntos, mas não são a mesma coisa. A logística envolve planejamento, organização, rastreamento e gestão de todo o processo. Cuidamos dessa cadeia de ponta a ponta para reduzir custos, evitar atrasos e entregar mais valor à sua operação.',
    iconName: 'warehouse',
    bullets: ['Planejamento de ponta a ponta', 'Controle e organização de armazenagem', 'Gestão integrada da operação'],
  },
  {
    id: 'fracionadas',
    title: 'Cargas Fracionadas',
    description: 'Ideal para empresas que precisam transportar pequenos volumes com menor custo, mantendo a mesma segurança e controle operacional.',
    longDescription: 'Reunimos diferentes remessas no mesmo veículo, mantendo organização e controle rigorosos em cada lote. É a opção ideal para quem precisa transportar volumes menores com mais economia, sem comprometer prazos ou a integridade da mercadoria.',
    iconName: 'boxes',
    bullets: ['Compartilhamento inteligente de espaço', 'Mais economia para volumes menores', 'Organização rigorosa por remessa'],
  },
];

function Icon({ name, className }: { name: string; className?: string }) {
  const cls = className ?? 'w-8 h-8';
  if (name === 'truck')    return <Truck className={cls} />;
  if (name === 'warehouse') return <Warehouse className={cls} />;
  return <Boxes className={cls} />;
}

export default function Services() {
  const [selected, setSelected] = useState<ServiceItem | null>(null);
  const years = getYearsInBusiness();

  return (
    <section id="servicos" className="relative bg-pure pt-16 sm:pt-20 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Cards — todos com o mesmo estilo (destaque em azul-marinho), totalmente sobre o fundo claro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((svc, i) => (
            <button key={svc.id}
              onClick={() => setSelected(svc)}
              className="group bg-pure p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-2 cursor-pointer text-left border border-navy/5 border-t-4 border-t-orange">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-offwh/50 group-hover:bg-orange/10 rounded-xl flex items-center justify-center transition-all border border-offwh">
                    <Icon name={svc.iconName} className="w-8 h-8 text-orange" />
                  </div>
                  <span className="text-xs font-mono font-bold text-orange opacity-40 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                </div>
                <h3 className="font-display font-black text-xl text-navy uppercase mb-3 group-hover:text-orange transition-colors">{svc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{svc.description}</p>
              </div>
              <div className="flex items-center text-orange font-bold text-xs transition-colors pt-4 border-t border-offwh uppercase tracking-wider mt-4">
                <span>Ver detalhes</span>
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>

        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-orange font-bold uppercase block mb-2">Nossa Infraestrutura</span>
          <h2 className="font-display font-black text-navy text-3xl sm:text-4xl tracking-tight mb-4 uppercase leading-tight">
            Como garantimos nossa eficiência de entrega
          </h2>
          <div className="w-16 h-1.5 bg-orange mx-auto rounded-sm" />
          <p className="text-gray-600 mt-6 font-light">
            Estruturamos rotas estratégicas em todo o território nacional para oferecer o menor tempo de percurso,
            com segurança e total acompanhamento da sua carga.
          </p>
        </div>

        {/* Destaques operacionais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-navy rounded-lg p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-midblue/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-flex items-center bg-orange/15 text-orange px-3 py-1 rounded-full text-xs font-mono font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> Compromisso desde {FOUNDING_YEAR}
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-pure mb-6">
              Sua carga acompanhada em todas as etapas da operação
            </h3>
            <div className="space-y-4">
              {[
                { bold: 'Planejamento inteligente das rotas:', text: 'Organizamos as rotas para reduzir trechos em vazio e manter a agilidade da operação.' },
                { bold: 'Monitoramento contínuo da carga:', text: 'Mantemos comunicação direta para que você saiba exatamente em que etapa sua carga está.' },
                { bold: 'Segurança da mercadoria:', text: 'Da embalagem ao transporte, trabalhamos com atenção a cada detalhe para preservar a integridade da sua mercadoria.' },
              ].map(({ bold, text }) => (
                <div key={bold} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                  <p className="text-pure/75 text-sm"><strong className="text-pure">{bold}</strong> {text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-pure/10">
              <a href={getWhatsAppLinkWithMessage('Olá, S27 Grupo! Gostaria de saber mais sobre as operações logísticas de vocês.')}
                target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
                className="inline-flex items-center space-x-2 text-orange hover:text-oranhov font-bold text-sm transition-colors group">
                <span>Fale com a nossa equipe</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 relative z-10">
            {[
              { value: `+${years}`, label: 'Anos de Mercado', sub: `Fundado em ${FOUNDING_YEAR}` },
              { value: 'FOCO', label: 'Priorizando a Segurança', sub: 'Em cada etapa do processo' },
              { value: '3', label: 'Soluções Logísticas', sub: 'Adaptadas a cada operação' },
            ].map(({ value, label, sub }) => (
              <div key={label} className="bg-pure/5 p-6 rounded-lg border border-pure/10 text-center backdrop-blur-sm">
                <span className="block text-4xl font-display font-extrabold text-pure mb-1">{value}</span>
                <span className="text-xs font-mono font-bold text-orange uppercase">{label}</span>
                <p className="text-[11px] text-pure/50 mt-1 font-light">{sub}</p>
              </div>
            ))}
            <div className="bg-pure/10 border border-pure/10 p-6 rounded-lg text-center text-pure flex flex-col justify-center backdrop-blur-sm">
              <span className="block text-2xl font-display font-extrabold text-orange mb-1">FROTA</span>
              <span className="text-xs tracking-wider uppercase font-light text-pure/80">Moderna e Própria</span>
              <span className="text-[9px] font-mono text-midblue font-bold mt-2">DIVERSAS CATEGORIAS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}>
          <div className="bg-pure rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-navy/10 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
            <button onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-navy p-2 hover:bg-offwh rounded-full transition-all" aria-label="Fechar">
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-orange/15 rounded-lg flex items-center justify-center text-orange flex-shrink-0">
                <Icon name={selected.iconName} className="w-7 h-7 text-orange" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-extrabold text-orange tracking-widest uppercase block">S27 Grupo</span>
                <h4 className="font-display font-extrabold text-xl sm:text-2xl text-navy leading-tight">{selected.title}</h4>
              </div>
            </div>
            <p className="text-gray-800 font-medium text-sm mb-3">{selected.description}</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">{selected.longDescription}</p>
            <div className="bg-offwh/40 p-4 rounded-xl border border-offwh mb-6 space-y-2.5">
              {selected.bullets.map(b => (
                <div key={b} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0" />
                  <span className="text-xs text-navy font-semibold">{b}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={getWhatsAppLinkWithMessage(`Olá, S27 Grupo! Gostaria de saber mais sobre o serviço de ${selected.title}.`)}
                target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
                className="flex-1 flex items-center justify-center space-x-2 bg-orange hover:bg-oranhov text-white font-bold py-3 px-4 rounded-xl transition-all">
                <Truck className="w-4 h-4" />
                <span>Falar sobre este serviço</span>
              </a>
              <button onClick={() => setSelected(null)}
                className="sm:px-6 py-3 bg-offwh text-navy font-semibold rounded-xl hover:bg-offwh/70 transition-colors">
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
