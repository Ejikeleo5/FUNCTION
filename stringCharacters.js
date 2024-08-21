function characterClassification (str){
  let digitCount=0;
  let alphabetCount=0;
  let symbolCount=0;
  for(let a=0; a <str.length; a++){
    let char = str[a];
    if (char.match(/[0-9]/)){
      digitCount++;
    }
    else if (char.match(/[a-zA-Z]/)){
      alphabetCount++;
    }
    else{symbolCount++;}
  }
  return{
    totalcharacter: str.length,
    digits:digitCount,
    alphabets:alphabetCount,
    symbols:symbolCount
  };
}
let answer = characterClassification("Hello World123!");
console.log(answer)