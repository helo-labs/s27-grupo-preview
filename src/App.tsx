import { useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Faq from './components/Faq';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import { getDefaultWhatsAppLink } from './lib/whatsapp';

export default function App() {
  const wpp = getDefaultWhatsAppLink();

  // Garante que toda visita comece no topo, mesmo se o navegador tentar
  // pular para uma âncora (#servicos, #duvidas etc.) deixada de uma
  // navegação anterior.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-pure text-gray-800 relative">
      <Header wpp={wpp} />
      <main>
        <Hero wpp={wpp} />
        <Services />
        <About />
        <Faq />
        <QuoteForm />
      </main>
      <Footer wpp={wpp} />

      {/* Botão flutuante WhatsApp */}
      <a
        href={wpp}
        target="_blank"
        rel="noopener noreferrer"
        referrerPolicy="no-referrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-orange hover:bg-oranhov rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageSquare className="w-7 h-7 text-white fill-current relative z-10" />
      </a>
    </div>
  );
}
