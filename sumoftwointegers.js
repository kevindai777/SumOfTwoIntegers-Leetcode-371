//Objective is to add two integers without the use of '+' or '-'

let a = 3, b = 5


//O(n) solution using bitwise operators

//Our first argument here will represent our answer as we recurse
//Each time we recurse, we XOR a and b, which is the same thing as adding the bits using carries
//We also adjust b by using AND, finding the intersection between the two numbers then shifting to the left (x2)
function getSum(a, b) { 
    return b == 0 ? a : getSum(a ^ b, (a & b) << 1)
}
return getSum(a,b)