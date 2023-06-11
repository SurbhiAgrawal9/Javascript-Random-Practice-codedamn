//With normal functions, you can create constructors which serve as a special function for instantiating an object from a class.

class surbhi {
    constructor(name, color){
         this.name = name;
        this.color = color;
         
     }
     sayName() {
         console.log(`my name is ${this.name} and my fav color is ${this.color}`)
    }
    
}
    
  const obj = new surbhi("lucky","gray");
    obj.sayName()
