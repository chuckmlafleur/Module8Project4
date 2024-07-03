function drawTriangle(triangleSize) {
    for (let i = 1; i <= triangleSize; i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            line += '*';
        }
        console.log(line);
    }   
}
console.log("Testing drawTriangle()...");
// TODO: Test drawTriangle() with different arguments
drawTriangle(4);
// Do NOT remove the following line
export default drawTriangle;