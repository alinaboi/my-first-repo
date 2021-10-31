//Write a JavaScript program  to calculate the area and  perimeter  of a rectangle. Rectangle should  be an object with properties width  and  height  and methods  getArea()  and getPerimeter();

let width = 5;
let height = 10;

let rectangle = new Object();
rectangle.width = 5;
rectangle.height = 10;
rectangle.getArea = function () {
    const calculationArea = (rectangle.width * rectangle.height);
    return (calculationArea);
}
rectangle.getPerimeter = function () {
    const calculationPerimeter = ((rectangle.width + rectangle.height) * 2);
    return (calculationPerimeter);
}

console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());