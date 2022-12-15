// function removeExclamationMarks(s) {
//   if(s.includes('!')) {
//       return s.replace('!',''e)
//     }
  
// }

function removeExclamationMarks(s) {
    let result = ''
    for(let i  = 0; i < s.length; i++) {
      if(s[i] != '!') {
        result += s[i]
      }
    }
    return result
}