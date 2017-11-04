$(document).ready(function(){
  const form = document.getElementsByTagName('form')[0];
  createDiv();

  form.addEventListener('submit', function(ev){
    ev.preventDefault();
    const inputValue = receiveInput();
    addListItem(inputValue);
  })
});

function receiveInput(){
  const item = document.getElementById('item');
  const value = item.value;
  item.value = "";
  return value;
}

function createDiv(){
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  ul.className = "todo-list";
  document.body.appendChild(div);
  div.appendChild(ul);
}

function addListItem(text){
  const ul = document.querySelector('.todo-list');
  const li = document.createElement('li');
  li.innerText = text;
  ul.appendChild(li);
}
