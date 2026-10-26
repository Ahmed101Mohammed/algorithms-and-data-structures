// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/?envType=problem-list-v2&envId=binary-search

import { reversedBinarySearch } from "../../lib/binarySearch";

// Note: In all solutions I will assume that n is columns and m is rows

// Idea (1): O(m * n)
// Use 2 loops to go through all matrix elements.
// Then check every number is under zero or not.
// If it under zero increase the counter by one.

// Idea (2): O(m * (log n))
// Use one loop to go through matrix rows.
// Use binary search to find the expected position for number -0.9
// When I find the address add to the counter 
//  += (n - expected position) * (m - current row)
// Then set the n to equal expected position.

// Idea (3): O(m * (log n)) Better version.
// Use one loop to go through matrix rows.
// Use condition to check the last value column, and if it not negative, go to 
//  the next row.
// If it negative, use binary serch, and then counter increased by
//  += (n - expected position) * (m - current row)
// And all rows' columns equal the expected position.

export function countNegativesBinarySearchVersion(grid: number[][]): number 
{
  let counter = 0;
  for(let i = 0; i < grid.length; ++i)
  {
    if(grid[i][grid[i].length - 1] >= 0) continue;

    const firstNegative = reversedBinarySearch(grid[i], 0, 
      grid[i].length - 1, -0.9);
  
    counter += grid[0].length - firstNegative; // I discovered that no difference in peformance, so I did not follow the equation in the plan.
  }

  return counter;    
};

// Idea (4): O(m + n)
// Use 2 pointers:
// 1st pointer: point to the last row.
// 2nd pointer: point to the 1st column.
// If the pointers point to negative value:
//  Then counter increased, by the diffrency between the column length and 
//  current 2nd pointer index, and the 1st pointer will decreased by 1.
// If the pointers point to positive value, then the 2nd pointer increased by 1. 

export function countNegatives(grid: number[][]): number 
{
  let counter = 0;
  let column_length = grid[0].length;
  let row_pointer = grid.length - 1;
  let column_pointer = 0;

  while(column_pointer < column_length && row_pointer > -1)
  {
    if(grid[row_pointer][column_pointer] < 0)
    {
      --row_pointer;
      counter += (column_length - column_pointer);
      continue;
    }

    ++column_pointer;
  }

  return counter;    
};