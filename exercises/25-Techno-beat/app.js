// Add your code here
function lyricsGenerator(array) {
    let dj = " "
    let tres = 0    
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] == 0) {
            dj += "Boom ";
        } else if (array[i] == 1){
            dj += "Drop the base ";
            tres += 1
        } else if (tres == 3) {
            dj += "¡¡¡break the base!!! "
        };        
    };
    return dj;
};

// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))