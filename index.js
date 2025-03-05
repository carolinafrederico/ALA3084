// PART 1  – REFACTORING OLD CODE 
// Loop through all numbers from 1 to 100.
// let n = 0;
// while (n <= 100) {
//     console.log(n);{
//         n++
//     }
// }
// for (let n = 0; n <= 100; n++){
//     console.log(n);
// }
// EXPANDING FUNCIONALITY

let array = ""

const inputStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
  const strRows = inputStr.split("\n");
  for (let i = 0; i <= strRows.length-1; i++) {
	const cell = strRows[i].split(",");
	console.log(cell);
  }
