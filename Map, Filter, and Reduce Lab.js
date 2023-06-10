
// In this lab, you will implement your own map, filter, and reduce functions in JavaScript.
// These functions are commonly used for array manipulation in JavaScript. Map, filter, and reduce 
// functions are higher-order functions that accept a callback function as an argument and apply that 
// function to the elements of the input array in different ways.

// By the end of this lab, you should have 3 functional implementations for map, filter, and reduce

// Implement the myMap, myFilter, and myReduce functions


// myMap function

  function myMap(arr, callback) {
    const result = []
    for (const item of arr){
        result.push(callback(item))
    }
       return result
     
       }

 

// myFilter function

 function myFilter(arr,callback) {
        const result  = []
       for(const item of arr){
        
        if(callback(item)){
            result.push(item)
        }
}
         return result
         }

// myReduce function
 function myReduce(arr,callback,initialValue) {
      let accumulator = initialValue !== undefined ? initialValue : arr[0]
      for(const item of arr) {
         
          accumulator = callback(accumulator, item)         
    
             }
      
        return accumulator
} 

// Export the functions
export {myMap, myFilter, myReduce}
