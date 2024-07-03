function printSum(x, y) {
    const num1 = parseFloat(x);
    const num2 = parseFloat(y);
 
    if (isNaN(num1) && isNaN(num2)) {
       console.log(`'${x}' and '${y}' are not numbers.`);
    } else if (isNaN(num1)) {
       console.log(`'${x}' is not a number.`);
    } else if (isNaN(num2)) {
       console.log(`'${y}' is not a number.`);
    } else {
       const sum = num1 + num2;
       console.log(`Sum is ${sum}.`);
    }   
 }
 
 console.log("Testing printSum()...");
 
 printSum(3, 6);            // 9
 printSum(3.5, 6.1);        // 9.6
 printSum("hello", 6);      // 'hello' is not a number
 printSum(10, "hi");        // 'hi' is not a number
 printSum("hello", "hi");   // 'hello' and 'hi' are not numbers
 
 
 // Do NOT remove the following line
 export default printSum;