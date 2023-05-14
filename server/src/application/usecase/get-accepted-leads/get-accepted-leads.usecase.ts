import { Inject, Injectable } from '@nestjs/common';
import { AcceptedLeadResult } from 'src/application/dto/accepted-lead-result.dto';
import { LeadMapper } from 'src/application/mapper/lead.mapper';
import { ILeadRepository } from 'src/application/repository/i-lead.repository';
import { LeadStatus } from 'src/domain/lead';

@Injectable()
export class GetAcceptedLeadsUsecase {
  constructor(
    @Inject('ILeadRepository')
    private readonly leadRepository: ILeadRepository,
  ) {}

  public async execute(): Promise<AcceptedLeadResult[]> {
    const leads = await this.leadRepository.findAll(LeadStatus.ACCEPTED);
    return leads.map((lead) => LeadMapper.toAcceptedLeadResult(lead));
  }
}
