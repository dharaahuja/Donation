/*Longest Subarray with Sum Divisible by Given Number in Array with JavaScript

Given an array of integers, the task is to find the longest subarray whose sum is divisible by a given number.

Input: 
[4, 5, 0, -2, -3, 1], k = 5
Output: 
Length = 6*/

// We store a len of the array in a variable and the sub array in abother variable 
let inputArr = [4, 5, 0, -2, -3, 1]
let div = 5

const sum = (numbers) => {
   return numbers.reduce((acc, cur) => {acc + cur}, 0)
}

/*
var subArrayLen =  inputArr.length
var subArr = inputArr
var reverseSubArray = inputArr

var shrinkVal = 0
while(subArrayLen == 0) {
    subArr = inputArr.slice(shrinkVal, inputArr.length)
    reverseSubArray = inputArr.slice()
    if((sum(subArr)%div == 0)) {
        console.log(subArr);
        return subArr;
    } else if()

    
    shrinkVal --;
} */

const getAllSubarrays = (arr) => {
    let subarrays = [];
    
    for (let start = 0; start < arr.length; start++) {
        for (let end = start; end < arr.length; end++) {
        subarrays.push(arr.slice(start, end + 1));
        }
    }
    
    return subarrays;
 };
    
    const array = [1, 2, 3];
    const result = getAllSubarrays(array);
    
    console.log(result);
    // Logs: [ [1], [1, 2], [1, 2, 3], [2], [2, 3], [3] ]