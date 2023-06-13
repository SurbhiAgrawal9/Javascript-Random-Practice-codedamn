// string is anagram or not anagram 

function anagram(s1,s2){
  
  if(s1.split("").sort().join("") === s2.split("").sort().join("")){
    console.log("anagram ")
  } 
  else {
    console.log("not anagram")
  }
}


anagram("actt", "tca")
anagram("god", "dog")
anagram("acaa", "tcee")
