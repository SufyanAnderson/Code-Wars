/*
1. Create a function of what that takes in a string 
2. This string should give a sum of all the characters, example 'ccc' = 231\
3. charCode@ should give the ASCII value


Example: 

uniTotlal('a') == 97

*/


function uniTotal (string) {
    // total up dem unicodes!
    let result = 0 
    for( let i = 0; i < string.length; i++) {
      result += string.charCodeAt(i)
    }
      return result
    }