export const assertEqual = (testName: string, output: number, 
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