class Family {
  public family: [string, number][] = [];

  addNewMember(member: [string, number]): void {
    this.family.push(member);
  }
  oldestMember(): string {
    const oldest = this.family.sort((a, b) => b[1] - a[1])[0];
    const [name, age] = oldest;
    return `The oldest member is ${name} and is ${age} years old.`
  }
}

let member = new Family();
member.addNewMember(["Ivan", 13]);
member.addNewMember(["Todor", 45]);
member.addNewMember(["Georgi", 37]);
member.addNewMember(["Viktor", 30]);
console.log(member.oldestMember());
