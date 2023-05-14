import { CategoryProps } from './category';
import { SuburbProps } from './suburb';

export enum LeadStatus {
  NEW = 'new',
  ACCEPTED = 'accepted',
  DECLINED = 'declined',
}

export interface LeadProps {
  id: number;
  status: LeadStatus;
  suburb: SuburbProps;
  category: CategoryProps;
  contact_name: string;
  contact_phone?: string;
  contact_email?: string;
  price?: number;
  description: string;
  created_at: Date;
  updated_at: Date;
}

export class Lead {
  private props: LeadProps;

  private constructor(props: LeadProps) {
    this.props = props;
  }

  public static fromProps(props: LeadProps): Lead {
    return new Lead(props);
  }

  public get data(): LeadProps {
    return this.props;
  }

  public accept() {
    const props = {
      ...this.props,
      status: LeadStatus.ACCEPTED,
    };
    this.props = props;
  }

  public decline() {
    const props = {
      ...this.props,
      status: LeadStatus.DECLINED,
    };
    this.props = props;
  }
}
