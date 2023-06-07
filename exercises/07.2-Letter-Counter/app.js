let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
let letters = par.split(" ").join("").toLowerCase();

for (let i = 0; i < letters.length; i++) {
    let moreLetters = letters[i];
  
  if (counts[moreLetters]) {
    counts[moreLetters] += 1;
  } else {
    counts[moreLetters] = 1;
  }
    
}
console.log(counts);