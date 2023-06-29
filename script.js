// complete the given function

function palindrome(s){

	 const cleanedString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Check if the cleaned string is a palindrome
  const reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
}
module.exports = palindrome
