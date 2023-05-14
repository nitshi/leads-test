export interface SuburbProps {
  id: number;
  name: string;
  postcode: string;
}

export class Suburb {
  private props: SuburbProps;

  private constructor(props: SuburbProps) {
    this.props = props;
  }

  public static fromProps(props: SuburbProps): Suburb {
    return new Suburb(props);
  }

  public get data(): SuburbProps {
    return this.props;
  }
}
