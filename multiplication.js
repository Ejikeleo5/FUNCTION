function MultiplicationTable (number){
  let table = [];
  for(let r =1; r<=number; r++){
    let row = [];
  for (let c=1; c<=number; c++){
    row.push(r*c);
  }
  table.push(row);
  }
  console.log ("multiplication Table:");
  for (let r =0; r< table.length; r++){
    console.log(table[r].join("  "));
  }
}
MultiplicationTable(5);
