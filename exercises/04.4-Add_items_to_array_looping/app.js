let arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************
for (let index = 10; index > 0; index--) {

    let number = Math.floor(Math.random()*10)
    arr.push(number)
    
};
console.log(arr)