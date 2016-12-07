// for the counter
var counter = document.getElementById('counter');

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

}

var killSwitch = f

var willy = document.getElementById('add_note');

willy.addEventListener('click', addStickyNote);

/* Start here */
var counter = document.getElementById('counter');


var tasksTodo = document.querySelectorAll('li').length;

counter.innerHTML=tasksTodo;




