import { Injectable } from '@nestjs/common';
import { ILeadRepository } from 'src/application/repository/i-lead.repository';
import { LeadProps, LeadStatus } from 'src/domain/lead';
import { Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';

@Injectable()
export class LeadRepository implements ILeadRepository {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  public async findAll(status: LeadStatus): Promise<LeadProps[]> {
    const result = await this.connection.query(
      `SELECT
          *,
          jobs.id as id,
          suburbs.name as suburb_name,
          categories.name as category_name,
          suburbs.id as suburb_id,
          categories.id as category_id
        FROM jobs
        INNER JOIN categories
          ON jobs.category_id = categories.id
        INNER JOIN suburbs
          ON jobs.suburb_id = suburbs.id
        where jobs.status = ?
      `,
      [status],
    );
    const leads = result.map((lead) => {
      return {
        id: lead.id,
        status: lead.status,
        suburb: {
          id: lead.suburb_id,
          name: lead.suburb_name,
          postcode: lead.postcode,
        },
        category: {
          id: lead.category_id,
          name: lead.category_name,
        },
        contact_name: lead.contact_name,
        contact_phone: lead.contact_phone,
        contact_email: lead.contact_email,
        description: lead.description,
      };
    });
    return leads;
  }

  public async findById(id: number): Promise<LeadProps> {
    const result: LeadProps[] = await this.connection.query(
      'SELECT * FROM jobs where id = ?',
      [id],
    );
    return result.length > 0 ? result[0] : null;
  }

  public async update(lead: LeadProps): Promise<void> {
    await this.connection.query('UPDATE jobs SET status = ? WHERE id = ?', [
      lead.status,
      lead.id,
    ]);
  }
}
