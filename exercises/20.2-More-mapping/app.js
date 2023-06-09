let myNumbers = [23,234,345,4356234,243,43,56,2];

// your code here
function myFunction(num) {
    let value = num * 3
    return value;
}
let newArray = myNumbers.map(myFunction)


console.log(newArray);