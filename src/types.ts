export type Page = 'home' | 'methodology' | 'certification' | 'consultants' | 'companies' | 'faq' | 'contact';

export interface LeadData {
  name: string;
  email: string;
  company: string;
  role: string;
  country: string;
  interestType: 'individual' | 'consultancy' | 'company' | 'institution' | 'partnership';
  context: string;
}
