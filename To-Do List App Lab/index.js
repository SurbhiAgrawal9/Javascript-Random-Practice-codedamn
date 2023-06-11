// Write your JavaScript code here
const button = document.getElementById('add-btn');
const ullist = document.getElementById('list');

// const value = input.value;
button.addEventListener('click',function(){
const input = document.getElementById('input-field').value;

  const list = document.createElement('li')
  list.textContent = input
  ullist.appendChild(list)
 document.getElementById('input-field').value = ""
 
     
})
