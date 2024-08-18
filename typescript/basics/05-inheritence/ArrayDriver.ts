import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";


let shape = new Shape(10, 20);
let circle = new Circle(5, 10, 20);
let rectangle = new Rectangle(0, 0, 3, 7);

//declare an array of shapes initially empty
let shapes: Shape[] = [];

//add shapes to the array
shapes.push(shape);
shapes.push(circle);
shapes.push(rectangle);

for (let shape of shapes) {
    console.log(shape.getInfo());
}