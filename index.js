// Part 1 & 2: Parse CSV and Store in 2D Array
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Split rows by newline character
const rows = csvData.split('\n');

// Convert rows to arrays of columns
const dataArray = rows.map(row => row.split(','));

// Get number of columns dynamically from header row
const numOfColumns = dataArray[0].length;

console.log('Two-dimensional array:', dataArray);


// Part 3: Transform Data to Array of Objects
const headers = dataArray[0].map(header => header.toLowerCase());
const dataObjects = dataArray.slice(1).map(row => {
    const obj = {};
    row.forEach((value, index) => {
        obj[headers[index]] = value;
    });
    return obj;
});

console.log('Array of Objects:', dataObjects);


// Part 4: Manipulating Data
// Remove the last element
dataObjects.pop();

// Insert new object at index 1
const newObject1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
dataObjects.splice(1, 0, newObject1);

// Add new object at the end
const newObject2 = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
dataObjects.push(newObject2);

console.log('Manipulated Data:', dataObjects);

// Calculate average age
let totalAge = 0;
dataObjects.forEach(person => {
    totalAge += parseInt(person.age);
});
const averageAge = totalAge / dataObjects.length;

console.log('Average Age:', averageAge);