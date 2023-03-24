// 1. Variables to store the equations in 
//       x1,y1 etc
// 2. Place to store where operations will happen 
  
// 3. return of the answer

// Version 1 how far I got
// */ 


// function distanceBetweenPoints(x1, y1, x2, y2) {
//     let a = x2 - x1;
//     let b = y2 - y1;
//     let c = Math.sqrt(a * a + b * b) ^ 2;
//     return c;
// }


/* 
  Solution

*/
function distanceBetweenPoints(a,b) { 
    return ((a.x - b.x) ** 2 + (a.y -b.y) ** 2) ** 0.5
   
   }