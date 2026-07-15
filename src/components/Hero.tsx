import { Phone, ArrowRight, ShieldCheck, Clock, Award, Truck } from 'lucide-react';
import { FOUNDING_YEAR, getYearsInBusiness } from '../lib/constants';
import frota from '../assets/frota.jpeg';

export default function Hero({ wpp }: { wpp: string }) {
  const years = getYearsInBusiness();

  return (
    <section id="inicio" className="relative bg-navy pt-24 pb-8 sm:pt-28 sm:pb-10 flex items-center overflow-hidden">
      {/* grade de pontos */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#1D84B5 1px, transparent 0)', backgroundSize: '30px 30px' }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-midblue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Esquerda */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <h1 className="font-display font-black text-pure text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6 uppercase">
              Sua operação logística {' '}
              <span className="text-orange">mais eficiente começa aqui.</span>
            </h1>

            <p className="text-midblue text-lg sm:text-xl font-medium leading-relaxed max-w-xl mb-8">
             Ajudamos empresas de diversos segmentos a transportar cargas com segurança, planejamento e pontualidade. Atuamos com cargas dedicadas, cargas fracionadas e soluções logísticas personalizadas em todo o território nacional.
                 </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href={wpp} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
                className="flex items-center justify-center space-x-3 bg-pure/10 hover:bg-pure/15 text-pure font-bold px-6 py-5 rounded-sm border border-pure/20 transition-all uppercase tracking-wider text-xs">
               <Phone className="w-5 h-5 fill-white" />
                <span>Saiba Mais</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-pure/10">
              {[
                { icon: ShieldCheck, title: 'Segurança em Cada Etapa', sub: 'Da coleta à entrega final' },
                { icon: Clock,       title: 'Pontualidade',          sub: 'Rotas planejadas com precisão' },
                { icon: Award,       title: `Desde ${FOUNDING_YEAR}`,  sub: 'Experiência no transporte rodoviário' },
              ].map(({ icon: Icon, title, sub }) => (
                <div key={title} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-midblue/10 border border-midblue/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <h4 className="text-pure font-bold text-sm leading-tight">{title}</h4>
                    <p className="text-pure/55 text-xs font-light">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Direita — painel visual placeholder (só a partir de lg; no mobile some) */}
          <div className="hidden lg:flex lg:col-span-5 h-[340px] sm:h-[380px] lg:h-[420px] items-center justify-center relative select-none">
            <div className="w-full h-full max-h-[400px] bg-navy/60 border border-midblue/20 p-6 rounded-lg shadow-2xl backdrop-blur-sm flex flex-col justify-between relative overflow-hidden">
              <div className="flex justify-between items-center pb-4 border-b border-pure/10">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-orange font-bold uppercase block">Operação Nacional</span>
                  <span className="text-xs text-pure/55 mt-0.5 block">Frota própria e monitorada</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center my-4 border border-dashed border-pure/10 rounded bg-navy/30 relative py-6 px-4">
                <div className="flex-1 overflow-hidden rounded-lg">
  <img
    src={frota}
    alt="Frota da S27 Grupo realizando transporte rodoviário de cargas"
    className="w-full h-full object-cover"
  />
</div>
              </div>

              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
