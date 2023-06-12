let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here

function rNames(arr) {
     let onlyR = []
     arr.filter(function(names) {        
        if (names.charAt(0) === 'R') {
            onlyR.push(names);
        };
        
    });
    return onlyR;
};
let resultingNames = rNames(allNames);

console.log(resultingNames);