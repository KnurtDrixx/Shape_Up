let rectButton = $("#rectInsert").click(function () {
  new Rectangle(Number($("#rectLength").val()), Number($("#rectWidth").val()));
});
let squareButton = $("#squareInsert").click(function () {
  new Square(Number($("#squareSideLength").val()));
});
let circleButton = $("#circleInsert").click(function () {
  new Circle(Number($("#circleRadius").val()));
});
let triangleButton = $("#triangleInsert").click(function () {
  new Triangle(Number($("#triangleHeight").val()));
});

//! add event listeners for all buttons
//! get input validation from video
//! double click = delete shape
//! single click = console.log all values, area, perimeter, etc.after it works display it on screen

class Shape {
  constructor(length, width) {
    this.name;
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
    this.audio = new Audio(`Sound.mp4`);
    this.shape.style.top = `${Math.floor(Math.random() * (600 - this.length))}px`; //sometime this.length is greater than math.random so it goes off the side of the canvas
    this.shape.style.left = `${Math.floor(Math.random() * (600 - this.width))}px`;

    $(this.shape).dblclick(() => {
      $(`#shapeNameInput`).val(`Ervin Howell`);
      $(`#widthInput`).val(`As wide as he needs to be`);
      $(`#heightInput`).val(`3.5 Andrews Tall`);
      $(`#radiusInput`).val(`How rude of you to ask`);
      $(`#areaInput`).val(`Infinite`);
      $(`#Perimeter`).val(`None of that nonsense`);
      this.shape.remove();
    });
    //$(this.shape).click(() => console.log(`this is a ${this.name}`));
  }

  getStats() {}
}

//new Shape(150, 200);
//new Shape(150, 200);

//! get div, get styling, get random position, put it in canvas

//! check for isNaN to make sure a number is being inputed

class Rectangle extends Shape {
  constructor(length, width) {
    super(length, width);
    this.name = `Rectangle`;
    this.shape.classList.add("rectangle");

    $(this.shape).click(() => {
      $(`#shapeNameInput`).val(this.name);
      $(`#widthInput`).val(this.width);
      $(`#heightInput`).val(this.length);
      $(`#radiusInput`).val(`N/A`);
      $(`#areaInput`).val(this.length * this.width);
      $(`#Perimeter`).val(2 * this.length + 2 * this.width);
      this.audio.play();
      console.log(
        `i am a ${this.name}, my width is ${this.width}, my height is ${this.length}, my radius is N/A, my area is ${this.length * this.width}, my perimeter is ${2 * this.length + 2 * this.width}`
      );
    });
  } //get $('').val for Rectangle input and add event listener to spawn rectangle button
}

////new Rectangle(100, 200);
// returns an error saying width is not defined

class Square extends Shape {
  constructor(side) {
    super(side, side);
    this.side = side;
    this.length = this.side;
    this.shape.classList.add("square");
    this.name = `Square`;
    $(this.shape).click(() => {
      $(`#shapeNameInput`).val(this.name);
      $(`#widthInput`).val(this.side);
      $(`#heightInput`).val(this.side);
      $(`#radiusInput`).val(`N/A`);
      $(`#areaInput`).val(this.side * this.side);
      $(`#Perimeter`).val(2 * this.side + 2 * this.side);
      audio.play();
      console.log(`i am a ${this.name}, my width is ${this.side}, my height is ${this.side}, my radius is N/A, my area is ${this.side * this.side}, my perimeter is ${2 * this.side + 2 * this.side}`);
    });
  }
}

//new Square(10, 10);

class Circle extends Shape {
  constructor(radius) {
    super(radius * 2, radius * 2);
    this.shape.classList.add("circle");
    this.name = `Circle`;
    this.radius = radius;
    $(this.shape).click(() => {
      $(`#shapeNameInput`).val(this.name);
      $(`#widthInput`).val(this.width);
      $(`#heightInput`).val(this.length);
      $(`#radiusInput`).val(this.radius);
      $(`#areaInput`).val(Math.PI * this.radius ** 2);
      $(`#Perimeter`).val(2 * Math.PI * this.radius);
      audio.play();
      console.log(
        `i am a ${this.name}, my width is ${this.width}, my height is ${this.length}, my radius is ${this.radius}, my area is ${Math.PI * this.radius ** 2}, my perimeter is ${
          2 * Math.PI * this.radius
        }`
      );
    });
  }
}
//new Circle(10, 10);

class Triangle extends Shape {
  constructor(height) {
    super(height, height);
    this.shape.classList.add("triangle");
    this.name = `Triangle`;

    //this.shape.style.borderWidth = `0px`;
    //this.shape.style.borderBottomWidth = `${this.height}px`;
    this.shape.style.borderRight = `${this.length}px transparent solid`;
    this.shape.style.borderBottom = `${this.length}px yellow solid`;
    //this.shape.style.borderBottomColor = "yellow";
    $(this.shape).click(() => {
      $(`#shapeNameInput`).val(this.name);
      $(`#widthInput`).val(this.width);
      $(`#heightInput`).val(this.length);
      $(`#radiusInput`).val(`N/A`);
      $(`#areaInput`).val((this.length * this.width) / 2);
      $(`#Perimeter`).val(this.length + this.width * 2);
      audio.play();
      console.log(
        `i am a ${this.name}, my width is ${this.width}, my height is ${this.length}, my radius is N/A, my area is ${(this.length * this.width) / 2}, my perimeter is ${this.length + this.width * 2}`
      );
    });
  }
}

//new Triangle(20, 20);
let audio = new Audio(`Sound.mp4`);
