function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
 }
 
 function trianglePerimeter(x1, y1, x2, y2, x3, y3) {
    const side1 = distance(x1, y1, x2, y2);
    const side2 = distance(x2, y2, x3, y3);
    const side3 = distance(x3, y3, x1, y1);
    return side1 + side2 + side3;
 }
 
 function triangleArea(x1, y1, x2, y2, x3, y3) {
    return Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;
 
 }
 
 console.log("Testing trianglePerimeter()...");
 let perimeter = trianglePerimeter(1, 0, 2, 4, 4, 3);
 console.log("Perimeter = " + perimeter);
 
 console.log("Testing triangleArea()...");
 let area = triangleArea(1, 0, 2, 4, 4, 3);
 console.log("Area = " + area);
 
 
 
 // Do NOT remove the following line:
 export { trianglePerimeter, triangleArea };