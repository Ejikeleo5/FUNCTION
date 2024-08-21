function sortMixedArray (arr){
let arrayContainingNumbers =arr.filter(item=>typeof item ==='number');
arrayContainingNumbers.sort((a,b)=>a-b);
return arrayContainingNumbers;
}
let mixedArray = [5,10,1,2,3,"Number", {size: 12}, '6'];
let sortedArray =sortMixedArray(mixedArray);
console.log(sortedArray);