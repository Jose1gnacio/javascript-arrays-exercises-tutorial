let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
function wikiWoko(arr) {
    let newArray = []
    arr.map(function(num){
        if (num == 1) {
            newArray.push("wiki");
        } else if (num == 0){
            newArray.push("woko");
        }        
       
    });
    return newArray;
}
console.log(wikiWoko(theBools));