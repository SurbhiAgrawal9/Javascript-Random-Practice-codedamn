// define event listener for the Add button here
// const input1  = document.getElementById('input1')
// const input2  = document.getElementById('input2')

document.getElementById('add').addEventListener('click', function() {
   const res = parseFloat(document.getElementById('input1').value) + parseFloat(document.getElementById('input2').value)
   
    document.getElementById('result').innerHTML = res;
})
