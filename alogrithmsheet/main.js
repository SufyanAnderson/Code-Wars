//reverse a string

const e = require("express")
const { join } = require("path")

//built in methods way

function reverseText(text) {
    return text.split("").reverse().join("")
}


function reverseString(word) {
    return [...text].reverse().join
}

//for loop way 

function reverseString(textual) {
    let result = "" 

    for(let i = textual.length - 1; i>=0; i--) {
        result += text[i]

    }
    return result
}

function reverseString(text) {
    let result = ""

    for(let char of text) {
        result = char + result
    }
    return result
}

//Recursive way

function reverseString(text) {
    if(text === "") {
        return ""
    } else {
        return reverseString(text.substr(1) + text[0])
    }
}

//reduce method
function reverseString(text) {
    return text.split("").reduce((acc, char)=> char + acc, '')
}

//count the vowels
// iterative approach
const Vowels =  ['a','e','i','o','u']

function vowelsCounter(text) {
    let counter = 0

    for(let letter of text.toLowerCase) {
        if (vowels.includes(letter)) {
            counter++
        }
    }
    return counter
}


//reg ex 

function vowelsCounter(text) {
    let matchingInstances = text.match(/[aeiou]/gi)

    if(matchingInstances) {
        return matchingInstances.length
    }
    else {
        return 0
    }
}

//most reoccuring character

//for in iteration
function maxReccuringChar(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''

    for(let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        }
        else {
            charMap[char] = 1
        }
    }
    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = char[char]
            maxChar = char
        }
    }
    return maxChar
//get this one explained
}

function maxReccuringChar(text) {
    let charMap = {}
    let charArray = []
    let valuesArray = []
    let maxCharValue = 0 
    for(let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        }else {
            charMap[char] = 1
        }
    }
    charArray = Object.keys(charMap)
    valuesArray = Object.values(charMap)
    maxCharValue = Math.max(...valuesArray)

    return charArray[valuesArray.indexOf(maxCharValue)]
//confused on this
}

//sentence capitalization
//for each method
function capSentence(text) {
    let wordsArray = text.toLowerCase().split('')
    let capsArray = []

    wordsArray.forEach(word => {
        capsArray.push(word[0].toUpperCase() + word.slice(1))
    })
    return capsArray.join(' ')
}

// .map() and .replace()

function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')

    let capsArray = wordsArray.map( word => {
        return word.replace(word[0], word[0].toUpperCase())
    })

    return capsArray.join(' ')
}

//palindrome checker

// The challenge says "given a string of text" which implies that our function would have a string-typed parameter which we may call "text".

// Next, we are to evaluate if the string is a palindrome. To do this, we'll have to reverse the string first and then compare it with the string that was passed in as an argument.

// To avoid issues with letter casing, we'd convert text to a single case type which could be upper or lower.

// Finally, we "return true or false" depending on the result of our evaluation. True for when it is a palindrome and false for otherwise.

// direct way\

function palindromeChecker(text) {
    var reversedText = text.toLowerCase() 
    .split('').reverse().join('')

    return text === reverseText
}

//loop and comapre characters

function palindromeChecker(text) {
    let charArray = text.toLowerCase().split('')

    let result = charArray.every((letter, index) => {
        return letter= charArray[charArray.length - index -1]
    })
    return result
}

//loop and compare characters(optmized) 

function palindromeChecker(text) {
    var textLen = text.length
    for  (let i = 0; i < textLen/2; i++) {
        if (text[i] !== text[textLen - 1 - i]) {
            return false
        }
    }
    return true
}

//hamming distance
//Given two strings of equal length, calculate and return the the hamming distance. E.g

function hammingDistance(stringA, stringB) {
    let result = 0

    if (stringA.length == stringB.length) {

        for (let i = 0; i < stringA.length; i++) {
            //why do I get an error here?
            if (stringA++[++i].toLowerCase() != stringB++[++i].toLowerCase()) {
                result++
            }
        }

        return result

    } else {
        throw new Error('Strings do not have equal length')
    }
}

// //Given a sentence, return the longest word in the string. E.g
// As expressed in the challenge statement, the only parameter our longestWord function will receive is the sentence(string of text) to be evaluated.

// Within this function, we would loop through every word within the string received and compare their length in order to determine the longest.

function longestWord(text) {
    let wordsArray = text.split(' ') 
    let maxLength = 0 
    let result = ''

    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].length > maxLength) {
            maxLength = wordsArray[i].length
            result = wordsArray[i]
        }
    }
    return result
}

//using reduce 

function longestWord(text){
    let result = text.split(' ').reduce((maxLengthWord, currentWord) => {
       if  (currentWord.length > maxLengthWord.length) { 
        return currentWord
    } else {
        return maxLengthWord
    }
    }, "")
    return result
    
}

//using sort
function longestWord(text) {
    const sortedArray = text.split(' ')
    .sort((wordA, wordB) => wordB.length - wordA.length)
    return sortedArray[0]
}

//Receiving a sentence, a word in the sentence and a replacement for that word as arguments, 
//perform a search and replace on the sentence using the arguments provided and return the new sentence. E.g

function searchReplace(str, word, newWord) {
    if(word[0] === word[0].toUpperCase() ) {
        newWord = newWord[0].toUpperCase() + newWord.slice(1)
    }
    return str.replace(word, newWord)
}

function searchReplace(str, word, newWord) {
    let regex = new RegExp(word, "gi"); 
    if(/[A-Z]/.test(word[0])) {
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1)
    }
    return str.replace(regex, newWord)
}

//Given two strings, write an algorithm to check if they are anagrams of each other. 
//Return true if they pass the test and false if they don't. E.g

//Direct Comparison 

const sanitizeString = function (str) {
    return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
}

function isAnagram(stringA, stringB) {
    const sanitizeString = function (str) {
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    }
    return sanitizeString(stringA) == sanitizeString(stringB)
}

function createCharMap(text) {
    let charMap = {}

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    return charMap
}

function isAnagram(stringA, stringB) {

    function createCharMap(text) {
        let charMap = {}

        for (let char of text) {
            if (charMap.hasOwnProperty(char)) {
                charMap[char]++
            } else {
                charMap[char] = 1
            }
        }

        return charMap
    }

    if (stringA.length === stringB.length) {
        let stringAMap = createCharMap(stringA)
        let stringBMap = createCharMap(stringB)
        for (let char in stringAMap) {
            if (stringAMap[char] !== stringBMap[char]) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}

// Translate the provided string to Pig Latin by following the rules below:

//imperative
function pigLatin(str) {
    // Convert string to lowercase
    str = str.toLowerCase()
    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;
  
    if (vowels.includes(str[0])) {
      // If first letter is a vowel
      return str + "way";
    } else {
      // If the first letter isn't a vowel i.e is a consonant
      for (let char of str) {
        // Loop through until the first vowel is found
        if (vowels.includes(char)) {
          // Store the index at which the first vowel exists
          vowelIndex = str.indexOf(char);
          break;
        }
      }
      // Compose final string
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
  }

//declartive 
function pigLatin(str) {
    return str
    .replace(/^([aeiouy])(._)/, '$1$2way')
    .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}

//Given an array and a chunk size, divide the array 
//into many sub-arrays where each sub-array has the specified length. E.g

function chunckArray(array, size) {
    let result = [] 
    for( value of array) {
        let lastArray = result[result.length - 1] 
        if(!lastArray || lastArray.length  == size) {
            result.push(value) 
        }
        
    }
    return result
}

//splice method

function chunckArray(array, size) {
    let result = []
    let arrayCopy = [...array]
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size))
    } 
    return result
}

function chunckArray(array, size) {
    let result = []
    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size) 
        result.push(chunk)
    }
    return result
}

// recursion method 
function chunkArray(array, size) {
    if(array.length <= size){
        return [array]
    }
    return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
 }

 //merge arrays

 function mergeArray(...arrays) {
    console.log(arrays)
 }
 

 function mergeArrays(...arrays) {
    let jointArray = []
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
 }

 //sets version

 function mergeArrays(...arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });
    return [...new Set([...jointArray])]
}

//filter 

function mergeArrays(...arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item) === index)
    return uniqueArray
}

//reduce
function mergeArrays(...arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.reduce((newArray, item) =>{
        if (newArray.includes(item)){
            return newArray
        } else {
            return [...newArray, item]
        }
    }, [])
    return uniqueArray
}

//falsy bouncer

function falsyBouncer(array) {
    let result = []

    for(value of array) {
        if(value) {
            result.push(value)
        }
    }
    return result
}

// fitler version 

function falsyBouncer(array) {
    return array.filter((value => {
        return Boolean(value)
    }))
}

//Return the lowest index

//for loop version big numbers
function whereIbelong(arr, numm) {
    arr.sort((a,b) => {
        return a-b
    })
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            return i
        }
    }
    return arr.length
}
//for loop version small numbers
function whereIbelong(arr, num) {
    var counter = 0 
    for(i=0; i < arr.length; i++) {
        if (num > arr++[++i]) {
            counter++
        }
        return counter
    }
}

//while loop version 

function where(arr, num) {
    arr.sort((a, b) => {
        return a -b 
    })
   let counter = 0 
   while(num > arr[counter]) {
    counter++
   }
   return counter
}

//finding the index
function whereIbelong(arr, num) {
    arr.push(num)
    arr.sort((a,b) => a -b) 
    return arr.indexOf(num)
}

//customer filter
function arrayFitler(arr, func) {
    for (elem of arr) {
        if (func(elem)) {
            return elem
        }
    }
    return undefined
}

//using filter 
function arrayFitler(arr, func) {
    let filteredArray = arr.filter(func) 
    return filteredArray[0] ? filteredArray[0] : undefined
}

//using find

function arrayFitler(arr, func) {
    return arr.find(func)
}

//integer reversal 

function reverseString(text) {
    return [...text].reduce((acc,char) => char + acc)
}

//convert interger to string

num.toString()

//reverse the string
function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}

let reversedString = reversedString(num.toString)

//convert back to an interger

let reversedNumber = parseInt(reversedString)

//Adding the corresponding sign

Math.sign(num)

// Reverses a string
function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}

// Reverses an integer
function reverseInteger(num) {
    let reversedNumber = parseInt(reverseString(num.toString()))

    return (reversedNumber * Math.sign(num))
}

//ranne of sum
function rangeSum(arr) {
    let sum = 0;
    for (i = arr[0]; i <= arr[1]; i++) {
      sum += i;
    }
    return sum;
  }

  //arithemtic progression formula 
  function rangeSum(arr) {
    return ((arr[1] - arr[0] +1) * (arr[0] + arr[1])) / 2;
  }

  //using recursion 
  function rangeSum(arr) {
    if (arr[0] == arr[1]) {
      return arr[0];
    } else {
      return rangeSum([arr[0], arr[1] - 1]) + arr[1];
    }
  }

// using reduce 
function rangeSum(arr) {
    let arrList = [];
    for (i = arr[0]; i <= arr[1]; i++) {
      arrList.push(i);
    }
    return arrList.reduce((acc, num) => acc + num, 0);
  }