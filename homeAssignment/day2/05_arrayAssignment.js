/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]

2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1

4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/
/*

1) Find the number of occurances.  

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count

2) Two Sum 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)

*/

function noOfOccurances(){

    const nums = [2,4,5,2,1,2];
    const k = 2;

    let occurance = 0;
    
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (element == k) {
            occurance++;
        }
    }
    console.log(`${k} occurs ${occurance} times in the array [${nums}]`);
}

function removeDuplicates(){
    
    const inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6];
    const sortArray = inputArray.sort();
    let unique = [];
    inputArray.forEach(element => {
        if (!unique.includes(element)){
            unique.push(element);
        }
    });
    console.log(`duplicates are removed from ${inputArray}. The array after removing duplicate ${unique}`);
}

function findMinMaxWithIndices(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return { min: undefined, max: undefined, minIndex: undefined, maxIndex: undefined };
  }

  // Initialize min and max with the first element of the array
  let min = arr[0];
  let max = arr[0];
  let minIndex = 0;
  let maxIndex = 0;

  // Iterate through the array to find min and max along with their indices
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    } else if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return { min, max, minIndex, maxIndex };
}

function intersection(nums1, nums2) {
  // Convert arrays to sets
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  // Find the intersection by filtering elements that exist in both sets
  const result = [...set1].filter(num => set2.has(num));

  return result;
}

function moveZero(){

  let nums = [0,1,0,3,12];
  let newarray =[];

  console.log("Original Array: " +nums);
  for (let index=0; index<=nums.length-1; index++) {
      if(nums[index]!==0) {
          newarray.push(nums[index])
      }
  }

  console.log("New array without zero: " +newarray);
  let noOfZeros = nums.length - newarray.length;
  console.log("No. of zeros in original array: " +noOfZeros);

  for(let i=0; i<noOfZeros; i++) {
      newarray.push(0);
  }

  console.log("New Array: "+newarray);
}

function findindices(nums) {
  for (let i =0; i<nums.length; i++) {
      for (let j=1; j<nums.length; j++) {
          let sum = nums[i] + nums [j]
          if(sum == target) {
              console.log(`sum of the values in the indicies ${i} and ${j} is ${target}`);
          }
      }
  }
}

const nums = [2,4,7,8,11,14];
const target = 18;
let indexes = findindices(nums);

let nums1 = [];
let nums2 = [];
let resultArray = [];

nums1 = [1,2,2,1]; 
nums2 = [2,2];
resultArray= intersection(nums1, nums2);
console.log(resultArray);
 
nums1 = [4,9,5]; 
nums2 = [9,4,9,8,4]
resultArray= intersection(nums1, nums2);
console.log(resultArray);


// Example usage:
const numbers = [34, 7, 21, 89, 54, 10, 91, 67];
const result = findMinMaxWithIndices(numbers);
console.log(result);

moveZero();
noOfOccurances();
removeDuplicates();

