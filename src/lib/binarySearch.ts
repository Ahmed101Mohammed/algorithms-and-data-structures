export const binarySearch = (array: number[], startIndex: number, 
  endIndex: number, target: number): number =>
{
  if(startIndex >= endIndex)
  {
    const max = Math.max(startIndex, endIndex);
    if(array[max] < target) return max + 1;
    return max;
  }
  
  let mid = Math.floor((startIndex + endIndex) / 2);

  const value = array[mid];

  if(value == target)
    return mid;
  else if(value > target)
  {
    if(mid === endIndex) --mid;
    return binarySearch(array, startIndex, mid, target);
  }
  else
  {
    if(mid === startIndex) ++mid;
    return binarySearch(array, mid, endIndex, target);
  }
}