/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

params 
an empty array named x
for each that iterates over each element of x

return 
[1,2,3] 6
*/

grow = x => x.reduce((prev,cur) => prev * cur)