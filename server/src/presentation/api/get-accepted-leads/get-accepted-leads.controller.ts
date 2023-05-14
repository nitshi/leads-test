import { Controller, Get } from '@nestjs/common';
import { AcceptedLeadResult } from 'src/application/dto/accepted-lead-result.dto';
import { GetAcceptedLeadsUsecase } from 'src/application/usecase/get-accepted-leads/get-accepted-leads.usecase';

@Controller()
export class GetAcceptedLeadsController {
  constructor(
    private readonly getAcceptedLeadsUsecase: GetAcceptedLeadsUsecase,
  ) {}

  @Get('/leads/accepted')
  async getAcceptedLeads(): Promise<AcceptedLeadResult[]> {
    return await this.getAcceptedLeadsUsecase.execute();
  }
}
