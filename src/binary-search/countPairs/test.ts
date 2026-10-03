import { countPairs } from "./countPairs";

function main():void
{
  example1();
  example2();
  example3();
}

const example1 = () =>
{
  const name = "Example 1";

  let nums = [-1,1,2,3,1];
  let target = 2;
  let expectedOutput = 3;
  let output = countPairs(nums, target);
  assertEqual(name, output, expectedOutput)
}

const example2 = () =>
{
  const name = "Example 2";

  let nums = [-6,2,5,-2,-7,-1,3];
  let target = -2;
  let expectedOutput = 10;
  let output = countPairs(nums, target);
  assertEqual(name, output, expectedOutput)
}

const example3 = () =>
{
  const name = "Example 3";

  let nums = [-1,3,8,3];
  let target = 2;
  let expectedOutput = 0;
  let output = countPairs(nums, target);
  assertEqual(name, output, expectedOutput)
}

const assertEqual = (testName: string, output: number, 
  expectedOutput: number) =>
{
  if(output === expectedOutput)
    console.log(`Test '${testName}': PASSED`);
  else
    console.log(`Test '${testName}': FAILED
      Output: ${output}
      Expected Output: ${expectedOutput}  
    `)
}

main();