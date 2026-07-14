import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Evita que o navegador restaure a posição de rolagem da visita anterior
// (comportamento padrão do Chrome/Firefox ao dar F5), garantindo que o
// site sempre abra no topo da página.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}
if (window.location.hash) {
  window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);

createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>
);
