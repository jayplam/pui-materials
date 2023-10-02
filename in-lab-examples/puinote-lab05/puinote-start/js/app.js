let notecards = new Set();

class Notecard {
  constructor(imgURL, title, body) {
    this.noteImgURL = imgURL;
    this.noteTitle = title;
    this.noteBody = body;
    this.element = null;
  }
}

function addNewNote(imgURL, title, body) {
  let notecard = new Notecard(imgURL, title, body);
  notecards.add(notecard);
  return notecard;
}

function createNewNotecard (notecard) {
  console.log('creating new notecard');
  console.log(notecard);
  let template = document.getElementById('notecard-template');
  let clone = template.content.cloneNode(true);
  let notecardClone = clone.querySelector('.notecard');

  let title = notecardClone.querySelector('.note-title');
  let body = notecardClone.querySelector('.note-body');
  let img = notecardClone.querySelector('.note-thumbnail');

  title.innerText = notecard.noteTitle;
  body.innerText = notecard.noteBody;
  img.src = notecard.noteImgUrl;

  notecardList.appendChild(notecardClone);

  notecard.element = notecardClone;
}

function deleteNote(notecard) {

  notecard.element.remove();
}

let notecardOne = addNewNote('assets/warhol-frog.png', 'title 1', 'body 1');
let notecardTwo = addNewNote('assets/warhol-tiger.png', 'title 2', 'body 2');

for (let notecard of notecards) {
  createNewNotecard(notecard);
}