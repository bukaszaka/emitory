export class Emitter {
  constructor(public id: number,
  public name: string,
  public height: number,
  public power: number,
  public icon_type: IconType) {}
}

export enum IconType {

  Circle = "Koło",
  Square = "Kwadrat",
  Triangle = "Trójkąt",
  Rectangle = "Prostokąt"
}