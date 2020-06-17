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

// const chalk = require('chalk');
// const getNotes = require('./notes.js');
// const command = process.argv[2];
// const title = process.argv[3];

// if(command === 'add'){
//     console.log('Adding note with title ' + title)
// }else if(command === 'remove'){
//     console.log('Removing note')
// }

//9

const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0')

//Create add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
})

//Create remove
yargs.command({
    command: 'remove',
    describe: 'Removes the selected note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})

//Challenge - create list and read

//Create list
yargs.command({
    command: 'list',
    describe: 'Lists the notes',
    handler: () => {
        notes.listNotes();
    }
})

//Create read
yargs.command({
    command: 'read',
    describe: 'Reads selected note',
    handler: () => {
        console.log('Read note');
    }
})

// add, remove, list, read
yargs.parse()
// console.log(yargs.argv)

