<script> 

// JavaScript program to count pairs 
// with maximum sum. 

// Function to find the number of 
// maximum pair sums 
function sum(a, n) 
{ 
	
	// traverse through all the pairs 
	let maxSum = Number.MIN_VALUE; 
	for(let i = 0; i < n; i++) 
		for(let j = i + 1; j < n; j++) 
			maxSum = Math.max(maxSum, 
							a[i] + a[j]); 
	
	// Traverse through all pairs and 
	// keep a count of the number of 
	// maximum pairs 
	let c = 0; 
	for(let i = 0; i < n; i++) 
		for(let j = i + 1; j < n; j++) 
			if (a[i] + a[j] == maxSum) 
				c++; 
	return c; 
} 

// Driver Code 
let array = [ 1, 1, 1, 2, 2, 2 ]; 
let n = array.length; 

document.write(sum(array, n)); 

// This code is contributed by code_hunt 

</script> 
