/* 
Класс Rectangle: Напишите класс Rectangle, который будет представлять прямоугольник с методами для вычисления его площади и периметра. Конструктор класса должен принимать длины двух сторон.
*/

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getP() {
    return (this.width + this.height) * 2;
  }

  showInfo() {
    const info = `Width: ${this.width}\nHeight: ${
      this.height
    }\nArea: ${this.getArea()}\nP: ${this.getP()}`;
    console.log(info);
  }
}

const rectangle = new Rectangle(10, 20);
rectangle.showInfo();
