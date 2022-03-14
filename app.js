let rectButton = $("#rectInsert").click(function () {
  new Rectangle($("#rectLength").val(), $("#rectWidth").val());
});
let squareButton = $("#squareInsert").click(function () {
  new Square($("#squareSideLength").val());
});
let circleButton = $("#circleInsert").click(function () {
  new Circle($("#circleRadius").val());
});
let triangleButton = $("#triangleInsert").click(function () {
  new Triangle($("#triangleHeight").val());
});

//! add event listeners for all buttons
//! get input validation from video
//! double click = delete shape
//! single click = console.log all values, area, perimeter, etc.after it works display it on screen

class Shape {
  constructor(length, width) {
    this.length = length;
    this.width = width;
    this.top;
    this.left;
    //this.div = $("div");
    this.shape = document.createElement("div");
    this.shape.className = "shape";
    //this.shape.style.backgroundColor = "cyan";
    this.shape.style.height = `${this.length}px`;
    this.shape.style.width = `${this.width}px`;
    $("#canvas").append(document.body.appendChild(this.shape));
    this.shape.style.top = `${Math.floor(Math.random() * 600 - this.length)}px`; //sometime this.length is greater than math.random so it goes off the side of the canvas
    this.shape.style.left = `${Math.floor(Math.random() * 600 - this.width)}px`;
    $(this.shape).dblclick(() => this.shape.remove());
  }
}

//new Shape(150, 200);
//new Shape(150, 200);

//! get div, get styling, get random position, put it in canvas

//! check for isNaN to make sure a number is being inputed

class Rectangle extends Shape {
  constructor(length, width) {
    super(length, width);
    this.shape.classList.add("rectangle");
    $(this.shape).click(() => console.log("i am a square"));
  } //get $('').val for Rectangle input and add event listener to spawn rectangle button
}

////new Rectangle(100, 200);
// returns an error saying width is not defined

class Square extends Shape {
  constructor(side) {
    super(side, side);
    this.length = this.side;
    this.shape.classList.add("square");
  }
}

//new Square(10, 10);

class Circle extends Shape {
  constructor(radius) {
    super(radius, radius);
    this.shape.classList.add("circle");
  }
}
//new Circle(10, 10);

class Triangle extends Shape {
  constructor(height) {
    super(height, height);
    this.shape.classList.add("triangle");

    //this.shape.style.borderWidth = `0px`;
    //this.shape.style.borderBottomWidth = `${this.height}px`;
    this.shape.style.borderRight = `${this.length}px transparent solid`;
    this.shape.style.borderBottom = `${this.length}px yellow solid`;
    //this.shape.style.borderBottomColor = "yellow";
  }
}

//new Triangle(20, 20);
