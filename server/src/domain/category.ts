export interface CategoryProps {
  id: number;
  name: string;
  parent?: number;
}

export class Category {
  private props: CategoryProps;

  private constructor(props: CategoryProps) {
    this.props = props;
  }

  public static fromProps(props: CategoryProps): Category {
    return new Category(props);
  }

  public get data(): CategoryProps {
    return this.props;
  }
}
