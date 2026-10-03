// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/?envType=problem-list-v2&envId=binary-search

import { binarySearch } from "../../lib/binarySearch";

// Steps: O(n^2)
// 1. External loop start from i = 0 to i < arr.length
// 2. Internl loop start from j = i + 1 to j < arr.length
// 3. Counter start from 0;
// 4. if arr[i] + arr[j] < target then ++Counter


// Steps (2): O(n^2) better
// 1. Order the array O(n log(n))
// 2. The same internal and externl loop.
// 3. Break the internal loop directly when conditian fail.
// 4. Break the external loop when the countern not increment at least one in 
//  the internal loop.


// Steps (3): O(n log n)
// 1. Order the array O(n log n)
// 2. External Loop
// 3. Search by binary search for the target - arr[i]
// 4. if the result > 0; then counter += result else break;

export function countPairs(nums: number[], target: number): number 
{
  nums.sort((a, b) => a - b);
  let counter = 0;
  for(let i = 0; i < nums.length; ++i)
  {
    if(target - nums[i] < nums[i]) return counter;

    const startIndex = i + 1;
    const position = binarySearch(nums, startIndex, nums.length-1, (target - nums[i]) - 0.1);
    const number = position - startIndex;
    if(number === 0) return counter;
    counter += number;
  }

  return counter;
};