//Objective is to add two integers without the use of '+' or '-'

let a = 3, b = 5


//O(n) solution using bitwise operators

//Our first argument here will represent our answer as we recurse
//Each time we recurse, we XOR a and b, which is the same thing as adding the two numbers, without the carry
//To adjust for the carry, we AND a and b, which will carry the 1 over to the next bit ONLY IF they are both 1's
function getSum(a, b) { 
    return b == 0 ? a : getSum(a ^ b, (a & b) << 1)
}
return getSum(a,b)
