class Person2 {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
      
const person2 = new Person2("Jane");

console.log(person2.getName()); // person.name isn't accessible from outside the class since it's private

//extends....

interface Shape {
  getArea: () => number;
}
      
class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}
      
class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }
  // getArea gets inherited from Rectangle
}

const mySq = new Square(20);

console.log(mySq.getArea());