import { Controller, Get } from '@nestjs/common';
import { LeadResult } from 'src/application/dto/lead-result.dto';
import { GetLeadsUsecase } from 'src/application/usecase/get-leads/get-leads.usecase';

@Controller()
export class GetLeadsController {
  constructor(private readonly getLeadsUsecase: GetLeadsUsecase) {}

  @Get('/leads/new')
  async getLeads(): Promise<LeadResult[]> {
    return await this.getLeadsUsecase.execute();
  }
}
