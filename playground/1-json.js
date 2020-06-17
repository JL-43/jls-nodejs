const fs = require('fs');

// const book = {
//     title: 'A Man Called Ove',
//     author: 'Fredrik Backman'
// }

// //object -> json string
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON)

// //json string -> object
// const bookParsed = JSON.parse(bookJSON);
// console.log(bookParsed)

// // fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title)

//challenge

const personBuffer = fs.readFileSync('1-json.json'); //get data (not human friendly)
const personJSON = personBuffer.toString(); //convert data into json string
const person = JSON.parse(personJSON); //convert json string into object
person.name = 'JL'
person.age = 23
const personJSONNew = JSON.stringify(person);
fs.writeFileSync('1-jsonnew.json', personJSONNew);