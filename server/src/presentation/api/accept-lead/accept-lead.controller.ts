import { Controller, Param, Post } from '@nestjs/common';
import { AcceptLeadUsecase } from 'src/application/usecase/accept-lead/accept-lead.usecase';

@Controller()
export class AcceptLeadController {
  constructor(private readonly acceptLeadUsecase: AcceptLeadUsecase) {}

  @Post('/leads/:id/accept')
  async acceptLead(@Param('id') id: number): Promise<void> {
    await this.acceptLeadUsecase.execute(id);
  }
}
