let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here

let odd = [];
let even = [];

function mergeTwoList(arr) {
    let entero = arr.filter((num) => Number.isInteger(num));
    
    entero.forEach((num) => {
        if (num % 2 == 0) {
            even.push(num)
        } else {
            odd.push(num)
        }
    });

    return odd.concat(even);
    
};
console.log(mergeTwoList(list_of_numbers));