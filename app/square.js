const Rectangle = require('./rect.js');

class Square extends Rectangle {
  constructor(length) {
    super(length,length);
  }
}

const tst = new Square(4);
console.log(tst.getArea());