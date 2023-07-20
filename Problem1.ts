//Acronym

function acronymize(phrase: string): string {
    const words: string[] = phrase.split(/\s+/); // Split the phrase into words
    let acronym: string = "";
  
    for (const word of words) {
      acronym += word[0].toUpperCase(); // Take the first character of each word and convert it to uppercase
    }
  
    return acronym;
  }
  
  // Test Case 1
  console.log(acronymize("Portable Network Graphics")); // Output: PNG
  
  // Test Case 2
  console.log(acronymize("Correct me if I'm wrong"));   // Output: CMIIW
  
  // Test Case 3
  console.log(acronymize("Thanks god It's Friday"));   // Output: TGIF
  