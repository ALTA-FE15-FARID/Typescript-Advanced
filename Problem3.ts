//Armstrong Number

function isArmstrongNumber(num: number): boolean {
    const numStr: string = num.toString();
    const power: number = numStr.length;
    let sum: number = 0;
  
    for (let i = 0; i < numStr.length; i++) {
      const digit: number = parseInt(numStr[i], 10);
      sum += Math.pow(digit, power);
    }
  
    return sum === num;
  }
  
  // Test Case 1
  console.log(isArmstrongNumber(153)); // Output: true
  
  // Test Case 2
  console.log(isArmstrongNumber(9));   // Output: true
  
  // Test Case 3
  console.log(isArmstrongNumber(10));  // Output: false
  