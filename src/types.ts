export type Page = 'home' | 'about' | 'methodology' | 'services' | 'contact';

export interface ContactFormData {
  fullName: string;
  companyName: string;
  industry: string;
  employeeCount: string;
  annualRevenue: string;
  subject: string;
  email: string;
}
