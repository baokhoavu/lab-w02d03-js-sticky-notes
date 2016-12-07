<!DOCTYPE html>
<html>
<head>
  <title></title>
  <style>
    .pink {
      background: pink;
    }
    .purple {
      background: purple;
    }
    /*bottom will win when both styles are applied*/
  </style>
</head>
<body>
<div class=>
  <a href="http://reddit.com">Raaaddit</a>
</div>
<script src=main.js></script>
</body>
</html>

console.log('afternon');

var link = document.querySelector('a');

link.addEventListener('click', function(event) {
  // change body's background to pink;
  // by adding a class
  // stop the default DOM behavior
  // like links or forms...
  event.preventDefault();
  // stop the event from bubbling up the DOM
  event.stopPropagation();
  console.log('click');
  // window.location = 'http://google.com'
  // this is a function ---v
  document.querySelector('body').classList.add('pink');
})

var div = document.querySelector('div');
div.addEventListener('click', function(event) {
  // event.preventDefault();
  // this is a property ---v
  document.body.classList.add('purple');
})
// add a second event listener
// to the div
// when it's clicked
// make the background purple


<!DOCTYPE html>
<html>
  <head>
    <title>Doing JS Stuff</title>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' href='style.css'>
  </head>
  <body>
      <label for='item'>Checklist stuff</label>
      <input class='new-todo' type='text' size='40'><br>
    <ul class='todos'></ul>

    <p>Click to remove this item from the list</p>
    <div>
      Items: <div class='counter'>0</div>
      <!-- Finished: <div class='complete'>0</div> -->

    </div>
    <script src=main.js></script>
  </body>
</html>

<!-- line through finished list items and -->
<!-- counter to raise min/max based on completeled list items -->
<!-- X turns bigger and red when you hover over and want to click it -->
<!-- viewport to make this mobile friendly in scaling -->

// set the targeted class '.new-todo' to input
var input = document.querySelector('.new-todo');
// set the targeted class '.todos' to var todoList
var todoList = document.querySelector('.todos');
// set the targeted class '.counter' to var counter
var counter = document.querySelector('.counter');
// creating a function
var handleKeyPress = function(event) {
  // if enter is pressed
  if (event.keyCode === 13) {
    // log the keyCode
    console.log('keyCode', event.keyCode);
    // set the target value to var val
    var val = event.target.value;
    // set the element created 'li' to var li
    var li = document.createElement('li');
    // set the TextNode val to var textNode
    var textNode = document.createTextNode(val);
    // appends child li to parent todoList
    todoList.appendChild(li);
    // appends child textNode to parent li
    li.appendChild(textNode);
    // set the class of li to 'todo'
    li.setAttribute('class', 'todo');

    var numTodos = document.querySelectorAll('.todo').length;
    // var numDones = document.querySelectorAll('.todo').length;
    // counter.setAttribute('class', numTodos);
    counter.innerHTML=numTodos;
    // complete.innerHTML=numDones;

    // set the elemented created 'span' to liSpan
    var liSpan = document.createElement('span');
    // set the class of liSpan to 'remove'
    liSpan.setAttribute('class', 'remove');
    // append child liSpan to parent li
    li.appendChild(liSpan);
    // get the text content and add '_X' with class destroy
    liSpan.innerHTML = '  x';

    // reset the target value to empty
    event.target.value = '';
    // created an event when you click
    // allToDosList.push(li);

    li.addEventListener('click', handleToggleOn);
    // created an event when you close to remove X
    liSpan.addEventListener('click', handleRemovingX);
  }
}
// create function to remmove X from the list item
var handleRemovingX = function(event) {
  this.parentNode.remove(this.parentNode);
  var numTodos = document.querySelectorAll('.todo').length;
  counter.innerHTML=numTodos;
}
// create a function to toggle element 'complete'
var handleToggleOn = function(event) {
  this.classList.toggle('complete');
  // var numDones = document.querySelectorAll('.todo').length;
  // complete.innerHTML=numDones;
}
// create event listener for keydown and click
input.addEventListener('keydown', handleKeyPress);
















// window.onload=function() {
//   var button = document.querySelector("#submitButton");
//   button.onclick = listStuff;
// }

// input.addEventListener('click',)
// ( function() {
//   document.getElementbyId("submitButton");
//   button.onclick = addItem;
// })();

// function listStuff() {
  // var button = document.querySelector("submitButton");
  // button.onclick = addItem;
// }

// function listStuff() {
//     //getting text input
//   var textInput = document.querySelector('input.new-todo');
//     //getting value of text input element
//   var text = textInput.value + ' x';
//     //getting element <ul> to add element to
//   var ul = document.querySelector(".todos");
//     //creating li element to add
//   var li = document.createElement("li");
//     // changes the class
//   li.setAttribute("class", "todo");
//   var liSpan = document.createElement("span", "remove");
//     //inserting text into newly created <li> element
//   li.innerHTML = text;
//   li.onclick = function() {this.parentNode.removeChild(this);}
//     //using if/else statement to add items to top of list
//   if (ul.childElementCount == 0) {
//     // will add if count of ul children is 0 otherwise add before first item
//     ul.appendChild(li);
//   }
//   else {
//     ul.insertBefore(li, ul.firstChild);
//   }
// }

// var removeText = function(event) {
//   console.log(text);
//   text.remove(' x');
// }
