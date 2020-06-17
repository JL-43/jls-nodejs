const fs = require('fs');

const book = {
    title: 'A Man Called Ove',
    author: 'Fredrik Backman'
}

//object -> json string
const bookJSON = JSON.stringify(book);
console.log(bookJSON)

//json string -> object
const bookParsed = JSON.parse(bookJSON);
console.log(bookParsed)

// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title)