export class ConstructorOrder {
  Name: string = '';
  AssignedOrder: number = 0;
  Position: number = 0;
  Driver: string = '';

  public constructor(assignedOrder: number) {
    this.AssignedOrder = assignedOrder;
  }
}