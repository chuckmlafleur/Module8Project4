function sortEvens(numArray) {
    let evenNumbers = [];

    for (let num of numArray) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }

    evenNumbers.sort((a, b) => a - b);

    return evenNumbers;
}

console.log("Testing sortEvens()...");
let nums = [4, 2, 9, 1, 8];
let evenNums = sortEvens(nums);
console.log(evenNums);


// Do NOT remove the following line:
export default sortEvens;