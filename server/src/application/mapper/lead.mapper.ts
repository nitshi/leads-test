import { LeadProps } from 'src/domain/lead';
import { LeadResult } from '../dto/lead-result.dto';
import { AcceptedLeadResult } from '../dto/accepted-lead-result.dto';

export class LeadMapper {
  static toLeadResult(lead: LeadProps): LeadResult {
    const { contact_phone, contact_email, price, ...rest } = lead;
    return rest;
  }

  static toAcceptedLeadResult(lead: LeadProps): AcceptedLeadResult {
    return lead;
  }
}
