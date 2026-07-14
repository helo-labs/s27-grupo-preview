export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  bullets: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type ServiceType =
  | 'Transporte de Carga Fechada'
  | 'Carga Fracionada'
  | 'Logística Integrada / Armazenagem'
  | 'Outro / Não sei informar';

export interface QuoteFormState {
  origin: string;
  destination: string;
  serviceType: ServiceType | '';
  weightVolume: string;
  dimensions: string;
  companyName: string;
  contactName: string;
  contactPhone: string;
  notes: string;
}
