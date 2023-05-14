import { Controller, Param, Post } from '@nestjs/common';
import { DeclineLeadUsecase } from 'src/application/usecase/decline-lead/decline-lead.usecase';

@Controller()
export class DeclineLeadController {
  constructor(private readonly declineLeadUsecase: DeclineLeadUsecase) {}

  @Post('/leads/:id/decline')
  async declineLead(@Param('id') id: number): Promise<void> {
    await this.declineLeadUsecase.execute(id);
  }
}
