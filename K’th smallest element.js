function sortSet(myset) {
    let myarr = [];
    for (let element of myset) {
        myarr.push(element);
    }
    myarr.sort((a, b) =>  a - b);
    myset.clear()
    for (let element of myarr) {
        myset.add(element);
    }
    return myset;
}
 
let arr = [12, 3, 5, 7, 19];
let N = arr.length;
let K = 4;
 
let s = sortSet(new Set(arr));
 
// List all Values
for(const itr of s.values()) {
    if(K == 1){
        console.log(itr); // itr is the Kth element in the set
        break;
    }
    K = K - 1;
}
 
// This code is contributed by Gautam goel.
