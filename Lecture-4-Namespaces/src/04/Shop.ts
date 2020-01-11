
export default abstract class Shop {
  constructor(protected shopName: string, protected shopAddress: string) {}
  abstract showInventory(): string
}
