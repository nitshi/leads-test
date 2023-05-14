import { Inject, Injectable } from '@nestjs/common';
import { ILeadRepository } from 'src/application/repository/i-lead.repository';
import { Lead } from 'src/domain/lead';

@Injectable()
export class AcceptLeadUsecase {
  constructor(
    @Inject('ILeadRepository')
    private readonly leadRepository: ILeadRepository,
  ) {}

  public async execute(id: number): Promise<void> {
    const leadProps = await this.leadRepository.findById(id);
    // TODO: create DomainErrror
    if (!leadProps) throw new Error('Lead not found');
    const lead = Lead.fromProps(leadProps);
    lead.accept();
    await this.leadRepository.update(lead.data);
  }
}
