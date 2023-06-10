// console.log('JavaScript Arrays Lab')

// In this lab, you will work with JavaScript arrays.
// You have to create 4 functions that will perform operations on arrays such as creating an array, 
// summing the elements, reversing the elements and filtering the elements based on a given function.
// Make sure to write your functions using ESM syntax.

// Start your work here.
export function createArray() {
 const arr = []

    for(let i=1;i<=5;i++){
        arr.push(i);
    }
    return arr
}


export function sumArray(arr) {
     return arr.reduce((a,b) => a+b, 0)
}

 export function reverseArray(arr) {
       return arr.reverse()
 }

export function filterArray(arr, fn){
   return arr.filter(fn) 
}
   
