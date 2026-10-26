import { assertEqual } from "../../lib/test";
import { countNegatives, countNegativesBinarySearchVersion } from "./countNegatives";

function main():void
{
  example1();
  example2();
  example3();

  example4();
  example5();
  example6();
}

const example1 = () =>
{
  const name = "Example 1";

  let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
  let expectedOutput = 8;
  let output = countNegativesBinarySearchVersion(grid);
  assertEqual(name, output, expectedOutput)
}

const example2 = () =>
{
  const name = "Example 2";

  let grid = [[3,2],[1,0]];
  let expectedOutput = 0;
  let output = countNegativesBinarySearchVersion(grid);
  assertEqual(name, output, expectedOutput)
}


const example3 = () =>
{
  const name = "Example 3";

  let grid = [[5,1,0],[-5,-5,-5]];
  let expectedOutput = 3;
  let output = countNegativesBinarySearchVersion(grid);
  assertEqual(name, output, expectedOutput)
}

const example4 = () =>
{
  const name = "Example 4: The faster algorithm";

  let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
  let expectedOutput = 8;
  let output = countNegatives(grid);
  assertEqual(name, output, expectedOutput)
}

const example5 = () =>
{
  const name = "Example 5: The faster algorithm";

  let grid = [[3,2],[1,0]];
  let expectedOutput = 0;
  let output = countNegatives(grid);
  assertEqual(name, output, expectedOutput)
}


const example6 = () =>
{
  const name = "Example 6: The faster algorithm";

  let grid = [[5,1,0],[-5,-5,-5]];
  let expectedOutput = 3;
  let output = countNegatives(grid);
  assertEqual(name, output, expectedOutput)
}

main();