# Project: CipherX Advanced

## Overview

This project is a web-based decryption tool for various cipher methods. It allows users to input encrypted text and analyze it using different algorithms to find the best match. The project showcases the use of JavaScript, HTML, and CSS to create a user-friendly interface.

## Cipher Methods

### Caesar Cipher

The Caesar cipher is a simple encryption technique that replaces each letter in a message with a letter a fixed number of positions down the alphabet. It is a substitution cipher and is considered a weak encryption method due to its simplicity. However, it is still used in certain contexts, such as in the Caesar salad recipe.

### Atbash Cipher

The Atbash cipher is a monoalphabetic substitution cipher where each letter is replaced by the letter with the same position from the end of the alphabet. It is a simple encryption method that uses a reversed alphabet.

### Reverse Cipher

The Reverse cipher is a substitution cipher where each letter is replaced by the letter that is the same distance from the end of the alphabet. For example, "a" becomes "z", "b" becomes "y", and so on. It is a simple encryption method that is used as a form of obfuscation.

### Progressive Cipher

The Progressive cipher is a substitution cipher where each letter is replaced by the letter that is a fixed number of positions down the alphabet. The number of positions is determined by the position of the letter in the original message. It is a more complex encryption method that adds an extra layer of obfuscation.

## Getting Started

To run the project, follow these steps:

1. Clone the repository: `git clone https://github.com/siddhantbhatt/CipherX-Advanced.git`
2. Open the `index.html` file in a web browser.

## Features

- **Algorithms**: The tool supports four cipher methods: Caesar, Atbash, Reverse, and Progressive.
- **Score**: Each decrypted text is assigned a score based on the presence of keywords and common words.
- **Filtering and Sorting**: Users can filter results based on minimum score and sort them in descending order.
- **Results**: The tool displays the best match and all filtered results in a table format.

## Usage

1. Enter the encrypted text in the input field.
2. Select the algorithm or choose "All" to analyze with all methods.
3. Set the minimum score threshold and the number of top results to display.
4. Click the "Analyze" button to see the results.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.