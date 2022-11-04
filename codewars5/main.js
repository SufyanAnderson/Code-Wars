//Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.


function getSumOfDigits(integer) {
    let num = Number(integer).toString().split('');
    return num.map((element) => Number(element)).reduce((a,b) => a+b, 0);
  }