/**
* The following is the function where the solution shall be written
*/

function solution (input) {

  // Declare empty array to be filled
  var result = [];

  // Return error message if input does not contain any integers
  if(/^[a-zA-Z]+$/.test(input)) {
    return "Error - input does not contain any integers. Please add integers."
  }

  // Keep only integers from input, removing non-integer characters and whitespaces
  input = input.replace(/[^0-9]/g,'');

  // Check if input string is a single character
  if(input.length === 1) {
    
    // Add the single character to the results
    result.push(input);

    // Return result array
    return result;
  }

  // If input string is not a single character, continue function and for each char in string
  for(let i = 0; i < input.length; i++) {
    
    // Define permutate as a char of the input string and set permutate to recursively call function
    let initialCharacter = input[i];
    let charactersLeft = input.substring(0, i) + input.substring(i + 1);
    let permutate = solution(charactersLeft);

    // For each string to permute
    for(let j = 0; j < permutate.length; j++) {
      
      // Add defined char and permutate char
      result.push(initialCharacter + permutate[j]);
    }
  }

  // Return final array populated with permutated characters that is sorted in descending order
  return result.sort(function(a, b) {
    return b - a;
  });

}

// some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236