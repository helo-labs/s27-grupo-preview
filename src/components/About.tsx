import { useState } from 'react';
import { Calendar, Shield, Award, Users, MapPin } from 'lucide-react';
import { FOUNDING_YEAR } from '../lib/constants';

const milestones = [
  { year: String(FOUNDING_YEAR), title: 'Início da nossa história', desc: 'Início das operações como transportadora, com foco em responsabilidade e atendimento próximo ao cliente.' },
  { year: 'Trajetória', title: 'Equipe especializada', desc: 'Construção de uma equipe capacitada para lidar com os desafios diários da cadeia logística.' },
  { year: 'Frota', title: 'Frota moderna', desc: 'Investimento contínuo em veículos preparados para diferentes tipos de carga e operação.' },
  { year: 'Hoje', title: 'Soluções completas', desc: 'Transporte de cargas, logística integrada e cargas fracionadas para empresas de diversos portes.' },
];

type Tab = 'missao' | 'valores' | 'frota';

export default function About() {
  const [tab, setTab] = useState<Tab>('missao');

  return (
    <section id="sobre-nos" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-midblue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Esquerda */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-orange font-bold uppercase block mb-2">Quem Somos</span>
              <h2 className="font-display font-black text-pure text-3xl sm:text-4xl tracking-tight uppercase leading-tight mb-3">
                Experiência, segurança e compromisso em cada operação logística.
              </h2>
              <div className="w-16 h-1.5 bg-orange rounded-sm" />
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <p className="font-medium text-pure text-lg">
                A S27 oferece soluções em transporte rodoviário de cargas e logística para empresas que buscam segurança, pontualidade e eficiência operacional.
              </p>
              <p className="text-pure/65 font-light">
                Com equipe especializada, frota própria e planejamento logístico, atendemos operações de diferentes portes com foco na eficiência, na segurança da carga e no cumprimento dos prazos.
              </p>
              <p className="text-pure/65 font-light">
                Acompanhamos cada etapa da operação, da coleta à entrega, garantindo mais previsibilidade, transparência e tranquilidade para nossos clientes.
              </p>
            </div>

            {/* Abas */}
            <div className="bg-pure border border-navy/10 p-6 rounded-lg shadow-xl">
              <div className="flex border-b border-offwh/80 mb-6 space-x-2 sm:space-x-4 overflow-x-auto">
                {(['missao', 'valores', 'frota'] as Tab[]).map(t => {
                  const labels: Record<Tab, string> = { missao: 'Nossa Missão', valores: 'Nossos Valores', frota: 'Nossa Frota' };
                  return (
                    <button key={t} onClick={() => setTab(t)}
                      className={`pb-2 font-display font-bold text-xs sm:text-sm transition-all relative whitespace-nowrap ${tab === t ? 'text-orange' : 'text-gray-500 hover:text-navy'}`}>
                      {labels[t]}
                      {tab === t && <span className="absolute bottom-[-13px] left-0 right-0 h-[2.5px] bg-orange rounded-full" />}
                    </button>
                  );
                })}
              </div>

              <div className="min-h-[100px] text-sm">
                {tab === 'missao' && (
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Simplificar a sua logística:</strong> proporcionar tranquilidade, confiança e excelência em cada etapa do processo, para que você foque no crescimento do seu negócio.</p>
                    <p className="text-gray-400 italic text-xs">"Cuidamos da sua operação para que você não precise se preocupar com o caminho."</p>
                  </div>
                )}
                {tab === 'valores' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: Shield, label: 'Responsabilidade', desc: 'Cuidado rigoroso com cada carga.' },
                      { icon: Award,  label: 'Excelência',        desc: 'Padrão elevado em cada entrega.' },
                      { icon: Users,  label: 'Profissionalismo',  desc: 'Equipe especializada e capacitada.' },
                      { icon: MapPin, label: 'Transparência',     desc: 'Comunicação clara durante toda a operação.' },
                    ].map(({ icon: Ic, label, desc }) => (
                      <div key={label} className="flex items-start space-x-2">
                        <Ic className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-navy text-xs uppercase font-mono">{label}</h4>
                          <p className="text-gray-600 text-xs mt-0.5">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {tab === 'frota' && (
                  <div className="space-y-3">
                    <p className="text-gray-700">Dispomos de frota própria e moderna, preparada para atender diferentes perfis de carga e necessidades operacionais.</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {['Caminhões Baú', 'Vans & Veículos Urbanos', 'Carretas para Grande Cubagem'].map(v => (
                        <span key={v} className="bg-navy text-pure text-[10px] uppercase font-mono font-bold px-2.5 py-1 rounded">{v}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Direita — linha do tempo */}
          <div className="lg:col-span-5">
            <div className="bg-pure/[0.06] backdrop-blur-sm text-pure rounded-lg p-8 shadow-xl relative overflow-hidden border border-pure/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange/10 rounded-full blur-2xl" />
              <h3 className="font-display font-bold text-xl mb-8 flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-orange" />
                <span>Nossa Caminhada</span>
              </h3>
              <div className="relative border-l border-midblue/30 ml-3 space-y-8 pb-4">
                {milestones.map((m, i) => (
                  <div key={i} className="relative pl-8 group">
                    <span className="absolute -left-[6.5px] top-1.5 w-3 h-3 bg-orange rounded-full border border-navy flex items-center justify-center transition-all group-hover:scale-125">
                      <span className="w-1 h-1 bg-white rounded-full" />
                    </span>
                    <span className="font-mono text-xs font-extrabold text-orange tracking-wider bg-midblue/15 px-2 py-0.5 rounded">{m.year}</span>
                    <h4 className="font-display font-bold text-md mt-2 text-pure group-hover:text-orange transition-colors">{m.title}</h4>
                    <p className="text-pure/55 text-xs font-light mt-1 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-pure/10 text-center">
                <p className="text-[11px] font-mono tracking-widest text-midblue uppercase font-bold">S27 Grupo — Compromisso em Cada Detalhe</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
