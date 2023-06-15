// Write your code to attach the event listener to the button and implement adding the list items here
document.getElementById('addToListButton').addEventListener('click' , function(){
    const inputValue = document.getElementById('listInput').value
    if (inputValue) {
        const listItem = document.createElement('li')
        listItem.textContent = inputValue
        document.getElementById('myList').appendChild(listItem)
        document.getElementById('listInput')
.value = ''
    }
})
