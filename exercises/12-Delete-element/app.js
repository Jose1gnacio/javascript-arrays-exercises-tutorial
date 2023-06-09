let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
function deletePerson (people2) {
    let filterPeople = people.filter((element) => element !== people2);
 return filterPeople
 }
 console.log(deletePerson('daniella'));
 console.log(deletePerson('juan'));
 console.log(deletePerson('emilio'));
 
 
