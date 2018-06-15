class Rectangle {
  constructor(length, width) {
   this.length = length;
   this.width = width;
  }
  getArea() {
  	return this.length * this.width;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length,length);
  }
}

const tst = new Square(4);
console.log(tst.getArea());