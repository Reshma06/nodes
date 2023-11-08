var itemList = document.querySelector('#items');

//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//childNode
console.log(itemList.childNode);

//children
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

//lastChild
console.log(itemList.laststChild);

//lasstElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previosSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);

//create element

//create a div
var newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';

//add id
newDiv.id = 'hello1';

//add attr
newDiv.setAttribute('title','Hello Div');

//create text node
var newDivText = document.createTextNode('hello World');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);

// Create a new list item element
var newListItem = document.createElement('li');

// Set the text content of the new list item
newListItem.textContent = 'Hello World';

// Select the item list element
var itemList = document.querySelector('#items');

// Insert the new list item as the first item in the list
itemList.insertBefore(newListItem, itemList.firstElementChild);
