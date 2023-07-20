//Atbash Cipher


function atbashCipher(text: string): string {
    const plainAlphabet: string = "abcdefghijklmnopqrstuvwxyz";
    const cipherAlphabet: string = "zyxwvutsrqponmlkjihgfedcba";
    let result: string = "";
  
    for (let i = 0; i < text.length; i++) {
      const char: string = text[i].toLowerCase();
      const index: number = plainAlphabet.indexOf(char);
  
      if (index !== -1) {
        result += cipherAlphabet[index];
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  // Test Case 1
  const input1: string = "Olivn rkhfn wloli hrg znvg";
  const output1: string = atbashCipher(input1);
  console.log(output1); // Output: Loremipsumdolorsitamet
  
  // Test Case 2
  const input2: string = "Svool dliow! R'n ovzimrmt gbkvhxirkg!";
  const output2: string = atbashCipher(input2);
  console.log(output2); // Output: HelloworldImlearningtypescript
  
  // Test Case 3
  const input3: string = "Gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt";
  const output3: string = atbashCipher(input3);
  console.log(output3); // Output: Thequickbrownfoxjumpsoverthelazydog
  