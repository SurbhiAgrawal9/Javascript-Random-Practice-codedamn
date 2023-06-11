// Write your JavaScript code here
 document.getElementById('color-select').addEventListener('change', (e) => {
    document.getElementById('result').innerHTML = e.target.value
 })
