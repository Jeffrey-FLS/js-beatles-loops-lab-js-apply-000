const musician = ["John Lennon"];
const instruments = ["guitar"];



function theBeatlesPlay(musician,instruments) {
  let emptyArray = [];
  
  for(let i=0; i<musician.length; i++) {
    emptyArray.push(musician[i] + instruments[i]);
  }
}
