import React from "react"

export function DecryptCaesar(inputText, inputKey){

    const text = inputText.toUpperCase();
    const key = parseInt(inputKey)

    // Initialize an empty string to store the decrypted text
    let decryptedText = '';

    // Iterate through each character in the encrypted text
    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        // Check if the character is a letter
        if (char.match(/[A-Z]/)) {
        // Get the ASCII code of the character
        const charCode = char.charCodeAt(0);

        // Apply the Caesar cipher decryption with the specified key
        const decryptedCharCode = ((charCode - 65 - key + 26) % 26) + 65;

        // Convert the decrypted ASCII code back to a character and append to the result
        decryptedText += String.fromCharCode(decryptedCharCode);
        } else {
        // If the character is not a letter, leave it unchanged
        decryptedText += char;
        }
    }

    return decryptedText;
}

