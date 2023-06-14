//for in   ==> index    //for of not working in obj
 var obj  = {
    name: "surbhi",
    age: '50'
  }
for(let num in obj){
    console.log(num)
}


for(let num in obj){
    console.log(obj[num])
}
