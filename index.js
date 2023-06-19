class Shape {
  calculateArea() {
    throw new Error('Method calculateArea() must be implemented');
  }
}

// Rectangle class (inherits from Shape)
class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  calculateArea() {
    return this.length * this.width;
  }
}

// Circle class (inherits from Shape)
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Square class (inherits from Rectangle)
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

// Triangle class (inherits from Shape)
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return 0.5 * this.base * this.height;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const shapeSelect = document.getElementById("shape-select");
  const inputContainer = document.getElementById("input-container");
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const calculateBtn = document.getElementById("calculate-btn");
  const areaResult = document.getElementById("area-result");
  const shapeTitle = document.getElementById("shape-title");

  shapeSelect.addEventListener("change", function () {
    const selectedShape = shapeSelect.value;

    // Reset input fields and hide input container
    input1.value = "";
    input2.value = "";
    inputContainer.style.display = "none";

    if (selectedShape === "circle") {
      input1.placeholder = "Radius";
      input2.style.display = "none";
    } else if (selectedShape === "square") {
      input1.placeholder = "Side";
      input2.style.display = "none";
    } else if (selectedShape === "rectangle") {
      input1.placeholder = "Length";
      input2.placeholder = "Width";
      input2.style.display = "inline-block";
    } else if (selectedShape === "triangle") {
      input1.placeholder = "Base";
      input2.placeholder = "Height";
      input2.style.display = "inline-block";
    }

    inputContainer.style.display = "flex"; // Show input container
  });

  input1.addEventListener("input", function () {
    calculateBtn.style.display = "flex"; // Show calculate button
    areaResult.textContent = ""; // Clear area result
  });

  input2.addEventListener("input", function () {
    calculateBtn.style.display = "flex"; // Show calculate button
    areaResult.textContent = ""; // Clear area result
  });

  calculateBtn.addEventListener("click", function () {
    const selectedShape = shapeSelect.value;
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);

    let shape;
    let area;

    if (selectedShape === "circle") {
      shape = new Circle(value1);
      area = shape.calculateArea();
      shapeTitle.textContent = "Circle";
    } else if (selectedShape === "rectangle") {
      shape = new Rectangle(value1, value2);
      area = shape.calculateArea();
      shapeTitle.textContent = "Rectangle";
    } else if (selectedShape === "square") {
      shape = new Square(value1);
      area = shape.calculateArea();
      shapeTitle.textContent = "Square";
    } else if (selectedShape === "triangle") {
      shape = new Triangle(value1, value2);
      area = shape.calculateArea();
      shapeTitle.textContent = "Triangle";
    }

    areaResult.textContent = "Area: " + area;
  });
});
