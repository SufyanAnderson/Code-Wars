/* 

Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

1. empty array to put the string and the string length in 

2. string and string length  

3. variable to store string and string length

return "apple 5 ban 3"

*/



const addLength = (str) => str.split(' ').map((e) => `${e} ${e.length}`);
