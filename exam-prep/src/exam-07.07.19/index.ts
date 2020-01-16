import { IComputer, IProgram, IOpenedProgram } from "./interfaces";

class Computer implements IComputer {
  taskManager: IOpenedProgram[] = [];
  installedPrograms: IProgram[] = [];
  constructor(
    public ramMemory: number,
    public cpuGHz: number,
    public hddMemory: number
  ) {}

  installAProgram(name: string, requiredSpace: number) {
    if (this.hddMemory - requiredSpace < 0) {
      throw new Error("There is not enough space on the hard drive");
    }
    this.hddMemory -= requiredSpace;
    const program: IProgram = {
      name,
      requiredSpace,
      isOpen: false
    };
    this.installedPrograms.push(program);
    return program;
  }

  uninstallAProgram(name: string) {
    const currentProgram = this.installedPrograms.find(p => p.name === name);
    if (!currentProgram) {
      throw new Error("Control panel is not responding");
    }
    this.hddMemory += currentProgram.requiredSpace;
    this.installedPrograms = this.installedPrograms.filter(
      p => p !== currentProgram
    );

    return this.installedPrograms;
  }

  openAProgram(name: string) {
    const currentProgram = this.installedPrograms.find(p => p.name === name);
    if (!currentProgram) {
      throw new Error(`The ${name} is not recognized`);
    }
    if (currentProgram.isOpen) {
      throw new Error(`The ${name} is already open`);
    }
    const ramUsage = (currentProgram.requiredSpace / this.ramMemory) * 1.5;
    const cpuUsage = (currentProgram.requiredSpace / this.cpuGHz / 500) * 1.5;

    const totalRam = this.taskManager.reduce(
      (acc, curr) => acc + curr.ramUsage,
      0
    );
    const totalCPU = this.taskManager.reduce(
      (acc, curr) => acc + curr.cpuUsage,
      0
    );

    if (totalRam + ramUsage >= 100) {
      throw new Error(`${name} caused out of memory exception`);
    }
    if (totalCPU + cpuUsage >= 100) {
      throw new Error(`${name} caused out of cpu exception`);
    }
    const runProgram: IOpenedProgram = {
      name,
      ramUsage,
      cpuUsage
    };

    this.taskManager.push(runProgram);

    return runProgram;
  }

  taskManagerView() {
    if (this.taskManager.length === 0) {
      return "All running smooth so far";
    }
    return this.taskManager
      .map(
        x =>
          `Name - ${x.name} | Usage - CPU: ${x.cpuUsage.toFixed(
            0
          )}%, RAM: ${x.ramUsage.toFixed(0)}%`
      )
      .join("\n");
  }
}

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram("Word", 7300);
computer.installAProgram("Excel", 10240);
computer.installAProgram("PowerPoint", 12288);
computer.installAProgram("Solitare", 1500);

computer.openAProgram("Word");
computer.openAProgram("Excel");
computer.openAProgram("PowerPoint");
computer.openAProgram("Solitare");

console.log(computer.taskManagerView());
