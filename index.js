const musician = ["John Lennon"];
const instruments = ["Guitar"];



function theBeatlesPlay(musician,instruments) {
  let emptyArray = [];
  
  for(let i=0; i<musician.length; i++) {
    emptyArray.push(musician[i] + " plays " + instruments[i]);
  }
}
