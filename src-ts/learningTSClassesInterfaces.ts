interface IGeometricFigure {
  area: () => number;
  perimeter: () => number;
}

export class Square implements IGeometricFigure {
  side: number;
  constructor(side: number) {
    this.side = side;
  }
  area = () => this.side * this.side;
  perimeter = () => this.side * 4;
}

export class Circle implements IGeometricFigure {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  area = () => Math.pow(this.radius, 2) * Math.PI;
  perimeter = () => 2 * Math.PI * this.radius;
}
