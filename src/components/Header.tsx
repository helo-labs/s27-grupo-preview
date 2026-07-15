import { useState, useEffect } from 'react';
import { Instagram, Facebook, Phone, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_URL, FACEBOOK_URL } from '../lib/constants';
import logo from '../assets/logo.png';
import Burger from './Burger';

const links = [
  { name: 'Início', href: '#inicio' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Quem Somos', href: '#sobre-nos' },
  { name: 'Perguntas Frequentes', href: '#duvidas' },
  { name: 'Solicitar Cotação', href: '#cotacao' },
];

function SocialLinks({ iconClassName, wrapperClassName }: { iconClassName: string; wrapperClassName: string }) {
  return (
    <>
      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
        className={wrapperClassName} aria-label="Instagram">
        <Instagram className={iconClassName} />
      </a>
      <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
        className={wrapperClassName} aria-label="Facebook">
        <Facebook className={iconClassName} />
      </a>
    </>
  );
}

export default function Header({ wpp }: { wpp: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      scrolled ? 'bg-navy/95 backdrop-blur-md py-2.5 shadow-lg border-midblue/30' : 'bg-navy py-3.5 border-midblue/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio"
  className="group flex-shrink-0"
  aria-label="S27 Grupo Logística"
>
  <img
    src={logo}
    alt="S27 Grupo Logística"
    className="h-14 w-auto transition-transform group-hover:scale-105"
  />
        </a>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-medium uppercase tracking-widest">
          {links.map(l => (
            <a key={l.name} href={l.href} className="text-pure/80 hover:text-orange transition-colors">{l.name}</a>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <SocialLinks
            iconClassName="w-5 h-5"
            wrapperClassName="text-pure/70 hover:text-orange transition-colors p-1.5 hover:bg-pure/5 rounded-full"
          />
          <div className="w-px h-5 bg-pure/10" />
          <a href={wpp} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
            className="flex items-center space-x-2 bg-orange hover:bg-oranhov text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md transition-all hover:-translate-y-0.5 group">
            <Phone className="w-4 h-4 fill-white" />
            <span>Fale com a gente</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile icons */}
        <div className="flex items-center space-x-2 lg:hidden">
          <SocialLinks iconClassName="w-4 h-4" wrapperClassName="text-pure/70 hover:text-orange transition-colors p-1.5" />
          <button onClick={() => setOpen(!open)} className="text-pure p-2 hover:bg-pure/10 rounded-lg transition-colors" aria-label="Menu" aria-expanded={open} id="mobile-menu-toggle">
            <Burger open={open} />
          </button>
        </div>
      </div>
    </header>

    {/* Drawer mobile — fora do <header> de propósito: o header ganha
        backdrop-blur ao rolar a página, e um ancestral com backdrop-filter
        vira containing block de descendentes "fixed", o que espremia esse
        menu dentro da caixinha do header em vez de cobrir a tela toda. */}
      <div className={`fixed inset-0 top-16 z-40 bg-navy lg:hidden transition-all duration-300 ease-in-out overflow-y-auto
        ${open ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
        <div className="px-4 py-8 space-y-4">
          <nav className="flex flex-col space-y-1">
            {links.map(l => (
              <a key={l.name} href={l.href} onClick={() => setOpen(false)}
                className="text-pure/80 hover:text-orange font-medium text-lg py-3 border-b border-pure/5 flex justify-between items-center transition-colors">
                <span>{l.name}</span>
                <span className="text-orange/40">›</span>
              </a>
            ))}
          </nav>
          <div className="pt-4 flex flex-col space-y-4">
            <div className="flex justify-center space-x-4">
              <SocialLinks
                iconClassName="w-6 h-6"
                wrapperClassName="flex justify-center text-pure/60 hover:text-orange transition-colors bg-pure/5 p-3 rounded-full"
              />
            </div>
            <a href={wpp} onClick={() => setOpen(false)} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
              className="flex items-center justify-center space-x-3 w-full bg-orange hover:bg-oranhov text-white font-bold py-4 rounded-xl shadow-md transition-all">
              <Phone className="w-5 h-5 fill-white" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
