import { Module } from '@nestjs/common';
import { GetLeadsController } from './presentation/api/get-leads/get-leads.controller';
import { GetLeadsUsecase } from './application/usecase/get-leads/get-leads.usecase';
import { LeadRepository } from './repository/lead.repository';
import { GetAcceptedLeadsController } from './presentation/api/get-accepted-leads/get-accepted-leads.controller';
import { GetAcceptedLeadsUsecase } from './application/usecase/get-accepted-leads/get-accepted-leads.usecase';
import { AcceptLeadUsecase } from './application/usecase/accept-lead/accept-lead.usecase';
import { DeclineLeadUsecase } from './application/usecase/decline-lead/decline-lead.usecase';
import { AcceptLeadController } from './presentation/api/accept-lead/accept-lead.controller';
import { DeclineLeadController } from './presentation/api/decline-lead/decline-lead.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database',
      port: 3306,
      username: 'root',
      password: 'leads',
      database: 'leads',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [
    GetLeadsController,
    GetAcceptedLeadsController,
    AcceptLeadController,
    DeclineLeadController,
  ],
  providers: [
    GetLeadsUsecase,
    GetAcceptedLeadsUsecase,
    AcceptLeadUsecase,
    DeclineLeadUsecase,
    {
      provide: 'ILeadRepository',
      useClass: LeadRepository,
    },
  ],
})
export class AppModule {}
