
// for the counter
var counter = document.getElementById('counter');

var getNumStickyNotes = function() {
  return document.querySelectorAll('li').length;
}

// creates a li
var addStickyNote = function(event) {
  var chklist = document.getElementById('chklist');
  var sticki = document.createElement('li');
// delcare
  var span = document.createElement('span');
  var edit = document.createElement('div');
// give attributes
  sticki.setAttribute('class', 'stiki');
  edit.setAttribute('contenteditable', 'true');
  span.setAttribute('class', 'remove');
// add the kill switch
  span.innerHTML='x';
// connect
  sticki.appendChild(span);
  sticki.appendChild(edit);
  chklist.appendChild(sticki);

  counter.innerHTML = getNumStickyNotes();
  return 'something but this return value isnt even going to be used for anything';

  // span.addEventListener('click', removeStiki)
};

// var removeStiki = function(event) {
//   getElementById('remove').remove;
// }

var createSticky = document.getElementById('add_note');

createSticky.addEventListener('click', addStickyNote);


/* Page loaded, so we're here in the code. */







