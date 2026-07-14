import { Instagram, Facebook, Phone, Mail, ShieldCheck, ChevronRight } from 'lucide-react';
import { FOUNDING_YEAR, INSTAGRAM_URL, FACEBOOK_URL } from '../lib/constants';
import logo from '../assets/logo.png';

export default function Footer({ wpp }: { wpp: string }) {
  const year = new Date().getFullYear();
  const nav = ['Início', 'Serviços', 'Sobre Nós', 'Dúvidas', 'Solicitar Cotação'];
  const hrefs = ['#inicio', '#servicos', '#sobre-nos', '#duvidas', '#cotacao'];
  const ops = ['Transporte de Cargas', 'Logística Integrada', 'Cargas Fracionadas'];

  return (
    <footer className="bg-navy pt-20 pb-10 border-t border-midblue/20 text-pure">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-pure/10">

          {/* Marca */}
          <div className="md:col-span-4 space-y-6">
            <a href="#inicio" className="flex items-center space-x-3 group">
              {/* Logo */}
        <a href="#inicio"
  className="group flex-shrink-0"
  aria-label="S27 Grupo Logística"
>
  <img
    src={logo}
    alt="S27 Grupo Logística"
    className="h-10 w-auto transition-transform group-hover:scale-105"
  />
        </a>
            </a>
            <p className="text-pure/60 text-sm leading-relaxed font-light">
              Desde {FOUNDING_YEAR}, oferecendo soluções logísticas de alto padrão, adaptadas às necessidades de cada cliente.
              Garantindo entregas seguras, ágeis e eficientes.
            </p>
            <div className="flex items-center space-x-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
                className="inline-flex text-pure/60 hover:text-orange p-2 hover:bg-pure/5 rounded-full border border-pure/10 hover:border-orange/30 transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
                className="inline-flex text-pure/60 hover:text-orange p-2 hover:bg-pure/5 rounded-full border border-pure/10 hover:border-orange/30 transition-all" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs text-orange uppercase tracking-wider font-mono">Navegação</h4>
            <ul className="space-y-2.5">
              {nav.map((name, i) => (
                <li key={name}>
                  <a href={hrefs[i]} className="text-pure/70 hover:text-orange text-sm transition-colors flex items-center group">
                    <ChevronRight className="w-3.5 h-3.5 text-orange opacity-40 group-hover:opacity-100 mr-1.5" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Operações */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-xs text-orange uppercase tracking-wider font-mono">Operações</h4>
            <ul className="space-y-2.5">
              {ops.map(o => (
                <li key={o} className="text-pure/70 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-orange/60 rounded-full mr-2" />{o}
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs text-orange uppercase tracking-wider font-mono">Contato S27</h4>
            <ul className="space-y-3.5">
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-orange flex-shrink-0" />
                <a href={wpp} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
                  className="text-pure/70 hover:text-orange font-light transition-colors">(11) 91161-2386</a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-orange flex-shrink-0" />
                <span className="text-pure/70 font-light">contato@s27grupo.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-pure/50 font-light gap-3">
          <p>© {year} S27 Grupo. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-2 text-orange">
          </div>
        </div>
      </div>
    </footer>
  );
}
