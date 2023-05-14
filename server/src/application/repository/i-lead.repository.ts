import { LeadProps, LeadStatus } from 'src/domain/lead';

export interface ILeadRepository {
  findAll(status: LeadStatus): Promise<LeadProps[]>;
  findById(id: number): Promise<LeadProps>;
  update(lead: LeadProps): Promise<void>;
}
