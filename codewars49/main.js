

/* 
1. Length variable 1 side is KNOWN
2. Width variable
3. Height variable
4. Volume variable KNOWN 
5. if statement that return true 
if cuboid has equal sides
6. else state that returns false
if cuboid has unequal sides and
volume or side is less than or equal to
0 


true or false 

(77, 2) 
*/



var cubeChecker = function(volume, side){
    
    if (volume <=  0 || side <= 0) {
    return false
  }
    
   else if(volume == side ** 3) {
      return true
    }
    
    return false
  
};