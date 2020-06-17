//5 - Challenge
const fs = require('fs');

const getNotes = () => {
    return 'Got Notes!'
}

//Local Functions

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

//Exported Functions

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })
    if (duplicateNotes.length===0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('New note added!');
    }else{
        console.log('Note already exists!');
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })

    if(notes.length == notesToKeep.length){
        console.log('Note with that title doesn\'t exist!')
    }else{
        saveNotes(notesToKeep);
        console.log('Note with title "' + title + '" deleted!')
    }
}

const listNotes = () => {
    // const notes = loadNotes();
    // for(note in notes){
    //     console.log(note.title);
    // }
} 

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes
}