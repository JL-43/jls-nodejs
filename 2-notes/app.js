const fs = require('fs')

//from the video
fs.writeFileSync('notes.txt', 'My name is JL')

//from the challenge
fs.appendFileSync('notes.txt', ' and I like to code')