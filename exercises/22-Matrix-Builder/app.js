// Code goes here
function matrixBuilder(num) {
    let newArray = [];
    for (let j = 0; j < num; j++) {
      let arrayOne = [];
      for (let i = 0; i < num; i++) {
          let arrayTwo = Math.round(Math.random());
          arrayOne.push(arrayTwo);
      };
      newArray.push(arrayOne);
    };
    return newArray;
};
// do not change anything from this line down
console.log(matrixBuilder(5))