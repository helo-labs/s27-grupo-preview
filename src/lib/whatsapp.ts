export const WHATSAPP_NUMBER = '5511911612386';
const base = `https://wa.me/${WHATSAPP_NUMBER}`;

export function getDefaultWhatsAppLink(): string {
  return `${base}?text=${encodeURIComponent('Olá, S27 Grupo! Acessei o site e gostaria de mais informações sobre soluções logísticas.')}`;
}

export function getWhatsAppLinkWithMessage(msg: string): string {
  return `${base}?text=${encodeURIComponent(msg)}`;
}
