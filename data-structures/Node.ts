export class Node<T> {
  public next: Node<T> = (null as any);
  public previous: Node<T> = (null as any);
  constructor(public value: T) {}
}
