// Find the longest consecutive sequence of numbers in array in javascript :

/* Input: inputArray[] = [1, 9, 3, 10, 4, 20, 2]
Output: 4
Explanation: The subsequence 1, 3, 4, 2 is the longest subsequence of consecutive elements */

//Answer : 

// 1. Use Set
// 2. Sort the Array
// 3. Use Brute Force

// Approach 1 - Using Set 

function longConsecutiveSeq(inputArray) {
    if(inputArray == null || inputArray.length === 0) {
        return 0;
    }

    let set = new Set(inputArray);
   // console.log(`set : ${set}`);
    let outputLongValue = 0;
    for (let temp of inputArray) {
       // console.log(`temp ${temp}`)
       // console.log(`(!set.has(temp-1)) ${(!set.has(temp-1))}`)
        if(!set.has(temp-1)){
           // console.log(`temp-1 ${temp-1}`)
            let count = 0;
            // going from one to another 
            while(set.has(count+temp)){
              //  console.log(`count+temp ${count+temp}`)
                count ++;
            }
            outputLongValue = Math.max(outputLongValue, count);
        }
    }
    return outputLongValue;
}

//let inputArray = [36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42]; 
//console.log(longConsecutiveSeq(inputArray));

function longConsequtiveSeqUsingSorting(inputarray) { 
    if (inputarray.length === 0) { 
        return 0; 
    } 
    inputarray.sort((a, b) => a - b); 
    let countValue = 1; 
    let maxcountValue = 1; 
    for (let i = 1; i < inputarray.length; i++) { 
        if (inputarray[i - 1] + 1 === inputarray[i]) { 
            countValue++; 
        } else if (inputarray[i - 1] !== inputarray[i]) { 
            countValue = 1; 
        } 
        maxcountValue = Math.max(maxcountValue, countValue); 
    } 
    return maxcountValue; 
}

const inputArray1 = [1, 9, 3, 10, 4, 20, 2]; 
const outputLongValue = 
    longConsequtiveSeqUsingSorting(inputArray1); 
console.log(outputLongValue);

function longConsequtiveSeqUsingBrute(inputArray) { 
    let longestLength = 0; 
    for (let i = 0; i < inputArray.length; i++) { 
        let currentNumValue = inputArray[i]; 
        let currentLengthValue = 1; 
        while (inputArray.includes(currentNumValue + 1)) { 
            currentNumValue += 1; 
            currentLengthValue += 1; 
        } 
        if (currentLengthValue > longestLength) { 
            longestLength = currentLengthValue; 
        } 
    } 
    return longestLength; 
} 