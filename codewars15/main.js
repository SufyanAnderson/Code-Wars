//check if its a palindrome

function isPalindrome(string) {
    // your code here
  const reversedText = string.toLowerCase()
  const palindrome = reversedText.split('').reverse().join('')
  
      return reversedText == palindrome
  }