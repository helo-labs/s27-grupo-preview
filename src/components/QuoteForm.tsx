import { useState, FormEvent } from 'react';
import { Send, MapPin, Package, Building2, User, Phone, FileText, Truck } from 'lucide-react';
import { QuoteFormState, ServiceType } from '../types';
import { WHATSAPP_NUMBER } from '../lib/whatsapp';

const SERVICE_OPTIONS: ServiceType[] = [
  'Transporte de Carga Fechada',
  'Carga Fracionada',
  'Logística Integrada / Armazenagem',
  'Outro / Não sei informar',
];

const initial: QuoteFormState = {
  origin: '', destination: '', serviceType: '', weightVolume: '',
  dimensions: '', companyName: '', contactName: '', contactPhone: '', notes: '',
};

type Errors = Partial<Record<keyof QuoteFormState, string>>;

function buildMessage(f: QuoteFormState): string {
  const lines = [
    'Olá, S27 Grupo! Gostaria de solicitar uma cotação de transporte.',
    '',
    '*Informações Técnicas do Transporte*',
    `Origem (coleta): ${f.origin}`,
    `Destino (entrega): ${f.destination}`,
    `Tipo de serviço: ${f.serviceType}`,
  ];
  if (f.weightVolume.trim()) lines.push(`Peso total / volume: ${f.weightVolume}`);
  if (f.dimensions.trim())   lines.push(`Medidas e cubagem: ${f.dimensions}`);
  lines.push('', '*Dados para Contato*', `Empresa: ${f.companyName}`, `Solicitante: ${f.contactName}`, `WhatsApp: ${f.contactPhone}`);
  if (f.notes.trim()) lines.push('', '*Observações / Instruções Especiais*', f.notes);
  return lines.join('\n');
}

export default function QuoteForm() {
  const [form, setForm] = useState<QuoteFormState>(initial);
  const [errors, setErrors] = useState<Errors>({});

  const set = (field: keyof QuoteFormState, value: string) => {
    setForm(p => ({ ...p, [field]: value }));
    if (errors[field]) setErrors(p => ({ ...p, [field]: undefined }));
  };

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.origin.trim())      e.origin      = 'Informe a cidade de origem.';
    if (!form.destination.trim()) e.destination = 'Informe a cidade de destino.';
    if (!form.serviceType)        e.serviceType = 'Selecione o tipo de serviço.';
    if (!form.companyName.trim()) e.companyName = 'Informe a razão social ou nome da empresa.';
    if (!form.contactName.trim()) e.contactName = 'Informe o nome do solicitante.';
    const digits = form.contactPhone.replace(/\D/g, '');
    if (!digits)          e.contactPhone = 'Informe um WhatsApp para contato.';
    else if (digits.length < 10) e.contactPhone = 'Informe um número válido com DDD.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage(form))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const input = (field: keyof QuoteFormState) =>
    `w-full bg-pure border rounded-lg px-4 py-3 text-sm text-navy placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange/40 ${
      errors[field] ? 'border-red-400' : 'border-navy/15 focus:border-orange'
    }`;

  return (
    <section id="cotacao" className="relative py-24 bg-navy border-t border-midblue/20 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-orange font-bold uppercase block mb-2">Informações Técnicas do Transporte </span>
          <h2 className="font-display font-black text-pure text-3xl sm:text-4xl tracking-tight mb-4 uppercase leading-tight">
            Solicite um orçamento personalizado
          </h2>
          <div className="w-16 h-1.5 bg-orange mx-auto rounded-sm mb-6" />
          <p className="text-pure/65 font-light">
            Informe os dados da operação e nossa equipe entrará em contato com uma proposta personalizada para a necessidade da sua empresa.
              </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-pure rounded-lg shadow-xl border border-navy/10 p-6 sm:p-10 space-y-10">

          {/* Rota e mercadoria */}
          <fieldset>
            <legend className="flex items-center space-x-2 font-display font-bold text-navy text-sm uppercase tracking-wider mb-5">
              <Truck className="w-4 h-4 text-orange" /><span>Rota e Mercadoria</span>
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="origin" className="block text-xs font-semibold text-navy mb-1.5">Cidade de Origem (Coleta) <span className="text-orange">*</span></label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input id="origin" type="text" value={form.origin} onChange={e => set('origin', e.target.value)} placeholder="Ex: São Paulo / SP" className={`${input('origin')} pl-10`} />
                </div>
                {errors.origin && <p className="text-red-500 text-xs mt-1">{errors.origin}</p>}
              </div>
              <div>
                <label htmlFor="destination" className="block text-xs font-semibold text-navy mb-1.5">Cidade de Destino (Entrega) <span className="text-orange">*</span></label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input id="destination" type="text" value={form.destination} onChange={e => set('destination', e.target.value)} placeholder="Ex: Belo Horizonte / MG" className={`${input('destination')} pl-10`} />
                </div>
                {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="serviceType" className="block text-xs font-semibold text-navy mb-1.5">Tipo de Serviço Operacional <span className="text-orange">*</span></label>
                <select id="serviceType" value={form.serviceType} onChange={e => set('serviceType', e.target.value)} className={input('serviceType')}>
                  <option value="" disabled>Selecione o tipo de serviço</option>
                  {SERVICE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>}
              </div>
              <div>
                <label htmlFor="weightVolume" className="block text-xs font-semibold text-navy mb-1.5">Peso Total / Volume da Carga</label>
                <div className="relative">
                  <Package className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input id="weightVolume" type="text" value={form.weightVolume} onChange={e => set('weightVolume', e.target.value)} placeholder="Ex: 1.200 kg / 4 volumes" className={`${input('weightVolume')} pl-10`} />
                </div>
              </div>
              <div>
                <label htmlFor="dimensions" className="block text-xs font-semibold text-navy mb-1.5">Medidas e Cubagem da Mercadoria</label>
                <div className="relative">
                  <Package className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input id="dimensions" type="text" value={form.dimensions} onChange={e => set('dimensions', e.target.value)} placeholder="Ex: 1,20m x 0,80m x 1,00m" className={`${input('dimensions')} pl-10`} />
                </div>
              </div>
            </div>
          </fieldset>

          {/* Dados de contato */}
          <fieldset>
            <legend className="flex items-center space-x-2 font-display font-bold text-navy text-sm uppercase tracking-wider mb-5">
              <Building2 className="w-4 h-4 text-orange" /><span>Dados para Contato</span>
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label htmlFor="companyName" className="block text-xs font-semibold text-navy mb-1.5">Razão Social / Nome da Empresa <span className="text-orange">*</span></label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input id="companyName" type="text" value={form.companyName} onChange={e => set('companyName', e.target.value)} placeholder="Nome da sua empresa" className={`${input('companyName')} pl-10`} />
                </div>
                {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
              </div>
              <div>
                <label htmlFor="contactName" className="block text-xs font-semibold text-navy mb-1.5">Nome do Solicitante (Contato) <span className="text-orange">*</span></label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input id="contactName" type="text" value={form.contactName} onChange={e => set('contactName', e.target.value)} placeholder="Seu nome completo" className={`${input('contactName')} pl-10`} />
                </div>
                {errors.contactName && <p className="text-red-500 text-xs mt-1">{errors.contactName}</p>}
              </div>
              <div>
                <label htmlFor="contactPhone" className="block text-xs font-semibold text-navy mb-1.5">WhatsApp Comercial para Contato <span className="text-orange">*</span></label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input id="contactPhone" type="tel" value={form.contactPhone} onChange={e => set('contactPhone', e.target.value)} placeholder="(11) 91234-5678" className={`${input('contactPhone')} pl-10`} />
                </div>
                {errors.contactPhone && <p className="text-red-500 text-xs mt-1">{errors.contactPhone}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="notes" className="block text-xs font-semibold text-navy mb-1.5">Instruções Especiais / Observações de Risco</label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <textarea id="notes" value={form.notes} onChange={e => set('notes', e.target.value)}
                    placeholder="Ex: carga frágil, necessidade de agendamento, restrição de horário, etc."
                    rows={4} className={`${input('notes')} pl-10 resize-none`} />
                </div>
              </div>
            </div>
          </fieldset>

          <button type="submit"
            className="w-full flex items-center justify-center space-x-3 bg-orange hover:bg-oranhov text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 uppercase tracking-wider text-sm">
            <Send className="w-5 h-5" />
            <span>Enviar Solicitação pelo WhatsApp</span>
          </button>
          <p className="text-center text-xs text-gray-400">Ao enviar, abriremos o WhatsApp com uma mensagem já preenchida com os dados acima.</p>
        </form>
      </div>
    </section>
  );
}
