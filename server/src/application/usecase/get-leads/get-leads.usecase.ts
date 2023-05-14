import { Inject, Injectable } from '@nestjs/common';
import { LeadResult } from 'src/application/dto/lead-result.dto';
import { LeadMapper } from 'src/application/mapper/lead.mapper';
import { ILeadRepository } from 'src/application/repository/i-lead.repository';
import { LeadStatus } from 'src/domain/lead';

@Injectable()
export class GetLeadsUsecase {
  constructor(
    @Inject('ILeadRepository')
    private readonly leadRepository: ILeadRepository,
  ) {}

  public async execute(): Promise<LeadResult[]> {
    const leads = await this.leadRepository.findAll(LeadStatus.NEW);
    return leads.map((lead) => LeadMapper.toLeadResult(lead));
  }
}
