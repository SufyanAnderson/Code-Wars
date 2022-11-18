//check if its a palindrome

function isPalindrome(x) {
    // your code here
  const reversedText = x.toLowerCase()
  const palindrome = reversedText.split('').reverse().join('')
  
      return reversedText == palindrome
  }