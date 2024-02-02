import React from "react"

export function EncryptCaesar(inputText, inputKey){
    
    const text = inputText.toUpperCase();
    const key = parseInt(inputKey)
    // Initialize an empty string to store the encrypted text
    let encryptedText = '';
  
    // Iterate through each character in the input text
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
  
      // Check if the character is a letter
      if (char.match(/[A-Z]/)) {
        // Get the ASCII code of the character
        const charCode = char.charCodeAt(0);
  
        // Apply the Caesar cipher encryption with the specified key
        const encryptedCharCode = ((charCode - 65 + key) % 26) + 65;
  
        // Convert the encrypted ASCII code back to a character and append to the result
        encryptedText += String.fromCharCode(encryptedCharCode);
      } else {
        // If the character is not a letter, leave it unchanged
        encryptedText += char;
      }
    }
    return encryptedText; 
}