/** Ano de fundação da empresa. Usado para calcular tempo de mercado dinamicamente. */
export const FOUNDING_YEAR = 1995;

/** Retorna quantos anos de mercado a empresa tem, recalculado a cada ano automaticamente. */
export function getYearsInBusiness(): number {
  return new Date().getFullYear() - FOUNDING_YEAR;
}

export const INSTAGRAM_URL = 'https://www.instagram.com/slogisticabrasil';
export const FACEBOOK_URL = 'https://www.facebook.com/people/S27-Logíst%C3%ADca-Brasil/61580671109328/';
