export interface IComputer {
  ramMemory: number;
  cpuGHz: number;
  hddMemory: number;
  taskManager: IOpenedProgram[];
  installedPrograms: IProgram[];
  installAProgram(name: string, requiredSpace: number): IProgram;
  uninstallAProgram(name: string): IProgram[];
  openAProgram(name: string): IOpenedProgram;
  taskManagerView(name: string): string;
}

export interface IProgram {
  name: string;
  requiredSpace: number;
  isOpen: boolean;
}

export interface IOpenedProgram {
  name: string;
  ramUsage: number;
  cpuUsage: number;
}
