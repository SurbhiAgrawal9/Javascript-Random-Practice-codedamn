// Get the input field, submit button, and success message elements
const nameInput = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');
const successMsg = document.getElementById('successMsg');

// Add event listener to the submit button
submitBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission

  if (nameInput.value.trim() === '') {
    // Create and append error message paragraph if the input field is empty
    const errorMsg = document.createElement('p');
    errorMsg.textContent = 'Please enter your name.';
    errorMsg.id = 'errorMsg';
    document.body.appendChild(errorMsg);
  } else {
    // Clear any existing error messages
    const errorMsg = document.getElementById('errorMsg');
    if (errorMsg) {
      errorMsg.remove();
    }

    // Display the success message
    successMsg.style.display = 'block';
  }
});

// Add event listener to the name input field
nameInput.addEventListener('input', function() {
  const errorMsg = document.getElementById('errorMsg');
  if (errorMsg) {
    errorMsg.remove();
  }
});
