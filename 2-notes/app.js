//1

//const fs = require('fs')
// //from the video
// fs.writeFileSync('notes.txt', 'My name is JL')

// //from the challenge
// fs.appendFileSync('notes.txt', ' and I like to code')

//2
// require('./utils.js');
// const name = 'JL'
// console.log(name);

//3

// name = require('./utils.js');
// console.log(name);

//4

// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)

//5 - Challenge

// const getNotes = require('./notes.js')
// console.log(getNotes())

//6 

// const validator = require('validator');
// const getNotes = require('./notes.js');
// const msg = getNotes();
// console.log(msg);
// console.log(validator.isURL('https://jlreyes.com'));

//7 - Challenge

// const chalk = require('chalk');
// console.log(chalk.green.bold.inverse('Success!'));

//8

const chalk = require('chalk');
const getNotes = require('./notes.js');
const command = process.argv[2];

if(command === 'add'){
    console.log('Adding note')
}else if(command === 'remove'){
    console.log('Removing note')
}

