import { LeadProps } from 'src/domain/lead';

export type LeadResult = Omit<
  LeadProps,
  'contact_phone' | 'contact_email' | 'price'
>;
