"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Shape_1 = require("./Shape");
var shape = new Shape_1.Shape(10, 20);
var circle = new Circle_1.Circle(5, 10, 20);
var rectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
//declare an array of shapes initially empty
var shapes = [];
//add shapes to the array
shapes.push(shape);
shapes.push(circle);
shapes.push(rectangle);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape_1 = shapes_1[_i];
    console.log(shape_1.getInfo());
}
