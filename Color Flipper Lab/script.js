// Write your JavaScript code to flip the color text on button click
 document.getElementById("flipButton").addEventListener('click',() => {
    const color = '#' + Math.random().toString(16).substr(-6)
 document.getElementById("colorParagraph").innerHTML= color 
})

